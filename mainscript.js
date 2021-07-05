let body = document.querySelector('body');
let sec = document.querySelector('.card');
let mid_btn = document.querySelector('.section-mid button');
let dark_btn = document.getElementById('dark-btn');
let light_btn = document.getElementById('light-btn');
dark_btn.addEventListener('click', () =>{
    dark_btn.style.display = "none";
    light_btn.style.display = "flex";
    body.style.background = "#4d4d4d";
    sec.classList.toggle("dark_sec");
    mid_btn.classList.toggle("dark_mid_btn");
  });
light_btn.addEventListener('click', () =>{
    dark_btn.style.display = "flex";
    light_btn.style.display = "none";
    body.style.background = "#f0f8ff";
    sec.classList.remove("dark_sec");
    mid_btn.classList.toggle("dark_mid_btn");
  });