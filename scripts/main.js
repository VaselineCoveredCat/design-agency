const menu=document.querySelector(".js-menu"),nav=document.querySelector(".js-nav"),send=document.querySelector(".js-send"),year=document.querySelector(".js-year"),currentYear=(new Date).getFullYear();menu.addEventListener("click",()=>{"true"===menu.getAttribute("aria-expanded")?menu.setAttribute("aria-expanded","false"):menu.setAttribute("aria-expanded","true")});nav.addEventListener("keydown",a=>{"Escape"===a.key&&menu.setAttribute("aria-expanded","false")});send.addEventListener("click",a=>{a.preventDefault()});
year.textContent=String(currentYear);