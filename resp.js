// for toggle hiden if touch burger
// querselector pull one element
burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.nav-list')
rightnav= document.querySelector('.right-nav')



burger.addEventListener('click',()=>{
    
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('navbar');
  

})