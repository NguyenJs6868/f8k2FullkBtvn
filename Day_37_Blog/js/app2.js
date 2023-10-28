import HttpClient from "./httpClient.js";
const client = new HttpClient();
const root = document.getElementById('root');
const root0 = document.getElementById('root0');
const loaddingEl = document.querySelector('#loadding');
const toastEl = document.querySelector('#toast');

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const STATUS_LOGIN = "status_login";

let paramsHome = {
    isLogin: false,
};

let dataFormSignUp = {
    name: '',
    email: '',
    password: '',
};

let dataFormSignIn = {
    email: '',
    password: '',
};

// function clearToken() {
//     localStorage.removeItem(ACCESS_TOKEN_KEY);
//     localStorage.removeItem(REFRESH_TOKEN_KEY);
// }

// function setToken({accessToken, refreshToken}) {
//     localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
//     localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
// }

const setDidLogin = () => {
    localStorage.setItem(STATUS_LOGIN, 'true');
}

const setDidLogOut = () => {
    localStorage.setItem(STATUS_LOGIN, 'false');
}
// setDidLogin();

function checkStatusLogin() {
    const statusLogin = localStorage.getItem(STATUS_LOGIN);
    // console.log('statusLogin', statusLogin, typeof statusLogin);
    if (paramsHome.isLogin || ( statusLogin && statusLogin === 'true')) {
        return true;
    } else {
        return false;
    };
}

STATUS_LOGIN

function uiLoadding(status) {
    if(status) {
        loaddingEl.innerHTML = `<div class="loadersmall"></div>`;
    } else {
        const loadersmall = loaddingEl.querySelector('.loadersmall');
        loadersmall.remove();
    }
}

const toastUi = (param) => {
    console.log('toastUi param: ', param);
    if (param) {
        toastEl.innerHTML = `<div class="toast-header"><span>${param ? param : ''}</span></div>`;
        setTimeout(() => {
            if (toastEl) {
                toastEl.remove();
            }
        }, 3000);
    }

};
toastUi('200');

// Truyền mỗi token lên lấy profile, hết hạn nên về home, khi ấn login thì ->login
export const getInfo2 = async () => {
    const tokens = JSON.parse(localStorage.getItem("userData"));

    if (tokens) {
        console.log('Đã có token');

        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        const { res, data } = await client.get("/users/profile", {}, accessToken);

        if ( res.status !== 200 ) {
            console.log('users/profile 200');

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
                console.log('Tiến hành cấp mới hoàn toàn tooken và refresh');
            }

        }

    } else {
        console.log('Token mất vs bị remove');
        handleSignUp(); // Mất / Xoa
    }

};
// Test
export const getInfo = async () => {
    const tokens = JSON.parse(localStorage.getItem("userData"));

    if (tokens) {
        console.log('Đã có token');
        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        const  { res, data } = await client.get("/users/profile", {}, accessToken);
        if ( res.status !== 200 ) {
            console.log('/users/profile KHÁC !== 200 => Cấp lại refreToken');

            const {res: resRefresh, data: dataRefresh } = await client.post("/auth/refresh-token", {refreshToken});

            if (resRefresh.status === 200) {
                console.log('/auth/refresh-token 200, Cấp lại Token mới');

                const userData = JSON.parse(localStorage.getItem("userData"))
                console.log('userData Từ local trước đó: ', userData, typeof userData);

                const newUserData = {
                   ...userData,
                   accessToken: dataRefresh.data.token.accessToken,
                   refreshToken: dataRefresh.data.token.refreshToken,
                }

                console.log('refreshToken Mới: ', dataRefresh.data.token.refreshToken);
                console.log('Lưu mới vào local cả obj ', newUserData, typeof JSON.stringify(newUserData));

                localStorage.setItem("userData", JSON.stringify(newUserData));
            }  else  {
                console.log('/auth/refresh-token NOT 200 Xóa Token');
                // localStorage.removeItem("userData");
                // handleSignUp();
                autoLoginAgain()
            }

        } else {
            console.log('/users/profile === 200');
        }

    } else {
        console.log('Token mất vs bị remove');
        handleSignUp(); // Mất / Xoa
    }

};

