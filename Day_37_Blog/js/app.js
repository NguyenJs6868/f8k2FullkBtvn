import HttpClient from "./httpClient.js";

const client = new HttpClient();
// console.log('cliet', client.get);

const blogPage = document.getElementById('root');


let paramsHome = {
    isLogin: false,
};

let dataFormSignIn = {
    email: '',
    password: '',
};

let dataFormSignUp = {
    name: '',
    email: '',
    password: '',
};

function renderUiHomeList(listBlog, paramsHome) {
    if (listBlog) {
        return `
        ${paramsHome.isLogin ?
            '<button class="btn-custom  btn-log-out">Đăng xuất</button>':
            '<button class="btn-custom  btn-sign-in-start">Đăng nhập</button>'
        }
        <div class="blog">
            <div class="list-blog">
                ${
                    listBlog.map( (item) => {
                        // console.log('item', item);
                       return (
                        `
                        <div class="blog-item">
                            <h3 class="user-name" >${item.userId.name}</h3>
                            <h5 class="blog-title">${item.title}</h5>
                            <span class="blog-content">${item.content}</span>
                        </div>

                       `)

                    }).join('')
                }
            </div>
        </div>

        `
    };
};

// Trả về UI Form đăng nhập
function renderUiFormSignIn(param) {
    console.log('Trả về UI Form đăng nhập');
    return `
        <form action="" class="sign-in-form">

            <div class="row-item">
                <label for="email">Enter Your email</label>
                ${param && !param.email ? `<input type="text" id="email" value="${param.email}">` : '<input type="text" id="email"' }

            </div>

            <div class="row-item">
                <label for="pass-word">Enter Your password</label>
                ${param && param.password != undefined ? `<input type="password" id="pass-word" value="${param.password}">` : '<input type="text" id="pass-word">'}
            </div>

            <div class="w-100 d-flex">
                <button class="btn-custom  btn-sign-in mr-2">
                    <span>Đăng nhập</span>
                </button>

                <button type="button" class="btn-custom btn-sign-up ">
                    <span>Đăng kí</span>
                </button>

            </div>

        </form> `
}
// Trả về UI Form đăng kí - ko cần submit thì thêm type = button ko thì thôi
function renderUiFormSignUp(param) {
    return  `
    <form action="" class="sign-up-form">

        <div class="row-item">
            <label for="use-name" aria-placeholder="Please enter the name">Enter Your name</label>
            ${param && param.name != undefined ? `<input type="text" id="pass-word" value="${param.name}">` : '<input type="text" id="use-name" value="Name">' }

        </div>

        <div class="row-item">
            <label for="email" >Enter Your email</label>
            ${param && param.email != undefined ? `<input type="text" id="email" value="${param.email}">` : '<input type="text" id="email">'}
        </div>

        <div class="row-item">
            <label for="pass-word">Enter Your password</label>
            <input type="password" id="pass-word" value="123456aA">

        </div>

        <div class="w-100 d-flex">

        <button class="btn-custom  mr-2 btn-sign-up">
            <span>Đăng kí</span>
        </button>

        <button type="button" class="btn-custom  btn-sign-in">
            <span>Đăng nhập</span>
        </button>

        </div>

    </form>

    `
}

const toastUi = (param) => {
    return ` <div class="toast-header">${param ? param : ''}</div>  `
};


/******************************************************/
function getListPost() {

    console.log('paramsHome: ', paramsHome);

    client.get(`/blogs`).then(({res, data}) => {
        // console.log('res',  res);
        const listBlog = data?.data;
        // console.log('listBlog',  listBlog);
        blogPage.innerHTML = `<>${renderUiHomeList(listBlog, paramsHome)}</>`;

        // ở màn home mặc định, có list data Click Nút Sign in nhập -> Chuyển form nhập 2 trường
        const btnSignUpStartEL = blogPage.querySelector('.btn-sign-in-start');
        if (btnSignUpStartEL) {
            btnSignUpStartEL.addEventListener("click", function() {
                console.log('btnSignUpStartEL hiện form đăng nhập')
                signIn();
            });
        }

        // Đăng xuất
        const btnLogOutEL = blogPage.querySelector('.btn-log-out');
        if (btnLogOutEL) {
            btnLogOutEL.addEventListener("click", function() {
                console.log('btnLogOutEL đăng xuất gửi Access token lên')
                logout();
            });
        }
        //
    });

};
getListPost();

