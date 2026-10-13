var r="back-to-top",e=null,o=!1;function i(){if(e&&document.body.contains(e))return e;let t=document.createElement("button");return t.id=r,t.type="button",t.className="back-to-top",t.setAttribute("aria-label","\u56DE\u5230\u9876\u90E8"),t.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m5 12 7-7 7 7"></path>
      <path d="M12 19V5"></path>
    </svg>
  `,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.body.appendChild(t),e=t,t}function n(){o=!1,e&&e.classList.toggle("visible",window.scrollY>300)}function l(){o||(o=!0,requestAnimationFrame(n))}window.addEventListener("scroll",l,{passive:!0});document.addEventListener("nav",()=>{i(),n()});document.addEventListener("render",()=>{i(),n()});i();n();
