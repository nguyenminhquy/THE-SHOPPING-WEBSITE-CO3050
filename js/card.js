// Điều hướng đến trang product.html khi nhấp vào toàn bộ thẻ sản phẩm
function redirectToProduct() {
    window.location.href = "product.html";
}

// Điều hướng đến trang cart.html khi nhấp vào nút "Thêm vào giỏ"
// Sử dụng event.stopPropagation() để ngăn chặn sự kiện nhấp chuột trên thẻ sản phẩm
function redirectToCart(event) {
    event.stopPropagation(); // Ngăn sự kiện nhấp chuột của thẻ sản phẩm
    window.location.href = "cart.html";
}
