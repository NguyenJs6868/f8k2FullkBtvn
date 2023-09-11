/*
Khi muốn thao tác với 1 thể html thì

*/

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var h1 = content.querySelector("h1");

// h1.addEventListener("click", function () {
// 	this.style.color = "red";
// });
//
// btn.addEventListener("click", function () {
// 	// Lấy dữ liệu cũ gán lại mới để lần sau dùng được...
// 	content.innerHTML += `<p>Khóa học Fullstack</p>`
// 	h1 = content.querySelector("h1");
//
// 	h1.addEventListener("click", function () {
// 		this.style.color = "red";
// 	});
// });

var content = document.querySelector(".content")
var cbtnontenrt = document.querySelector("h2")
// Tạo mới element
var h2 = document.createElement("h2");
h2.innerText = "Khóa học Fullstack"; // Cũng là 1 dom NODE
h2.classList.add("course-name");
// console.log(h2);

// Thêm thẻ h2 vào content (Thêm vào cuối cùng)
// content.appendChild(h2);

content.append(h2); // Tạo ra và chỉ thêm được 1 lần duy nhất

// btn.addEventListener("click", function () {
// 	content.append(h2);
// });

/*
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
*/

var ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
	var li = document.createElement("li");
	li.innerText = `Item${i}`;
	ul.prepend(li);
};
content.prepend(ul); //prepend Thêm vào đầu append vào

// Thêm 1 node vào trước 1 node khác thêm sau thì có thể xác định phần tử next và thêm sau
var p = document.createElement("p");
p.innerText = `Hello F8`

content.insertBefore(p, h2);
// Thêm vào sau 1 phần từ khác?

// Thay thế 1 node bằng 1 node khác
// - obj - p vẫn còn nhưng ko là con của content nên có thể nhét vào chỗ khác
var h3 = document.createElement("h3");
h3.innerText = "Hello Name F8";
content.replaceChild(h3, p);

// Xóa 1 node còn
content.removeChild(h2);

