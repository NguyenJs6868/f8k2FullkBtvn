F8.component("header-component", {
  template: `<h1>Hi! This is a</h1>`,
});

F8.component("counter-app", {
  data: function () {
    return {
      title: "Counter App",
      counter: 0,
    };
  },
  template: `
             <h2>{{title}}</h2>
             <h2>You count {{counter}} times</h2>
             <button v-on:click="count--">-</button>
             <button v-on:click="count++">+</button>
             <button v-on:dblclick="title = 'Yay! Version 2 is updated successfully!!'">Double click here to change Title</button>
             <button v-on:mouseover="title = 'Hmmm! You are mousing over this btn !!'" v-on:mouseout="title = 'You mouse out ' ">Mouse over and mouse out here to change Title</button>
     `,
});
