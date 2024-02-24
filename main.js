const menu = document.querySelector('.menu');
const menuList = document.querySelector('.topnav ul');

menu.addEventListener('click', ()=>{
  menuList.classList.toggle('showmenu');
})

function menuAnimation(x) {
  x.classList.toggle('change');
}

window.onscroll = function()
{topbar()};

function topbar() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-100px";
  }
}