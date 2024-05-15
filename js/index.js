
  const nav1=document.querySelector('.nav');
 window.addEventListener('scroll', ()=>{
    if(window.scrollY>=56){
      nav1.classList.add("navscrolled");
    } else if(window.scrollY < 56){
      nav1.classList.remove("navscrolled");
    }
  });
