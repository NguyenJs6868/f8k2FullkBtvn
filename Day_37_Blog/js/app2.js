import HttpClient from "./httpClient.js";
const client = new HttpClient();
const root = document.getElementById('root');
const blogEl = document.querySelector('.blog');

let paramsHome = {
    isLogin: false,
};

let dataFormSignUp = {
    name: '',
    email: '',
    password: '',
};

const toastUi = (param) => {
    const divElement  = document.createElement("div");
    divElement.classList.add("toast-header")
    const spanElement  = document.createElement("span");
    divElement.appendChild(spanElement);
    blogEl.appendChild(divElement);

    // const content = ` <div class="toast-header"><span>${param ? param : ''}</span></div>  `
    // root.innerHTML = content;
    // const toasEl = root.querySelector('.toast-header');
    // setTimeout(() => {
    //     toasEl.remove();
    // }, 5000);
    // return content;
};

export const getInfo = async () => {
    const tokens = JSON.parse(localStorage.getItem("userData"));

    if (tokens) {

        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        // Truyền mỗi token lên lấy profile, hết hạn nên về home, khi ấn login thì ->login
        const { res, data } = await client.get("/users/profile", {}, accessToken);

        if ( res.status !== 200 ) {
            const { res: resrefresh, data } = await client.post("/auth/refresh-token", {refreshToken});
            console.log('refreshToken resrefresh: ', resrefresh);

            if (resrefresh.status === 200) {
                const userData = JSON.parse(localStorage.getItem("userData"))
                console.log('userData: ', userData);

                userData.accessToken = data.data.token.accessToken;
                userData.refreshToken = data.data.token.refreshToken;

                console.log('data.data.token.refreshToken: ',data.data.token.refreshToken);
                localStorage.setItem("userData", JSON.stringify(userData));
            }  else  {
                localStorage.removeItem("userData");
                handleSignUp();
            }

        }

    } else {
        handleSignUp(); // Mất / Xoa
    }

};
// UI Home đã đăng nhập
async function UiPostForm(data) {
    console.log("UI Home đã đăng nhập");
    const uiBlogPage = `
    <div class="blog">
        <div class="blog-page">

            <div class="d-flex justify-content-between align-content-center px-2 pt-2">
                <div><button class="btn-custom" id="btn-log-out">Đăng xuất</button></div>
            </div>

            <form action="" class="post-blog-form">
                <div class="row-item ">
                    <label for="blog-title">Enter Your title</label>
                    <input value="My title" type="text" id="blog-title"  placeholder="Please enter the title">
                </div>

                <div class="row-item ">
                    <label for="blog-content">Enter Your conten</label>
                    <textarea name="" id="blog-content" value="My content" placeholder="comment here..." cols="100" rows="6"></textarea>
                </div>

                <div class="row-item mb-3">
                    <label for="time-to-post">Set time to post!</label>
                    <input type="time" id="time-to-post" >
                </div>

                <div class="w-100 d-flex mt-2">
                    <button class="btn-custom " id="btn-post-blog">
                        <span>Write new!</span>
                    </button>
                </div>

            </form>

            <div class="list-blog"></div>
        </div>
    </div>

    `
    root.innerHTML = uiBlogPage;

    var listBlogEl = root.querySelector('.list-blog');
    // listBlogEl.innerHTML = `<div>item</div>`

    // Gọi API GET list blog
    let dataBlogs = [];
    try {
        await client.get(`/blogs`).then(({res, data}) => {
            const code = data.code;
            if (code === 200) {
                dataBlogs = data.data;
                listBlogEl.innerHTML = UiBlogItem(dataBlogs);
                // UiPostForm();
            }
            // const listBlog = data?.data;

        });
    } catch (error) {
        console.log('error: ', error);
    }

    //  Truy vấn nút đăng nhập ở màn home
    const btnSignInHome = root.querySelector('#btn-sign-in-home');
    if (btnSignInHome) {
        btnSignInHome.addEventListener("click", function() {
            handleSignUp();
        });
    }
    //  Truy vấn nút đăng xuất ở màn home
    const btnLogOut = root.querySelector('#btn-log-out');
    if (btnLogOut) {
        btnLogOut.addEventListener("click", function() {
            localStorage.removeItem('userData');
            handleSignUp();
        });
    }
    // Truy cập form post
    const postBlogFormEl = root.querySelector('.post-blog-form');
    if (postBlogFormEl) {
        postBlogFormEl.addEventListener("submit", async function(event) {
            event.preventDefault();
            let title = event.target.querySelector('#blog-title').value;
            let content = event.target.querySelector('#blog-content').value;
            const body = {
                title: title,
                content: content,
            }
            postBlog(body);

        });
    }



    // /blogs
}

async function postBlog(body) {
    const tokens = JSON.parse(localStorage.getItem("userData"));

    if (tokens) {
        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        const { res, data } = await client.post(`/blogs`, body, {}, accessToken);

        // const { res, data } = await client.get("/users/profile", {}, accessToken);

        if ( res.status === 401 ) {
            // const refreshToken = tokens.refreshToken;
            const { res, data } = await client.post("/auth/refresh-token", {refreshToken});
            console.log('postBlog auth/refresh-token :', refreshToken);

            if (res.status === 401) {
                localStorage.removeItem("userData");
                handleSignUp();
            }
        }
        if (res.status === 200) {
            UiPostForm();
        }
    }

}

