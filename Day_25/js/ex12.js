//Tạo element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");
var nextBtn = carouselNav.querySelector(".next");
var prevBtn = carouselNav.querySelector(".prev");
var dots = carousel.querySelector(".dots");

// var dot = carousel.querySelector(".dot-item");

// Tính Lấy số lượng ảnh
var carouselItems = carouselInner.querySelectorAll(".item");

// Tạo số chấm theo số lượng ảnh
let arrDot = [];
(function () {
  for (let i = 0; i < carouselItems.length; i++) {
    arrDot += `<span class="btn dot-item"></span>`;
  }
  // dots.appendChild(arrDot);
  dots.innerHTML = ` ${arrDot}`;
})();

if (carouselItems.length > 0) {
  //Tính chiều rộng của 1 item
  var itemWidth = carouselInner.clientWidth; //Trả về chiều rộng của 1 element

  //Tính tổng chiều rộng các items
  var totalWidth = itemWidth * carouselItems.length;

  //Cập nhật CSS cho carousel-inner
  carouselInner.style.width = `${totalWidth}px`;

  // Thêm sự kiện click cho chấm, truyền index lên biến lưu chung-Click lấy ra index
  let listItem = carousel.querySelectorAll(".dot-item");

  let indexDotSelected = 0;
  let clickedItemIndex = null;
  listItem.forEach((element, i) => {
    element.addEventListener("click", function (event) {
      clickedItemIndex = Array.from(listItem).indexOf(event.target);
      console.log("index this dot: ", clickedItemIndex);
      if (dots.children.length > 0) {
        for (let i = 0; i < dots.children.length; i++) {
          dots.children[i].classList.remove("dot-item--active");
        }
      }
      dots.children[clickedItemIndex].classList.add("dot-item--active");
      var translated = position;
      if (i >= indexDotSelected) {
        translated -= itemWidth * i;
      } else if (i < indexDotSelected) {
        translated += itemWidth * i;
      }
      carouselInner.style.translate = `${translated}px`;
    });
  });
  

  var position = 0;
  // 1 Xử lý chuyển slide khi click vào nút NEXT
  nextBtn.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth; // Tính toán ra được tọa độ
      carouselInner.style.translate = `${position}px`; //Cập nhật CSS vào carousel-inner để chuyển slide
      indexDotSelected;
      console.log("position: ", position);
      indexDotSelected + 1;
    }
  });
  // 2 PREV
  prevBtn.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
      console.log("position: ", position);
      indexDotSelected - 1;
    }
  });
}
// console.log('dot index: ', dots.children[1].classList.add("dot-item--active"));

// Vuốt chuyển slider
var isDrag = false;
var initialOffsetX;
var rate = (10 * itemWidth) / 100; // Số px ngưỡng kéo thấp nhất từ
var check = false; // Kiểm tra nhiều lần khi di chuyển?

carouselInner.addEventListener("mousedown", function (e) {
  isDrag = true;
  initialOffsetX = e.offsetX;
  console.log(initialOffsetX);
});

// Gán tọa độ off set mới vào cũ, tọa độ mới lớn hơn -> kéo sang phải...
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    let currentOffsetX = e.offsetX;
    let moveWidth = currentOffsetX - initialOffsetX;

    if (moveWidth < 0) {
      // Next slide
      if (Math.abs(moveWidth) > rate) {
        if (!check && Math.abs(position) > totalWidth - itemWidth) {
          console.log("Kéo đạt ngưỡng");
          carouselInner.style.transition = null; // Khôi phục lại hiệu ứng
          position -= itemWidth; // Đạt thì +thêm 1 item
          carouselInner.style.translate = `${position}px`;
          check = true; // Thêm lá cờ, trừ riêng 1 cái 1
        }
      } else {
        console.log("Kéo chưa đạt ngưỡng");
        carouselInner.style.transition = "none"; // Loại bỏ hiệu ứng khi kéo
        carouselInner.style.translate = `${position + moveWidth}px`; // Loại bỏ hiệu ứng mà khi kéo dc
      }
      //
    } else {
      // Prev Slide
      if (Math.abs(moveWidth) > rate) {
        if (!check && position < 0) {
          carouselInner.style.transition = null; //Khôi phục lại hiệu ứng
          position += itemWidth;
          carouselInner.style.translate = `${position}px`;
          check = true;
        }
      } else {
        carouselInner.style.transition = "none"; // Loại bỏ hiệu ứng khi kéo
        carouselInner.style.translate = `${position + moveWidth}px`; // Loại bỏ hiệu ứng mà khi kéo dc
      }
      //
    }
  }
});

carouselInner.addEventListener("mouseup", function (e) {
  isDrag = false;
  if (check) {
    check = false;
  } else {
    carouselInner.style.transition = null; // Khôi phục lại hiệu ứng
    carouselInner.style.translate = `${position}px`; // Cập nhập lại 1 hiệu ứng
  }
});
