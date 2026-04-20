let cart = [];
let totalPrice = 0;

// Thêm vào giỏ
function addToCart(name, price) {

    // Nếu sản phẩm đã tồn tại → tăng số lượng
    let item = cart.find(sp => sp.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    renderCart();
}

// Xóa 1 sản phẩm
function removeItem(name) {
    cart = cart.filter(sp => sp.name !== name);
    renderCart();
}

// Tăng số lượng
function increaseQty(name) {
    let item = cart.find(sp => sp.name === name);
    item.qty++;
    renderCart();
}

// Giảm số lượng
function decreaseQty(name) {
    let item = cart.find(sp => sp.name === name);
    if (item.qty > 1) {
        item.qty--;
    } else {
        removeItem(name);
        return;
    }
    renderCart();
}

// Xóa toàn bộ giỏ
function clearCart() {
    cart = [];
    renderCart();
}

// Render giỏ hàng
function renderCart() {
    let cartBox = document.getElementById("cart");
    cartBox.innerHTML = "";
    totalPrice = 0;

    cart.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        itemDiv.innerHTML = `
            <span>${item.name} - ${item.price.toLocaleString()}₫</span> 
            <div>
                <button class="qty-btn" onclick="decreaseQty('${item.name}')">-</button>
                ${item.qty}
                <button class="qty-btn" onclick="increaseQty('${item.name}')">+</button>
                <button class="remove-btn" onclick="removeItem('${item.name}')">X</button>
            </div>
        `;

        cartBox.appendChild(itemDiv);

        totalPrice += item.price * item.qty;
    });

    document.getElementById("total").textContent = totalPrice.toLocaleString();
}
function buyNow() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    alert("Bạn đã mua hàng thành công!\nTổng tiền: " + totalPrice.toLocaleString() + "₫");

    clearCart(); 
}

function confirmBuy() {
    let name = document.getElementById("cus-name").value;
    let phone = document.getElementById("cus-phone").value;
    let address = document.getElementById("cus-address").value;

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    if (name === "" || phone === "" || address === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Tạo hóa đơn
    let invoiceBox = document.getElementById("invoice");
    invoiceBox.innerHTML = `
        <h2>Hóa Đơn Mua Hàng</h2>
        <p><strong>Khách hàng:</strong> ${name}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Địa chỉ:</strong> ${address}</p>
        <hr>
        <h3>Chi tiết đơn hàng:</h3>
    `;

    cart.forEach(item => {
        invoiceBox.innerHTML += `
            <p>${item.name} x ${item.qty} = 
            ${(item.qty * item.price).toLocaleString()}₫</p>
        `;
    });

    invoiceBox.innerHTML += `
        <hr>
        <h2>Tổng tiền: ${totalPrice.toLocaleString()}₫</h2>
        <p>Cảm ơn bạn đã mua hàng!</p>
    `;

    // Xóa giỏ hàng sau khi hoàn thành
    clearCart();
}