function UiBlogItem(dataBlogs ,parames) {
    let uiHomeList = ``;

    if (dataBlogs) {
        uiHomeList = dataBlogs.map( (item) => {
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

    return uiHomeList;
}
// UI Home CHƯA đăng nhập
// UI Home và API List blog
const renderHome = async () => {
    // const userInfo = await
    getInfo();

    const uiBlogPage = `
    <div class="blog">
        <div class="blog-page">

            <div class="d-flex justify-content-between align-content-center px-2 pt-2">
                <div><button class="btn-custom" id="btn-sign-in-home">Đăng nhập</button></div>
            </div>

            <div class="list-blog"></div>

        </div>
    </div>

    `
    root.innerHTML = uiBlogPage;

    var listBlogEl = root.querySelector('.list-blog');
    // listBlogEl.innerHTML = `<div>item</div>`

    // Gọi API GET list blog
    let dataBlogs = [];
    try {
        await client.get(`/blogs`).then(({res, data}) => {
            const code = data.code;
            if (code === 200) {
                dataBlogs = data.data;
                listBlogEl.innerHTML = UiBlogItem(dataBlogs);
                // UiPostForm();
            }
            // const listBlog = data?.data;

        });
    } catch (error) {
        console.log('error: ', error);
    }

    //  Truy vấn nút đăng nhập ở màn home
    const btnSignInHome = root.querySelector('#btn-sign-in-home');
    if (btnSignInHome) {
        btnSignInHome.addEventListener("click", function() {
            handleSignUp();
        });
    }
    //  Truy vấn nút đăng xuất ở màn home
    const btnLogOut = root.querySelector('#btn-log-out');
    if (btnLogOut) {
        btnLogOut.addEventListener("click", function() {
            localStorage.removeItem('userData');
            handleSignUp();
        });
    }

}

// UI Đăng kí
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
// API và UI Đăng kí
async function handleRegisterPage() {
    root.innerHTML = renderSignUpForm();
    // Nút đăng nhập -> về trăng đăng nhập
    const btnSignInEL = root.querySelector('#btn-sign-in');
    btnSignInEL.addEventListener("click", function() {
        root.innerHTML = renderSignInForm();
        return handleSignUp()
    });
    // Nút đăng kí
    const btnSignUpEL = root.querySelector('#btn-sign-up');
    btnSignUpEL.addEventListener("click", function() {
        //  FORM Đăng kí
        const signUpFormEL = root.querySelector('.sign-up-form');
        signUpFormEL.addEventListener("submit", async function(event) {
            event.preventDefault();

            const useNameInput = signUpFormEL.querySelector('#use-name');
            const emailInput = signUpFormEL.querySelector('#email');
            const passInput = signUpFormEL.querySelector('#pass-word');

            dataFormSignUp.email = emailInput.value;
            const paramSignUp = {
                name: useNameInput.value,
                email: emailInput.value,
                password: passInput.value,
            }
            const resRegister = await client.post(`/auth/register`, paramSignUp);

            const { data, message } = resRegister.data;
            const status = resRegister.res.status;

            if (status === 201) {
                window.alert(message);
                paramsHome.isLogin = true;
                const parseData = JSON.stringify(data);
                // Lưu token
                localStorage.setItem("userData", parseData);
                // Đăng kí thành công hoặc trùng tk về trang đăng nhập
                toastUi(message)
                handleSignUp();
            }   else if (status === 400) {
                toastUi(message)
                handleSignUp();
            }   else {
                toastUi(message)
            }


        });
        //
    });
    // signUp();
}
// UI Đăng nhập
function renderSignInForm() {
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
    // Ghi đè UI đăng nhập
    root.innerHTML = renderSignInForm();
    // Ấn nút đăng kí -> chuyển form đăng kí
    const btnSignUpEL = root.querySelector("#btn-sign-up")
    btnSignUpEL.addEventListener("click", async function() {
        handleRegisterPage()
    });
    // Nút đăng nhập Gọi API đăng nhập
    const signInFormEL = root.querySelector('.sign-in-form');
    signInFormEL.addEventListener("submit", async function(event) {
        event.preventDefault(); //!!!

        const emailInput = signInFormEL.querySelector('#email');
        const passInput = signInFormEL.querySelector('#pass-word');

        const paramLogin = {
            email: emailInput.value,
            password: passInput.value,
        }

        const resLogin = await client.post(`/auth/login`, paramLogin);

        const { code, data, message } = resLogin.data;
        if (code === 200) {
            // alert(message)
            toastUi(message)

            paramsHome.isLogin = true;
            const parseData = JSON.stringify(data);
            // Lưu token
            localStorage.setItem("userData", parseData);

            // renderHome(); // Đăng nhập xong về màn home list
            UiPostForm();
        }

        // throw message;
    });
}


const render = async () => {
    renderHome()
};

render();