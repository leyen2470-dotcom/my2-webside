function handleSearch(event) {
  if (event.key === "Enter") {
    const searchValue = document.getElementById("searchInput").value
    console.log("[v0] Tìm kiếm:", searchValue)

    if (searchValue.trim() !== "") {
      alert("Bạn đang tìm kiếm: " + searchValue)
      // Có thể thêm logic điều hướng đến trang kết quả tìm kiếm
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const danhmucLink = document.querySelector(".danhmuc > a")
  const subDanhmuc = document.querySelector(".sub-danhmuc")

  // Toggle dropdown khi click vào danh mục
  if (danhmucLink) {
    danhmucLink.addEventListener("click", (e) => {
      e.preventDefault()
      subDanhmuc.style.display = subDanhmuc.style.display === "block" ? "none" : "block"
    })
  }

  // Đóng dropdown khi click ra ngoài
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      if (subDanhmuc) {
        subDanhmuc.style.display = "none"
      }
    }
  })

  const subLinks = document.querySelectorAll(".sub-danhmuc a")
  subLinks.forEach((link) => {
    link.addEventListener("click", function () {
      console.log("[v0] Bạn chọn:", this.textContent)
      // Có thể thêm logic điều hướng đến danh mục sản phẩm
    })
  })

  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("focus", function () {
      this.parentElement.style.background = "rgba(255, 255, 255, 0.1)"
    })

    searchInput.addEventListener("blur", function () {
      this.parentElement.style.background = "rgba(255, 255, 255, 0.05)"
    })
  }
})
