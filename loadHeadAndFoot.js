function loadHaF(){
    //header
    document.getElementById('header').innerHTML=`
      
   <div class="header-container">
            <div class="logo">
                <img src="./image/logo nội thất.png" alt="logo">
            </div>

           

    `;
    // menu
    document.getElementById('nav').innerHTML=`
       
        <nav class="nav-menu">
                <a href="./trangchu.html" class="nav-link">TRANG CHỦ</a>
                <a href="./gioithieu.html" class="nav-link">GIỚI THIỆU</a>
                <a href="./bosuutap.html" class="nav-link">BỘ SƯU TẬP/DỰ ÁN</a>
                <a href="./lienhe.html" class="nav-link">LIÊN HỆ</a>
                
                <div class="dropdown">
    <ul class="menu">
        <li class="danhmuc">
            <a href="#"> DANH MỤC SẢN PHẨM ▾ </a>
            <ul class="sub-danhmuc">
                <li><a href="#">GHẾ SOFA</a></li>
                <li><a href="#">BÀN</a></li>
                <li><a href="#">GHẾ</a></li>
                <li><a href="#">TỦ VÀ KỆ</a></li>
                <li><a href="#">GIƯỜNG NGỦ</a></li>
                <li><a href="#">BẾP</a></li>
                <li><a href="#">HÀNG TRANG TRÍ</a></li>
            </ul>
        </li>
    </ul>
</div>   
            </nav>
    `
    //footer
    document.getElementById('footer').innerHTML=`
  
               <p>www.motifstudio.com | Hotline: 776487412</p>
          
    `
}

window.onload = loadHaF;
