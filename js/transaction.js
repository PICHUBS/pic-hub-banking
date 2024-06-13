let transactionForm = document.querySelector('.form-container');
let accountNameInput = document.querySelector('.Account-name-input');
let accountNumberInput = document.querySelector('.Account-number-input');
let initialAmount = document.querySelector('.initial-amount');
let addClient = document.querySelector('.add-btn');
let depositAmountInput = document.querySelector('.deposit-amount');
let depositBtns = document.querySelector('.deposit-btn');
let transferAmountInput = document.querySelector('.transfer-amount-input');
let transferBtns = document.querySelector('.transfer-btn');
let withdrawAmountInput = document.querySelector('.withdraw-amount-input');
let withdrawBtns = document.querySelector('.withdraw-Btn');
let accountType = document.querySelector('input[name="check"]:checked');
let clientDetailsTable = document.querySelector("#client-data-container");
let clientDetails = JSON.parse(localStorage.getItem("clientDetails")) || [];



addClient.addEventListener('click' , (e) =>{
  e.preventDefault();
  //  typeOfAccount();
  let isValid = validateInputvalue();
  if (!isValid) {
    return
  }
  else{
    checkclientdata();
    generatecliendata();
  }
})

const typeOfAccount = () => {
  let accountType = document.querySelector('input[name="check"]:checked');
  if (accountType) {
      let selectedValue = accountType.value;
      console.log(selectedValue);
  } else {
  }
 } ;

const validateInputvalue = () => {

  let accountNameInputValue = accountNameInput.value.trim();
  let accountNumberInputValue = accountNumberInput.value.trim();
  let initialAmountValue = initialAmount.value.trim();
  if ( accountNameInputValue == "" ||  accountNumberInputValue == "" || initialAmountValue == "" || transferAmountInput == "" || withdrawAmountInput == "" || depositAmountInput == "") {
    alert('inavlid input')
    return false;
    
  } else {
    alert('client has been succesfuly added')

    return true;
    
  }
  // accountNameInput.value = "";
  // accountNumberInput.value = "";
  // initialAmount.value = "";

 } ;
const checkclientdata = () => {
  let accountType = document.querySelector('input[name="check"]:checked');
  if (accountType) {
      let selectedValue = accountType.value;
      console.log(selectedValue);
  } else {
  }
  let clientdata = {
    accountname:accountNameInput.value,
    accountnumber:accountNumberInput.value,
    accounttype: accountType.value,
    balance:initialAmount.value
  }
  clientDetails.push(clientdata);

  localStorage.setItem("clientDetails",JSON.stringify(clientDetails));
  console.log(clientDetails);
  debugger
};
 const generatecliendata = () =>{
  let clientDetailsTable = document.querySelector("#client-data-container");

  clientDetailsTable.innerHTML = clientDetails.map((clientdata) => {
    let { accountname, accountnumber, accounttype, balance} = clientdata;
    return`
    <tr>
    <td>${accountname}</td>
    <td>${accountnumber}</td>
    <td>${accounttype}</td>
    <td>$${balance}</td>
 
  </tr>
    `;

  }).join("");
  

  
 };

 generatecliendata();


depositBtns.addEventListener('click', (e) => {
e.preventDefault();
 validatedeposit();

});
 const validatedeposit = () => {

  let accountNameInputValue = accountNameInput.value.trim();
  let accountNumberInputValue = accountNumberInput.value.trim();
  // let initialAmountValue = initialAmount.value.trim();

  if ( accountNumberInputValue ===  clientDetails.accountnumber && accountNameInputValue === clientDetails.accountname)
    
    {
      

console.log('i a');
  }
   else {
    
  }
console.log(clientDetails.accountnumber);
 };