function signIn() {
    blogPage.innerHTML = renderUiFormSignIn();
     // Click nút đăng NHẬP ở form đăng nhập -> gọi API đăng nhập và về màn home list, ẩn nút đăng nhập tóp

    // Click nút đăng kí ở form đăng nhập -> màn đăng kí 3 trường nhập
    const btnSignUpEL = blogPage.querySelector('.btn-sign-up');

    btnSignUpEL.addEventListener("click", async function() {
        console.log('btnSignUpEL tới form đăng kí, params rỗng');

        blogPage.innerHTML = renderUiFormSignUp();

        // Gán sự kiện submit khi ấn nút bất kì, nút ko có type button, ấn nút ở trên thì chạy form

        const signUpFormEL = blogPage.querySelector('.sign-up-form');
        signUpFormEL.addEventListener("submit", async function(event) {
            event.preventDefault();

            const useNameInput = signUpFormEL.querySelector('#use-name');
            const emailInput = signUpFormEL.querySelector('#email');
            const passInput = signUpFormEL.querySelector('#pass-word');
            console.log('emailInput', [emailInput]);


            dataFormSignUp.email = emailInput.value;

            console.log('useNameInput', useNameInput.value);
            console.log('emailInput', emailInput.value);
            console.log('passInput', passInput.value);

            const paramSignUp = {
                name: useNameInput.value,
                email: emailInput.value,
                password: passInput.value,
            }

            // post(url, body, params = {}, token = null) {
            //     return this.callApi(url, 'POST', params, body, token);
            // }

            const resRegister = await client.post(`/auth/register`, paramSignUp);
            console.log(resRegister);

            const { code } = resRegister?.data
            const { message } = resRegister?.data

            if (code === 201) {
                console.log('Đăng kí thành công -> 201');
                alert('Đăng kí thành công -> 201');
                // Đăng kí tài khoản thành công về màn form đăng nhập tài khoản
                blogPage.innerHTML = `${toastUi(message)}${renderUiFormSignIn(dataFormSignUp)}`;

            } else {
                blogPage.innerHTML = `${toastUi(message)}`
            }
        });

    });
    /***************************************************** Xong đăng kí */
    signUp();

    /***************************************************** Xong đăng nhập */

    /******************************************************/
}

function signUp() {
    console.log('Form đăng nhập');

    const signInFormEL = blogPage.querySelector('.sign-in-form');
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
            getListPost(); // Đăng nhập xong về home list
        }

        // throw message;
    });

}

// function logOut () {
//
//     const btnLogOutEL = blogPage.querySelector('.btn-log-out');
//
//     btnLogOutEL.addEventListener("click", async function(event) {
//         console.log('Đăng xuất');
//         const paramLogout = {
//             Headers: 'Headers: Authorization Bearer accessToken'
//         }
//
//         const resLogout = await client.post(`/auth/logout`, paramLogout );
//         console.log('Đăng xuấtresLogout :', resLogout);
//
//     });
// }

async function logout () {
    console.log('Đăng xuất');
    // const userData = localStorage.getItem("userData");

    const accessToken = JSON.parse(localStorage.getItem('userData')).accessToken

    console.log('accessToken', accessToken);

    const { data  } = await client.post(`/auth/logout`, {}, '', accessToken);
    const { code, message } = data;
    console.log('code, message: ', code, message);

    if (code === 200) {
        toastUi(message)
        paramsHome.isLogin = false;
        getListPost();
    }

  }

// Click Nút Sign up - đăng kí -> Gọi API đăng kí

// Click Nút Sign in - đăng kí -> Chuyển form đăng kí 2 trường




