const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const btnLogin = document.getElementById('btnLogin');
        const loader = document.getElementById('loader');
        const btnText = document.getElementById('btnText');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const successMessage = document.getElementById('successMessage');

        // Xóa thông báo lỗi khi người dùng nhập
        emailInput.addEventListener('input', () => {
            emailError.style.display = 'none';
            emailError.textContent = '';
        });

        passwordInput.addEventListener('input', () => {
            passwordError.style.display = 'none';
            passwordError.textContent = '';
        });

        // Xác thực email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Xử lý submit form
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            let isValid = true;

            // Reset thông báo lỗi
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            successMessage.style.display = 'none';
            emailError.textContent = '';
            passwordError.textContent = '';

            // Kiểm tra email
            if (!email) {
                emailError.textContent = 'Vui lòng nhập email';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!validateEmail(email)) {
                emailError.textContent = 'Email không hợp lệ';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Kiểm tra mật khẩu
            if (!password) {
                passwordError.textContent = 'Vui lòng nhập mật khẩu';
                passwordError.style.display = 'block';
                isValid = false;
            } else if (password.length < 6) {
                passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
                passwordError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Hiển thị loader
                loader.style.display = 'inline-block';
                btnText.textContent = 'Đang xử lý...';
                btnLogin.disabled = true;

                // Giả lập gọi API
                setTimeout(() => {
                    loader.style.display = 'none';
                    btnText.textContent = 'Đăng Nhập';
                    btnLogin.disabled = false;
                    successMessage.style.display = 'block';

                    // In thông tin đăng nhập (trong thực tế, bạn sẽ gửi đến server)
                    console.log('Đăng nhập với:');
                    console.log('Email:', email);
                    console.log('Ghi nhớ:', document.getElementById('remember').checked);

                    // Reset form sau 2 giây
                    setTimeout(() => {
                        loginForm.reset();
                        successMessage.style.display = 'none';
                        alert('Đăng nhập thành công!');
                    }, 2000);
                }, 1500);
            }
        });

        // Xử lý phím Enter
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loginForm.submit();
            }
        });
    