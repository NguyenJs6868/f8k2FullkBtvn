class F8 {
  constructor() {}
  static component(componentName, { data, template }) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          this.template = document.createElement("template"); //Tạo element template
          this.template.innerHTML = template;
          const shadow = this.attachShadow({ mode: "open" });
          shadow.append(this.template.content.cloneNode(true));
          this.handleData(shadow, "h2");
          this.handleBtn(shadow);
        }
        handleData(shadow, query) {
          if (data) {
            let elementList = shadow.querySelectorAll(query); //Lấy tất cả element theo query truyền vào
            this.data = data(); //Gán thuộc tính data của class = giá trị hàm data() trả về
            elementList.forEach((element) => {
              //Lặp danh sách element để gán content
              let splitArr = element.textContent.split(" "); //Chia chuỗi content element thành mảng
              element.innerHTML = "";
              splitArr.forEach((item) => {
                //Lặp mảng chuỗi đã split
                if (item.match(/{{.+?}}/)) {
                  //Kiểm tra item thỏa mãn điều kiện regex thì xẽ tạo node rồi append
                  let inputData = item
                    .match(/{{.+?}}/)[0]
                    .replaceAll("{", "")
                    .replaceAll("}", "")
                    .trim();
                  let dataValue = this.dataValueReturn(inputData); //Truyền tên key vào hàm dataValueReturn để lấy giá trị từ object data. Ví dụ truyền vào title thì sẽ trả về giá trị title trong object data
                  let nodeChange = document.createTextNode(dataValue); //Tạo textNode có giá trị là dataValue
                  if (item.match(/{{counter}}/)) {
                    //Nếu item thỏa mãn regex {{counter}} thì sẽ gán counterNode = nodeChange(nodeChange đã tạo ở trên)
                    this.counterNode = nodeChange;
                  }
                  if (item.match(/{{title}}/)) {
                    ////Nếu item thỏa mãn regex {{counter}} thì sẽ gán titleNode = nodeChange(nodeChange đã tạo ở trên)
                    this.titleNode = nodeChange;
                  }
                  element.appendChild(nodeChange); //Append nodeChange đã tạo vào element
                } else {
                  //Nếu item không thỏa mãn regex thì append luôn vào element
                  element.appendChild(
                    document.createTextNode(" " + item + " ")
                  );
                }
              });
            });
          }
        }
        handleBtn(shadow) {
          //Xử lý button
          const btnList = shadow.querySelectorAll("button"); //Lấy ra tất cả button
          if (btnList) {
            Array.from(btnList).forEach((btn) => {
              //Ép btnList sang kiểu mảng rồi lặp
              let numberEvent = btn.outerHTML.match(/(v-on:.+?".+?")/g); //Kiểm tra trong element button có đoạn chuỗi nào thỏa mãn điều kiện regex thì trả về(Lấy ra các event)
              for (let i = 0; i < numberEvent.length; i++) {
                //Lặp danh sách event lấy ra
                let regex = numberEvent[i].match(
                  /v-on:(?<event>.+?)="(?<eventDoing>.+?)"/ //Event: tên sự kiện. eventDoing: đoạn xử lý sự kiện, ví dụ: count++, count--
                );
                if (regex) {
                  btn.addEventListener(regex.groups.event, () => {
                    //Lắng nghe sự kiện event và gọi hàm handleEvent để xử lý event
                    this.handleEvent(regex.groups.eventDoing);
                  });
                }
              }
            });
          }
        }
        handleEvent(eventDoing) {
          //phương thức xử lý event
          if (eventDoing) {
            //Kiểm tra nếu có eventDoing thì xử lý sự kiện
            if (eventDoing === "count++") {
              //Trường hợp evenDoing === "count++" thì tăng count lên 1 vào cập nhật lại count
              let counter = this.counterNode.textContent; //Lấy giá trị count hiển thị hiện tại
              counter++; //Tăng count lên 1
              this.counterNode.textContent = counter; //Gán lại giá trị count
            }
            if (eventDoing === "count--") {
              ////Trường hợp evenDoing === "count--" thì giảm count lên 1 vào cập nhật lại count
              let counter = this.counterNode.textContent; //Lấy giá trị count hiển thị hiện tại
              counter--; //Giảm count 1
              this.counterNode.textContent = counter; //Gán lại giá trị count
            }
            if (eventDoing.match(/[\s]*(title)[\s]*=/)) {
              //Trường hợp eventDoing không thỏa mãn 2 điều kiện if trên thì sẽ kiểm tra eventDoing có chứa title thì sẽ gán lại title
              this.titleNode.textContent = eventDoing.match(
                /[\s]*(title)[\s]*=[\s]*'(?<title>.+?)'[\s]*/
              ).groups.title;
            }
          }
        }
        dataValueReturn(inputData) {
          //Hàm trả về giá trị trong data theo key truyền vào
          for (let key of Object.keys(this.data)) {
            //Lặp các key trong data
            if (inputData === key) {
              //Nếu giá trị inputData truyền vào bằng 1 key nào đó trong data thì trả về giá trị đó
              return this.data[key];
            }
          }
          return null; //Trường hợp không thỏa mãn giá trị nào thì trả về null
        }
      }
    );
  }
}
