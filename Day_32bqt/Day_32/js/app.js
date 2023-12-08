// template: `
// <p>Hello F8</p>
// <h2>Khóa học FullStack</h2>
// `
// console.log(template);

// F8.component("count-app", {
// 	data: () => ({
// 		count: 0,
// 		title: "counter app"
// 	}),
//
//  template: `
// 		<h1>{{ title }}</h1>
// 		<h2>Đã đếm: {{ count }}</h2>
// 		<button v-on:click="count--">-</button>
// 		<button v-on:click="count++">+</button>
// 		<button v-on:db-click="title='Xin chào F8'">+</button>
//
//
// 		`
// })


// Parser 1 chuỗi thành 1 biến
// const data = {
// 	count: 0,
// 	title: "F8",
// }
//
// Object.keys(data).forEach(key  => {
// 	window[key] = data[key];
//
// });
//
// count++
// count++
// console.log(count);
// console.log(title);


F8.theComponent("header-component", {
// 	data: function () {
// 		return {
// 				title1: "Counter App1",
// 				counter1: 1,
// 		};
// },

	template: `<h1>HEADER</h1>`,
});

F8.theComponent("counter-app", {
	data: function () {
			return {
					title: "Counter App",
					counter: 0,
			};
	},

	template: `
		<h2>{{title}}</h2>
		<h2>Đã đếm: {{counter}} times</h2>
		<button class="btn" v-on:click="count--">-</button>
		<button class="btn" v-on:click="count++">+</button>
		<button v-on:dblclick="title = 'Hello F8'" title="Double click">
			Change Title
		</button>
	`,
});


customElement.theComponent("header-component", {
	template: `<h1>HEADER</h1>`,
});