//Target all html elemeents
//............Start...........
const form=document.getElementById('form')
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
// console.log(password2)

//...........End....................

// Function
//...........Start.............

function showError(input,message){
    //get the contor form
    const controlform=input.parentElement;
    // overrite the classname of control-form and add error classe
    controlform.className="control-form error";
    // Target the small html element
    const small=controlform.querySelector('small')
// Target the text of smalll
    small.innerText=message
}

// Create a function of ShowSucess
function ShowsucessMessage(input){
    const controlform=input.parentElement;
    controlform.className="control-form success";
}

// Create a function to accept array of input
function CheckRequire(inputarray)
{
    
   inputarray.forEach(function(input){
       if(input.value === '')
       {
           showError(input, `${getinputid(input)} is require`)
       }
       else{
           ShowsucessMessage(input)
       }
   })
}

// Function to get the input of id
function getinputid(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Function to check the lenght of user name and password
function CheckLength(input,min,max){
if(input.value.length < min)
{
    showError(input,`${getinputid(input)} need at least ${min} character`)
} else if(input.value.length > max){
    showError(input,`${getinputid(input)} less then ${max} character ` )
}
else{
    ShowsucessMessage(input)
}

}


// function to validate format of email

function Checkemail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim()))
    {
        ShowsucessMessage(email)
    }
    else{
        showError(email,` Invalide Email`)
    }
}

// Function to Compare the Password and confirm password
function CheckpasswordMatch(password,password2){
    if(password!==password2)
    {
        showError(password2,`Password Does not Match`)
    }
}
//...........End.............

// Event Listner
//................Start...............

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    CheckRequire([username,email,password,password2]);
    CheckLength(username,3,20)
    CheckLength(password,7,30)
    Checkemail(email)
    CheckpasswordMatch(password,password2)
})

//...............ENd...............