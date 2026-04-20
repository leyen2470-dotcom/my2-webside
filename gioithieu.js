const cart = []

// Menu toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("nav")
  nav.classList.toggle("active")
})

// Close menu when link clicked
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active")
  })
})

// Scroll to section
function scrollTo(sectionId) {
  const section = document.getElementById(sectionId)
  section.scrollIntoView({ behavior: "smooth" })
  document.getElementById("nav").classList.remove("active")
}

// Form submit
function handleSubmit(event) {
  event.preventDefault()
  alert("Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ với bạn sớm.")
  event.target.reset()
}

// Close modal when click outside
window.onclick = (event) => {
  const modal = document.getElementById("cartModal")
  if (event.target === modal) {
    modal.style.display = "none"
  }
}
