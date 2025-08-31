// Simple alert for product clicks
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".product-card button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });
});
