let currentStep = 1
let userEmail = ""
let resendCounter = 0

// ============ STEP 1: EMAIL ============
const forgotForm = document.getElementById("forgotForm")
const forgotEmailInput = document.getElementById("forgotEmail")
const btnForgot = document.getElementById("btnForgot")
const loaderForgot = document.getElementById("loaderForgot")
const btnForgotText = document.getElementById("btnForgotText")
const forgotEmailError = document.getElementById("forgotEmailError")

forgotEmailInput.addEventListener("input", () => {
  forgotEmailError.style.display = "none"
  forgotEmailError.textContent = ""
})

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = forgotEmailInput.value.trim()
  let isValid = true

  forgotEmailError.style.display = "none"
  forgotEmailError.textContent = ""

  if (!email) {
    forgotEmailError.textContent = "Vui lòng nhập email"
    forgotEmailError.style.display = "block"
    isValid = false
  } else if (!validateEmail(email)) {
    forgotEmailError.textContent = "Email không hợp lệ"
    forgotEmailError.style.display = "block"
    isValid = false
  }

  if (isValid) {
    userEmail = email
    loaderForgot.style.display = "inline-block"
    btnForgotText.textContent = "Đang gửi..."
    btnForgot.disabled = true

    setTimeout(() => {
      loaderForgot.style.display = "none"
      btnForgotText.textContent = "Tiếp Tục"
      btnForgot.disabled = false
      console.log("[v0] Email verified:", email)
      goToStep(2)
    }, 1800)
  }
})

forgotEmailInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    forgotForm.submit()
  }
})

// ============ STEP 2: OTP ============
const otpForm = document.getElementById("otpForm")
const otpCodeInput = document.getElementById("otpCode")
const btnOtp = document.getElementById("btnOtp")
const loaderOtp = document.getElementById("loaderOtp")
const btnOtpText = document.getElementById("btnOtpText")
const otpError = document.getElementById("otpError")
const backToEmail = document.getElementById("backToEmail")
const resendOtpLink = document.getElementById("resendOtpLink")

otpCodeInput.addEventListener("input", () => {
  otpError.style.display = "none"
  otpError.textContent = ""
  otpCodeInput.value = otpCodeInput.value.replace(/[^0-9]/g, "")

 
  if (otpCodeInput.value.length === 6) {
    console.log("[v0] OTP input complete, ready to submit")
  }
})

otpForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const otp = otpCodeInput.value.trim()
  let isValid = true

  otpError.style.display = "none"
  otpError.textContent = ""

  if (!otp) {
    otpError.textContent = "Vui lòng nhập mã OTP"
    otpError.style.display = "block"
    isValid = false
  } else if (otp.length !== 6) {
    otpError.textContent = "Mã OTP phải 6 chữ số"
    otpError.style.display = "block"
    isValid = false
  }

  if (isValid) {
    loaderOtp.style.display = "inline-block"
    btnOtpText.textContent = "Đang xác thực..."
    btnOtp.disabled = true

    setTimeout(() => {
      loaderOtp.style.display = "none"
      btnOtpText.textContent = "Xác Thực"
      btnOtp.disabled = false
      console.log("[v0] OTP verified:", otp)
      goToStep(3)
    }, 1800)
  }
})

backToEmail.addEventListener("click", (e) => {
  e.preventDefault()
  otpCodeInput.value = ""
  otpError.style.display = "none"
  goToStep(1)
})

resendOtpLink.addEventListener("click", (e) => {
  e.preventDefault()
  resendCounter++
  console.log("[v0] Resend OTP clicked, attempt:", resendCounter)

  if (resendCounter >= 3) {
    resendOtpLink.textContent = "Liên hệ hỗ trợ"
    resendOtpLink.style.pointerEvents = "none"
    resendOtpLink.style.opacity = "0.5"
  } else {
    const text = resendOtpLink.textContent
    resendOtpLink.style.pointerEvents = "none"
    resendOtpLink.style.opacity = "0.5"

    let countdown = 60
    resendOtpLink.textContent = `Gửi lại (${countdown}s)`

    const timer = setInterval(() => {
      countdown--
      resendOtpLink.textContent = `Gửi lại (${countdown}s)`

      if (countdown <= 0) {
        clearInterval(timer)
        resendOtpLink.textContent = "Gửi lại"
        resendOtpLink.style.pointerEvents = "auto"
        resendOtpLink.style.opacity = "1"
      }
    }, 1000)
  }
})

otpCodeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    otpForm.submit()
  }
})

const newPasswordForm = document.getElementById("newPasswordForm")
const newPasswordInput = document.getElementById("newPassword")
const confirmPasswordInput = document.getElementById("confirmPassword")
const togglePassword = document.getElementById("togglePassword")
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword")
const btnReset = document.getElementById("btnReset")
const loaderReset = document.getElementById("loaderReset")
const btnResetText = document.getElementById("btnResetText")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmError")
const backToOtp = document.getElementById("backToOtp")
const successMessage = document.getElementById("successMessage")

togglePassword.addEventListener("click", (e) => {
  e.preventDefault()
  const type = newPasswordInput.type === "password" ? "text" : "password"
  newPasswordInput.type = type
  togglePassword.textContent = type === "password" ? "👁️" : "🙈"
})

toggleConfirmPassword.addEventListener("click", (e) => {
  e.preventDefault()
  const type = confirmPasswordInput.type === "password" ? "text" : "password"
  confirmPasswordInput.type = type
  toggleConfirmPassword.textContent = type === "password" ? "👁️" : "🙈"
})

newPasswordInput.addEventListener("input", () => {
  if (passwordError.style.display === "block" && newPasswordInput.value.length >= 6) {
    passwordError.style.display = "none"
  }
})

confirmPasswordInput.addEventListener("input", () => {
  if (confirmError.style.display === "block" && confirmPasswordInput.value === newPasswordInput.value) {
    confirmError.style.display = "none"
  }
})

newPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const password = newPasswordInput.value
  const confirm = confirmPasswordInput.value
  let isValid = true

  passwordError.style.display = "none"
  confirmError.style.display = "none"
  passwordError.textContent = ""
  confirmError.textContent = ""

  if (!password) {
    passwordError.textContent = "Vui lòng nhập mật khẩu"
    passwordError.style.display = "block"
    isValid = false
  } else if (password.length < 6) {
    passwordError.textContent = "Mật khẩu phải tối thiểu 6 ký tự"
    passwordError.style.display = "block"
    isValid = false
  }

  if (!confirm) {
    confirmError.textContent = "Vui lòng xác nhận mật khẩu"
    confirmError.style.display = "block"
    isValid = false
  } else if (password !== confirm) {
    confirmError.textContent = "Mật khẩu không trùng khớp"
    confirmError.style.display = "block"
    isValid = false
  }

  if (isValid) {
    loaderReset.style.display = "inline-block"
    btnResetText.textContent = "Đang lưu..."
    btnReset.disabled = true
    console.log("[v0] Password reset in progress")

    setTimeout(() => {
      loaderReset.style.display = "none"
      btnResetText.textContent = "Đặt Lại Mật Khẩu"
      btnReset.disabled = false

      successMessage.textContent = "Mật khẩu đã được đặt lại thành công! Đang chuyển hướng..."
      successMessage.style.display = "block"
      console.log("[v0] Password reset successful")

      setTimeout(() => {
        window.location.href = "./dangnhap.html"
      }, 2000)
    }, 1800)
  }
})

backToOtp.addEventListener("click", (e) => {
  e.preventDefault()
  newPasswordInput.value = ""
  confirmPasswordInput.value = ""
  togglePassword.textContent = "👁️"
  toggleConfirmPassword.textContent = "👁️"
  newPasswordInput.type = "password"
  confirmPasswordInput.type = "password"
  passwordError.style.display = "none"
  confirmError.style.display = "none"
  goToStep(2)
})


function goToStep(step) {
 
  document.getElementById("content-step-1").style.display = "none"
  document.getElementById("content-step-2").style.display = "none"
  document.getElementById("content-step-3").style.display = "none"


  successMessage.style.display = "none"

  
  document.getElementById(`content-step-${step}`).style.display = "block"

  for (let i = 1; i <= 3; i++) {
    const stepElement = document.getElementById(`step-${i}`)
    stepElement.classList.remove("active", "completed")
    if (i < step) {
      stepElement.classList.add("completed")
    } else if (i === step) {
      stepElement.classList.add("active")
    }
  }

  currentStep = step
}


goToStep(1)
