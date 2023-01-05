/*This Javascript is resionsible for dynamically loading the Header and Footer in all the html pages*/ 

addEventListener('DOMContentLoaded',(Event) => {


    let header = document.getElementsByClassName("header");
    document.querySelector(".header").innerHTML = `    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="/Public/Resources/travellingera-low-resolution-logo-color-on-transparent-background.png" alt="TravellingEra Logo" width="50" >
    TravellingEra</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">TravellingEra</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/Public/Pages/PlanADay.html">Plan a Day</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore 
            </a>
            <ul class="dropdown-menu">
             <li class="nav-item dropdown"></li>
              <li><a class="dropdown-item" href="/Public/Pages/Content/redfort.html">Red Fort</a></li>
                <li><a class="dropdown-item" href="/Public/Pages/Content/indiagate.html">India Gate</a></li>
                  <li><a class="dropdown-item" href="/Public/Pages/Content/jamamasjid.html">Jama Masjid</a></li>
                    <li><a class="dropdown-item" href="/Public/Pages/Content/connaughtplace.html">Connaught Place</a></li>

              <li>
                
              </li>
              <hr class="dropdown-divider">
              <li><a class="dropdown-item" href="/Public/Pages/Explore.html">Explore More Places</a></li>

            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>


`

let footer = document.querySelector(".footer");
footer.innerHTML = `
      <p></p>
       <p>Copyright© 2022 RME-Bulsajo WT-Group Project Team . All Rights Reserved.</p>
       <address>
        <ul>
          RME-Bulsajo WT-Group Project Team
          <li>
            Rahid Mondal
          </li>
          <li>Shivang Tiwari </li>
          <li>Pushpam Jha   </li>
          <li>Ujjawal Jain</li>
          <li>Ishika Thakur</li>
          
        </ul>
       </address>
        <p>Version : <a href="https://github.com/RME-Bulsajo/WT-Group-Project">v.1.1</a></p>

`

;
    







});

