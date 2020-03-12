var logo= document.querySelector(".section-navbar__wrapper-logo");
var horizontalNav = document.querySelector(".section-navbar__wrapper-menu");
var navBar = document.querySelector(".section-navbar");


 window.addEventListener("scroll",function(){
  if(window.pageYOffset >100){
    logo.classList.add("collapse-logo");
    horizontalNav.style.display="none";
    navBar.style.backgroundColor="rgba(0,0,0,0)";
    navBar.style.boxShadow="0 0 0 0px rgba(0, 0, 0, 0)";
    navBar.style.paddingTop="20px";
  }
  else{
   logo.classList.remove("collapse-logo");
   horizontalNav.style.display="block"
  }
 });

 logo.addEventListener("click" , function(){
  navBar.style.backgroundColor="#fff";
  navBar.style.boxShadow="3px 6px 5px 0px rgba(255, 57, 70, 0.06)";
  navBar.style.paddingTop="15px";
  horizontalNav.style.display="block";
  logo.classList.remove("collapse-logo");
 })