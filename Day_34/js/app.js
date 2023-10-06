// const mainImg = document.querySelector(".frame-img");
//
// const imgBeenZoom = mainImg.querySelector(".img-been-zoom");
//
//
// mainImg.addEventListener("mousemove", (event) => {
//   console.log('event: ', event);
//
//   var zoomer = e.currentTarget;
//   e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//   e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//   x = (offsetX / zoomer.offsetWidth) * 100
//   y = (offsetY / zoomer.offsetHeight) * 100
//   zoomer.style.backgroundPosition = x + "% " + y + "%";
//
// });
//

const frame = document.querySelector(".frame"); // Lấy ra ảnh dc zoom
const zoom = document.querySelector(".zoom"); // Lấy

let x;
let y;
// let flagShowZoom = false;

frame.addEventListener("mousemove", (event) => {
  flagShowZoom = true;

  zoom.style.display = "block"; // Hiện ảnh khu zoom

  function frame(event) {
    const frameOop = event.currentTarget; // Lấy ra chỉnh html class frame
    console.log('event.currentTarget: ', [event.currentTarget]);
    console.log('frameOop.offsetWidth: ', frameOop.offsetWidth);

    // Nếu có event -> lấy vị trí offsetX va Y đầu chuột tới viền / rỗng
    event.offsetX ? offsetX = event.offsetX : ''
    event.offsetY ? offsetY = event.offsetY : ''

    x = (offsetX / frameOop.offsetWidth) * 100
    y = (offsetY / frameOop.offsetHeight) * 100
    // frameOop.style.backgroundPosition = x + "% " + y + "%";

    // Thêm tọa độ động vào ảnh khu zoom
    zoom.style.backgroundPosition = x + "% " + y + "%";
  }

  frame(event);

});

// Khi bỏ di chuột sẽ tắt ảnh bên zoom
frame.addEventListener('mouseleave', () => {
  zoom.style.display = "none"; // Ẩn ảnh khu zoom

});