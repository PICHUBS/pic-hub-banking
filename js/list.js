let addClientBtn = document.querySelector('#add-client');
let transferBtn = document.querySelector('#transfer-btn');
let withdrawBtn = document.querySelector('#withdraw-btn');
let depositBtn = document.querySelector('#deposit-btn');
let container1 = document.querySelector('.first-container1');
let container2 = document.querySelector('.first-container2');
let container3 = document.querySelector('.first-container3');
let container4 = document.querySelector('.first-container4');

addClientBtn.addEventListener('click' , () =>{
  container1.style.display = "block";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
})

depositBtn.addEventListener('click' , () =>{
  console.log('ii');
  container2.style.display = "block";
  container1.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";

})
transferBtn.addEventListener('click' , () =>{
  container3.style.display = "block";
  container1.style.display = "none";
  container2.style.display = "none";
  container4.style.display = "none";

})
withdrawBtn.addEventListener('click' , () =>{
  container4.style.display = "block";
  container1.style.display = "none";
  container3.style.display = "none";
  container2.style.display = "none";

})