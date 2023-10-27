// import


async function renderHome() {
	const userInfo = await getInfo();
	// const userInfo = { name: "ha", };
	// console.log(userInfo);

	const welcomeHTML = `
        <div class="container py-3">
            <ul class = "profile list-unstyled d-flex gap-2">
                <li> <span>Chào bạn:</span> ${userInfo.data.name} </li>
                <li><a href="#" class="logout">Đăng xuất</a></li>
            </ul>
        </div>
        `;

	root.innerHTML = welcomeHTML;
	const logout = root.querySelector(".profile .logout");
	await renderBlogsData();

	logout?.addEventListener("click", (e) => {
			e.preventDefault();
			// localStorage.removeItem("access_token");
			// localStorage.removeItem("refresh_token");
			// localStorage.removeItem("email");
			// localStorage.removeItem("name");
			logOut();
			render();
	})

	if (await checkLogin()) {
			renderForm();
	}
};