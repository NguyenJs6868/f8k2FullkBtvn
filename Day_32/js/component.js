

class F8 {
	constructor() {} // Reset hàm tạo

	static theComponent(componentName, options) {
    // console.log('1 componentName: ', componentName);
    // console.log('2 options: ', options);

    class customElement extends HTMLElement {
      constructor() {
        // super để gọi hàm constructor của lớp cha Animal và truyền tham số vào. Đảm bảo rằng thuộc tính ... được khởi tạo trong lớp cha.
        super();
        // Gắn cây DOM bóng vào phần tử đã chỉ định và trả về một tham chiếu đến phần tử ShadowRoot
        const shadow = this.attachShadow({mode: "open"}); // Bật chế độ shalow dom html độc lập
        const template = options.template; // Gồm các phần tử html

        if (template) {
          // Khi có phần tử html là biến template thì tạo ra ở html thẻ custom tên là template
          const templateEl = document.createElement("template");
          templateEl.innerHTML = template;
          // Copy sâu các tính chất DOM của phần tử html được tạo mới - cloneNode vs appendChild = nối thêm con
          const templateClone = templateEl.content.cloneNode(true)
          shadow.appendChild(templateClone);


          // this.handleBtn(shadow);


          if(options.data) {
            this.data = options?.data() || null
            Object.keys(this.data).forEach(key => {
              window[key] = options.data[key]
            })
          }
          this.handleData(shadow, "h2");
        }
        //
      }

      handleData = (shadow, query) => {
        // this.data = options?.data() || null; // Thẻ nào có data thì in ko thì để null
        // console.log('handleData:  ', this.data);

        if (this.data) {
          let elementList = shadow.querySelectorAll(query); // Có 2 thẻ h2
          // console.log('elementList:  ', elementList);
          Array.from(elementList).forEach( (item) => {


            // console.log('item.textContent: ', item.textContent);

            const splitItems = item.textContent.split(" ");
            // console.log('splitItems: ', splitItems);

            item.innerHTML = ""; // Gán lại bằng chuỗi rống sau gán lại text

            splitItems.forEach(splitItem => {
              // console.log('for splitItem: ', splitItem);

              // const str = "{{title}}";
              const result = splitItem.replace(/{{|}}/g, "");
              // console.log('for result: ', result);

              if(result.match(/title/)) {
                window['title'] = this.data.title
                item.innerText = title
              }

              if(result.match(/counter/)) {
                console.log('matchresult: ', result);
                window['counter'] = this.data.counter
                item.innerText = counter

              }

            });

          });

        }

      }
    }

    // Định nghĩa ra các phần tử, tên phần tử và lớp phần tử tùy chỉnh
    customElements.define(componentName, customElement);
    //
	}
}