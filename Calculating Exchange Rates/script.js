// Target All the HTML Elements
//..........Start...................

const Currencyone=document.getElementById('currency-one');

const Currencytwo=document.getElementById('currency-two');

const Currencyoneamount=document.getElementById('amount-one');
console.log(Currencyoneamount.value)

const Currencytwoamount=document.getElementById('amount-two');

const Rate =document.getElementById('rate');

const swap=document.getElementById('swap');


//............End...................

// Function
//.......................Start....................

function calculate(){
    const currencyoneCode=Currencyone.value ;
    
    const currencytwoCode=Currencytwo.value ;
    
    fetch(`https://v6.exchangerate-api.com/v6/276c1a36f53f75617f470cc8/pair/${currencyoneCode}/${currencytwoCode}`)
    .then(res=>res.json())
    .then(data=>{
       
        const conversionrate=data.conversion_rate;
        Rate.innerHTML=`1  ${currencyoneCode}  =  ${conversionrate}-${currencytwoCode}`;

        // const amount2= new Intl.NumberFormat('en-US',{style:'currency',currency:currencytwoCode}).format((Currencyoneamount.value * conversionrate).toFixed(2));
        const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencytwoCode }).format((Currencyoneamount.value * conversionrate).toFixed(2));

        Currencytwoamount.value=amount2;
        // console.log(Currencyoneamount.value=amount1)
    })
}

//......................End......................




// Evens
//.............Start....................

Currencyone.addEventListener('change',calculate);

Currencytwo.addEventListener('change',calculate);

Currencyoneamount.addEventListener('input',calculate);

Currencytwoamount.addEventListener('input',calculate);

swap.addEventListener('click',function(){
    const temp=Currencyone.value;
    console.log(temp)
    Currencyone.value=Currencytwo.value;
    Currencytwo.value=temp;
    // const temp2=Currencyoneamount.value;
    // Currencyoneamount.value=Currencytwoamount.value;
    // Currencytwoamount.value=temp2;

})



//.............END......................

// Call calculate each time when page upload

calculate()