async function autoLoginAgain() {
    const paramLogin = JSON.parse(localStorage.getItem("paramLogin"))
    console.log('autoLoginAgain paramLogin: ', paramLogin);
    const resLogin = await client.post(`/auth/login`, paramLogin);
    const { code, data, message } = resLogin.data;
    if (code === 200) {
        alert(message)
        paramsHome.isLogin = true;
        localStorage.setItem("userData", JSON.stringify(data));
        console.log('Hết hạn khóa dự phòng refretoken gọi luôn tự đăng nhập lại từ tk trước đó');
    }
}

export function regexYouTubesLink(stingUrl) {
    console.log('Đầu vào stingUrl: ', stingUrl);
    // const urlYoutobe2 = "https://www.youtube.com/watch?v=MjLCeo80u3Y&list=PLW-VrTgjB8QLsZ1hf7zZ2GP66L8SbJeRk&index=37";
    const urlYoutobe2 = "https://www.youtube.com/watch?v=LlG5H8quCoY";

    const patternYoutobe = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]+(&[a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+)*$/g;

    // let videoId = `MjLCeo80u3Y`;
    // let videoId = ``;


    if (stingUrl) {

        const result = patternYoutobe.test(stingUrl);

        if ( result === true) {
            console.log('Qua test Regex đây là link youtobe');

            let youtubeLinks = String(stingUrl).match(patternYoutobe);
            console.log('youtubeLinks :', youtubeLinks);

            const matchYoutubeLinks = youtubeLinks[0].match(patternYoutobe);

            console.log(matchYoutubeLinks[1]);
            let videoId = matchYoutubeLinks[1];

            const iframeElement = `<iframe src="https://www.youtube.com/embed/${videoId}" width="640"  height="320" title="Iframe Example"></iframe> `
            return iframeElement;

        } else {
            console.log('Qua test Regex đây Không phải link youtobe');
            return stingUrl;
        }

    }
}

// UI Home đã đăng nhập
async function uiHomeDidLogin(data) {
    console.log("UI Home đã đăng nhập");
    getInfo();
    const uiBlogPage = `
    <div class="blog">
        <div class="blog-page">

            <div class="d-flex justify-content-between align-content-center px-2 pt-2">
            ${checkStatusLogin() ?
                `<div><button class="btn-custom" id="btn-log-out">Đăng xuất</button></div>`
                :
                `<div><button class="btn-custom" id="btn-sign-in-home">Đăng nhập</button></div>`
            }
            </div>

            ${checkStatusLogin() && `<form action="" class="post-blog-form">
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

            </form>`}

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
                // uiHomeDidLogin();
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
                // localStorage.removeItem("userData");
                handleSignUp();
            }
        }
        if (res.status === 200) {
            uiHomeDidLogin();
        }
    }

}

function UiBlogItem(dataBlogs ,parames) {
    let uiHomeList = ``;
    // Gọi hàm trả về render link youtobe
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
                    <span class="blog-item__user-name"><strong>User name:</strong> ${ item?.userId.name}</span>
                    <span class="blog-item__title"><strong>Title:</strong> ${item?.title}</span>

                    <span class="blog-item__content"><strong>Content YouTobobe:</strong> ${regexYouTubesLink(item?.content)}</span>

                    <span class="blog-item__see-detail">${`<a href="" >`}# ${item?.title}</a></span>
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
    uiLoadding(true);
    try {
        await client.get(`/blogs`).then(({data}) => {
            const code = data.code;
            if (code === 200) {
                dataBlogs = data.data;
                listBlogEl.innerHTML = UiBlogItem(dataBlogs);
                uiLoadding(false);
                // uiHomeDidLogin();
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
                // toastUi(message)
                handleSignUp();
            }   else if (status === 400) {
                // toastUi(message)
                handleSignUp();
            }   else {
                // toastUi(message)
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
        dataFormSignIn.email = emailInput;
        dataFormSignIn.password = passInput;

        const paramLogin = {
            email: emailInput.value,
            password: passInput.value,
        }
        localStorage.setItem("paramLogin", JSON.stringify(paramLogin));
        const resLogin = await client.post(`/auth/login`, paramLogin);

        const { code, data, message } = resLogin.data;
        if (code === 200) {
            paramsHome.isLogin = true;
            const parseData = JSON.stringify(data);
            // Lưu token
            localStorage.setItem("userData", parseData);

            // renderHome(); // Đăng nhập xong về màn home list
            toastUi(message)
            setDidLogin();
            uiHomeDidLogin();
        } else {
            setDidLogOut();
            toastUi(message)

        }

        // throw message;
    });
}


const render = async () => {
    // renderHome()
    uiHomeDidLogin();
};

render();