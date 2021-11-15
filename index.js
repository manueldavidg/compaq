document.addEventListener("DOMContentLoaded",()=>{

    //Navbar
    let auto_hide_elems = document.querySelectorAll(".auto-hide");
    let nav_2 = document.querySelectorAll(".nav-2");
    let navbar = document.querySelector("#Navbar");

    //Auto hide
    if (auto_hide_elems){
        let last_scroll_pos = 0;
        window.addEventListener("scroll",()=>{
            
            if ((last_scroll_pos > window.scrollY) || window.scrollY < 15){ //Scrolled uppwards
                auto_hide_elems.forEach(auto_hide => {
                    auto_hide.classList.remove("scroll-hide");
                    auto_hide.classList.add("scroll-show");
                })
                } else { //Scrolled downwards
                    auto_hide_elems.forEach(auto_hide=>{
                    
                    auto_hide.classList.add("scroll-hide");
                    auto_hide.classList.remove("scroll-show"); 
                })
    
                    if (nav_2){
                        nav_2.forEach(element => {
                            element.classList.remove("show")
                        });
                    }
    
                    if (navbar){
                        navbar.classList.remove("show")
                    }
    
                }
                last_scroll_pos = window.scrollY;
            });
        }




    document.addEventListener("click",(e)=>{
        let classList = e.target.className;
        if (!classList.includes("nav-2")){ //If clicks on different element than .nav-2
            if (nav_2){
                nav_2.forEach(element => {
                    element.classList.remove("show")
                });
            }
        }
    })


}); // Close onLoad event

//hide when mouse is over

let hide_mouse_leave = (e) => {
    console.log(e.target);
    e.target.classList.remove("show")

}

// Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });