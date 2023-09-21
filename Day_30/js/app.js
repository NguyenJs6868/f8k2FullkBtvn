var dropdown = document.querySelector('.dropdown');
var dropdownMenu = document.querySelector('.dropdown-menu');

var newBtn = document.getElementById('new-btn');
var txtBtn = document.getElementById('txt-btn');
var pdfBtn = document.getElementById('pdf-btn');

// input tên thư mục sẽ được tải xuống

// input text area
var content = document.getElementById('content');

// Nút kiểu chữ vs đổ màu
var boldBtn = document.getElementById('bold-btn');
var underlineBtn = document.getElementById('underline-btn');
var italicBtn = document.getElementById('italic-btn');
var colorBtn = document.getElementById('color-btn');

// Gán sự kiện
var dropdownMenuStatus = false;
dropdown.addEventListener('click', function (event) {
	// console.log('dropdown');
	// console.log('dropdownMenuStatus: ', dropdownMenuStatus);

event.preventDefault();

	if (!dropdownMenuStatus) {
		dropdownMenu.classList.add('show')
		dropdownMenuStatus = true;
	} else {
		dropdownMenu.classList.remove('show')
		dropdownMenuStatus = false;
	}
	//
});

newBtn.addEventListener('click', function (event) {
	console.log('newBtn: ', event);
	dropdownMenuStatus = false;

	content.value = ''
});

txtBtn.addEventListener('click', function (event) {
	console.log('txtBtn: ', event);
	dropdownMenuStatus = false;
});

pdfBtn.addEventListener('click', function (event) {
	console.log('pdfBtn: ', event);
	dropdownMenuStatus = false;

});
// Click ra ngoài tắt modal
window.addEventListener('click', function() {
	console.log('tắt', dropdownMenuStatus);
	// Quên cách nổi bọt
	// dropdownMenuStatus = false;
});

content.addEventListener('input', function() {
	console.log('text area', content.value);
});


// Nút kiểu chữ vs đổ màu
boldBtn.addEventListener('click', function (event) {
	console.log('boldBtn: ', event);
	dropdownMenuStatus = false;
	console.log(content.style);

 var activeStyle = false;
	if (!activeStyle) {
		content.style.fontWeight = 'bold'
		activeStyle = true;
	} else if (activeStyle) {
		content.style.fontWeight = 'thin'
		activeStyle = false;
	}
	console.log('activeStyle: ', activeStyle);

});

underlineBtn.addEventListener('click', function (event) {
	console.log('underlineBtn: ', event);
	dropdownMenuStatus = false;

	content.style.textDecoration = 'underline'

});

italicBtn.addEventListener('click', function (event) {
	console.log('italicBtn: ', event);
	dropdownMenuStatus = false;

	content.style.fontStyle = 'italic'
});

colorBtn.addEventListener('input', function (event) {
	console.log('colorBtn: ', event.target.value);
	var colorHexValue = event.target.value;
	dropdownMenuStatus = false;

	content.style.color = colorHexValue;

});

// Dùng vòng lặp trong đó sẽ lấy giá trị input để thay đổi style từng chữ một