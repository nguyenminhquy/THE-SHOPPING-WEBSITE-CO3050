// script.js
const images = [
    './image/banner_1.jpg', // Đường dẫn đến ảnh thứ nhất
    './image/banner_2.jpg', // Đường dẫn đến ảnh thứ hai
    './image/banner_3.jpg'  // Đường dẫn đến ảnh thứ ba
];
let currentIndex = 0;

function changeBackground() {
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Đổi hình nền sau mỗi 3 giây
setInterval(changeBackground, 1000);

// Khởi động bằng hình nền đầu tiên
changeBackground();
