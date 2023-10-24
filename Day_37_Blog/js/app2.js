import HttpClient from "./httpClient.js";
const client = new HttpClient();
const root = document.getElementById('root');

let dataFormSignUp = {
    name: '',
    email: '',
    password: '',
};

const isLogin = () => {
    //Kiểm tra trạng thái đăng nhập
    const tokens = localStorage.getItem("userData");
    if (tokens) {
      return true;
    }
    return false;
};


const toastUi = (param) => {
    content = ` <div class="toast-header">${param ? param : ''}</div>  `
    return content;
};

const renderUiHomeList = async(paramsHome) => {
    let dataBlogs = [];
    try {
        await client.get(`/blogs`).then(({res, data}) => {
            const code = data.code;
            if (code) {
                // console.log('renderUiHomeList 200:');
                dataBlogs = data.data; console.log('dataBlogs: ', dataBlogs);
            }
            // const listBlog = data?.data;

        });

    } catch (error) {
        console.log('error: ', error);
    }

    // console.log('dataBlogs', dataBlogs);

    const uiHomeList = `
    <div class="blog-page">
        <row class="d-flex justify-content-between align-content-center px-2 pt-2">
            ${ isLogin() === true ?
                '<div><button class="btn-custom  btn-sign-in-home">Đăng nhập</button></div>':
                '<div><button class="btn-custom  btn-log-out">Đăng xuất</button></div>'
            }
        </row>


        <div class="list-blog">
            ${
                dataBlogs.map( (item) => {
                    return (`
                    <div class="blog-item">
                        <div class="blog-time-previous-time ">
                            <div class="blog-time-previous-time__day">Một Ngày Trước</div>
                            <div class="blog-time-previous-time__time">11h chiều 25 phút</div>
                            <div class="blog-time-previous-time__name-style">@${item?.userId.name}</div>
                        </div>

                        <div class="blog-item-main-content">
                            <span class="blog-item__user-name">${'<strong>User name:</strong>'} ${ item?.userId.name}</span>
                            <span class="blog-item__title">${'<strong>Title:</strong>'} ${item?.title}</span>
                            <span class="blog-item__content">${'<strong>Content:</strong>'} ${item?.content}</span>
                            <span class="blog-item__see-detail"><a href="" ># ${item?.title}</a></span>
                            <span class="blog-item__tag"># ${item?.userId.name}</span>
                            <span class="blog-item__time-ago">Khoảng 1 giây đọc.</span>
                        </div>
                    </div>
                    `)
                })
            }
        </div>
    </div>

    `
    return uiHomeList;
}

const renderSignUpForm = () => {
    const UI = `
    <form action="" class="sign-up-form">

        <div class="row-item">
            <label for="use-name" aria-placeholder="Please enter the name">Enter Your name</label>
            <input value="User name" type="text" id="use-name">
        </div>

        <div class="row-item">
            <label for="email">Enter Your email</label>
            <input value="User-name@gmail.com" type="email" id="email">
        </div>

        <div class="row-item">
            <label for="pass-word">Enter Your password</label>
            <input value="123456aA" type="password" id="pass-word" placeholder="123456a@">
        </div>

        <div class="w-100 d-flex mt-2">
            <button class="btn-custom mr-2" id="btn-sign-up">
                <span>Đăng kí</span>
            </button>

            <button type="button" class="btn-custom" id="btn-sign-in">
                <span>Đăng nhập</span>
            </button>

        </div>
    </form>
    `
    return UI;
};


async function handleRegister() {

    const btnSignInEL = root.querySelector('#btn-sign-in');
    btnSignInEL.addEventListener("click", function() {
        root.innerHTML = renderSignInForm();
        return handleSignUp()
    });

    const btnSignUpEL = root.querySelector('#btn-sign-up');

    btnSignUpEL.addEventListener("click", function() {
        //  FORM Đăng kí
        const signUpFormEL = root.querySelector('.sign-up-form');
        signUpFormEL.addEventListener("submit", async function(event) {
            event.preventDefault();

            const useNameInput = signUpFormEL.querySelector('#use-name');
            const emailInput = signUpFormEL.querySelector('#email');
            const passInput = signUpFormEL.querySelector('#pass-word');

            // console.log('useNameInput', useNameInput.value);
            // console.log('emailInput', emailInput.value);
            // console.log('passInput', passInput.value);

            dataFormSignUp.email = emailInput.value;


            const paramSignUp = {
                name: useNameInput.value,
                email: emailInput.value,
                password: passInput.value,
            }

            const resRegister = await client.post(`/auth/register`, paramSignUp);
            console.log('resRegister: ', resRegister);

            const { data, message } = resRegister.data;
            const status = resRegister.res.status;

            if (status === 201) {
                window.alert(message)
                console.log('201', data);
                paramsHome.isLogin = true;
                const parseData = JSON.stringify(data); console.log('parseData', parseData, typeof parseData);

                // Lưu token
                localStorage.setItem("userData", parseData); console.log('localStorage',  localStorage);

                root.innerHTML = renderSignInForm();
            } else if (status === 400) {
                window.alert(message);
                root.innerHTML = renderSignInForm();
            }


        });
        //
    });



    // signUp();

}

function renderSignInForm() {
    console.log('renderSignInForm đăng nhập');
    const UI =  `
    <form action="" class="sign-in-form">

        <div class="row-item">
            <label for="email">Enter Your email</label>
            <input type="email" id="email">
        </div>

        <div class="row-item">
            <label for="pass-word">Enter Your password</label>
            <input type="password" id="pass-word" placeholder="123456a@">
        </div>

        <div class="w-100 d-flex mt-2">
            <button class="btn-custom mr-2" id="btn-sign-in">
                <span>Đăng nhập</span>
            </button>

            <button type="button" class="btn-custom"  id="btn-sign-up">
                <span>Đăng kí</span>
            </button>

        </div>
    </form>
    `
    return UI;
}
// Hàm đăng nhập
function handleSignUp() {
    root.innerHTML = renderSignInForm();

    const btnSignUpEL = root.querySelector("#btn-sign-up")

    btnSignUpEL.addEventListener("click", async function() {
      root.innerHTML = renderSignUpForm();
     return await handleRegister()
    });

    const signInFormEL = root.querySelector('.sign-in-form');

    signInFormEL.addEventListener("submit", async function(event) {
        event.preventDefault(); console.log('Form dang nhap');

        const emailInput = signInFormEL.querySelector('#email');
        const passInput = signInFormEL.querySelector('#pass-word');

        const paramLogin = {
            email: emailInput.value,
            password: passInput.value,
        }

        const resLogin = await client.post(`/auth/login`, paramLogin);
        console.log('resLogin: ', resLogin);

        const { code, data, message } = resLogin.data;
        if (code === 200) {
            alert(message)
            console.log('200', data);

            paramsHome.isLogin = true;

            const parseData = JSON.stringify(data);
            console.log('parseData', parseData, typeof parseData);

            // Lưu token
            localStorage.setItem("userData", parseData);
            console.log('localStorage',  localStorage);
            renderUiHomeList(); // Đăng nhập xong về home list
        }

        // throw message;
    });
}


const render = async () => {
    console.log('render');

    //     if (isLogin()) {
    //
    //     }

    // handleLogin();
    root.innerHTML = await renderUiHomeList();
    const btnSignInHome = root.querySelector('.btn-sign-in-home');

    if (btnSignInHome) {
        btnSignInHome.addEventListener("click", function() {
            console.log('btnSignIn home -> đăng nhâp')
            // handleRegister();
            handleSignUp();
        });
    }


    // handleLogin();
    // eventLogout();
};

render();