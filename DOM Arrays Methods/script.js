// Target all HTML Elements
//............Start.............

const main=document.getElementById('main');
const btnuser=document.getElementById('user')
const btnmoney=document.getElementById('money');
const btnfilter=document.getElementById('filter')
const btnsort=document.getElementById('sort');
const btnsum=document.getElementById('sum')

let data=[];

//............End.............

// Function
//............start..........

 async function randomuserapi(){

    const fetchdata=await fetch('https://randomuser.me/api/');

    const jsnformat=await fetchdata.json();

    const user=jsnformat.results[0];

    const newUser={
        name:`${user.name.title} ${user.name.first} ${user.name.last}`,
        balance:Math.floor(Math.random()*1000000)
    }
    
    AddData(newUser)
}

function AddData(newUser){
   data.push(newUser);
   
   updateDom()
}

function updateDom(userData=data){

    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>'

    userData.forEach(users=>{

        const Userdiv=document.createElement('div');
        Userdiv.classList.add('user');
        // Userdiv.innerHTML=`<strong>${user.name} </strong>${NumberformatDolar(user.balance)}`
        Userdiv.innerHTML = `<strong>${users.name}</strong> 
        ${NumberformatDolar(users.balance)}`
        main.appendChild(Userdiv)

    })

}
function NumberformatDolar(number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function DoubleMoney(){
    data = data.map(user => {
        return { ...user, balance: user.balance * 2 }
    });

    updateDom();
}

function FilterMillionaire(){
    data=data.filter(user=>user.balance>1000000);
    updateDom()
}

function SortList(){
    
    data=data.sort((a,b)=>a.balance-b.balance);
    updateDom();
}

function SumWealth(){
    
    const balance=data.reduce((acc,user)=>(acc+=user.balance),0);
     
     const sumdiv=document.createElement('div');
     sumdiv.style='display:flex;justify-content:center;align-item:center;'
    sumdiv.innerHTML=` <h3>Total Balance: ${NumberformatDolar(balance)}</h3>`;
    
    main.appendChild(sumdiv);
}
// console.log(arraydata)
//............End..........

//Events
//.........Start...............

    btnuser.addEventListener('click',randomuserapi);

    btnmoney.addEventListener('click',DoubleMoney);

    btnfilter.addEventListener('click',FilterMillionaire);
    
    btnsort.addEventListener('click',SortList);

    btnsum.addEventListener('click',SumWealth)

//..........End................




// Call the Function
randomuserapi();

