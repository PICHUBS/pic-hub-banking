let title = document.querySelector('.title');
let signupbtn = document.querySelector('#signupbtn');
let signinbtn = document.querySelector('#signinbtn');


signupbtn.addEventListener('click',(e) =>{
  e.preventDefault();
 title.innerHTML = 'sign up'
 signupbtn.classList.remove("disable")
 signinbtn.classList.add("disable")
 nameinput.style.maxHeight = "40px";
});

signinbtn.addEventListener('click',(e) =>{
  e.preventDefault();
  title.innerHTML = 'sign in'
  nameinput.style.maxHeight = "0";
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");
});
