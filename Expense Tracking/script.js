// Target all DOM HTML Element

//.............Start............

const totalamount=document.getElementById('amount')
const credit=document.getElementById('credit')
const debit=document.getElementById('debit')
const list=document.getElementById('list')
const form=document.getElementById('form')
const btn=document.getElementById('btn')
const reason=document.getElementById('reason')
const amount=document.getElementById('amounts')


// local storage

// const localstrg=[
    
// ]

// Transaction=[]

// const localstoragetranstion=JSON.parse(localStorage.getItem('Transaction'))

// let Transaction=localStorage.getItem('Transaction')!='null' ? localstoragetranstion:[];

const localStorageTransations = JSON.parse(localStorage.getItem("Transaction"));
 
let Transaction =localStorage.getItem("Transaction") !== null ? localStorageTransations : [];

//.............End............

//..........Start Function............


function displayTransaction(Transaction){
 let transtionLi=document.createElement('li');
transtionLi.classList.add(Transaction.amount > 0 ? 'credits':'debits')
transtionLi.innerHTML=`
${Transaction.reason}<span>${Transaction.amount}</span>
  <button class="dele-btn" onclick="deleteTransaction(${Transaction.id})">X</button>
`;

list.appendChild(transtionLi)
// updateLocalStorage() 
    
}

function updateBalance(){
    const transactionamount=Transaction.map(transaction=>transaction.amount)
    const totalamounts=transactionamount.reduce((acc,amount)=>(acc+=amount),0)
    const creditamount=transactionamount
                                    .filter(amount=>amount>0)
                                    .reduce((acc,amount)=>(acc+=amount),0)
     const debitamount=transactionamount
                                    .filter(amount=>amount<0)
                                    .reduce((acc,amount)=>(acc+=amount),0)
    credit.innerHTML=`
    <h3>Credit</h3>
    <h4>${creditamount}</h4>`

    debit.innerHTML=`
<h3>Debit</h3>
    <h4>${debitamount}</h4>
    `
    totalamount.innerHTML=`
    <h2>${totalamounts}</h2>
    <p>Total Balance</p>
    `
}

function AddFunction(e){
// e.preventDefault()
e.preventDefault();
if ( reason.value.trim() === '' || amount.value.trim() === '' ) {
    // Display error message if form is not complete
    alert('Please provide a valid reason and transaction amount.')
}
else{
    const transaction={
        id:createID(),
        reason:reason.value,
        amount:+amount.value
    }

    Transaction.push(transaction)
    displayTransaction(transaction)
    updateBalance();
    updateLocalStorage();
    reason.value=''
    amount.value=''
}
}

function createID(){
    return Math.floor(Math.random()*1000000000000)
}

function deleteTransaction(id){

    Transaction=Transaction.filter(transaction=>transaction.id !=id)
    updateLocalStorage();
    init()
}

function init(){
    list.innerHTML = '';
    Transaction.forEach(displayTransaction);
    updateBalance()
}

// function updatelocalstoragetrnastion(){
//     localStorage.setItem("Transaction",JSON.stringify("Transaction"))
// }

function updateLocalStorage() {
    localStorage.setItem("Transaction", JSON.stringify(Transaction))
    
    // window.localStorage.setItem('Transaction"', JSON.stringify(Transaction));
  }
//..........End Function............

// ..........Start Even listner.......
form.addEventListener('submit',AddFunction)

//..........End Even listern.........

init()