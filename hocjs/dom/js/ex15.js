
// var h1 = document.createElement("h1");
// h1.innerText = `Count: `; // Số hoặc string
// document.body.append(h1);
//
//
// var countNode = document.createTextNode(0);
// h1.append(countNode);
//
// var btn = document.createElement("button");
// btn.innerText = "+";
// document.body.append(btn);
//
// btn.addEventListener("click", function () {
// 	// h1.innerText++;
// 	countNode.data++;
// });

// TextNode - Khi muốn text taho tác được như obj, ko thuộc bất kì html nào, vẫn thao tác bth
// var text = document.createTextNode("Hello");
// console.log(text);
// document.body.append(text);
// text.data = "Hello F8";

// var comment = document.createComment("Name");
// console.log(comment);
// document.body.append(comment);

// Lỗi bảo mật XSS
var todo = document.querySelector('.todo');
var todoList = document.querySelector('.todo-list');
var todoForm = document.querySelector('form');

todoForm.addEventListener("submit", function (e) {
	e.preventDefault();
	var inputEl = this.children[0]
	var name = inputEl.value;
	// todoList.innerHTML += todo;
	// var todo = `<p>${name}</p>`;
	todo.innerText = name;
	todoList.append(todo);
	inputEl.value = "";
});