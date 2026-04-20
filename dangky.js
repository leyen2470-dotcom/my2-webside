const password = document.getElementById("password");
const dieukien1 = document.getElementById("rule1");
const dieukien2 = document.getElementById("rule2");
const dieukien3 = document.getElementById("rule3");
const dieukien4 = document.getElementById("rule4");
const form = document.getElementById("registerForm");
const msg = document.getElementById("message");

// Kiểm tra password khi người dùng nhập
password.addEventListener("input", () => {
    let value = password.value;

    // Chữ thường
    if (/[a-z]/.test(value)) pass(dieukien1);
    else fail(dieukien1);

    // Chữ hoa
    if (/[A-Z]/.test(value)) pass(dieukien22);
    else fail(dieukien22);

    // Kí tự đặc biệt
    if (/[^A-Za-z0-9]/.test(value)) pass(dieukien33);
    else fail(dieukien33);

    // 8 ký tự
    if (value.length >= 8) pass(dieukien44);
    else fail(dieukien44);
});

// Hàm đổi icon thành đúng
function pass(item) {
    item.querySelector("i").className = "fa-solid fa-circle-check";
    item.style.color = "green";
}

// Hàm đổi icon thành sai
function fail(item) {
    item.querySelector("i").className = "fa-solid fa-circle-xmark";
    item.style.color = "red";
}

// Khi nhấn Đăng ký
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn load trang

    // Kiểm tra đủ điều kiện chưa
    if (
        /[a-z]/.test(password.value) &&
        /[A-Z]/.test(password.value) &&
        /[^A-Za-z0-9]/.test(password.value) &&
        password.value.length >= 8
    ) {
        msg.style.color = "green";
        msg.innerText = "Đăng ký thành công!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Mật khẩu không hợp lệ!";
    }
});
