// Target DOM HTML
//...........Start..............

const correctedword=document.getElementById('correctletter');


const incorrectword=document.getElementById('incorrectletter');

const popup=document.getElementById('congratulation-container');

const playbtn=document.getElementById('playagain');

const notification= document.getElementById('notification');

const figurepart = document.querySelectorAll('.figure-part');


const winmessage=document.getElementById('final-message');

// const popup=document.getElementById('popup');

const incorrectletterArray=['a'];
const correctletterArray=[];


let word=["habit","printed","now","guide","continent","bean","fire","warn","gas","straw","earlier","almost"
,"kitchen","load","winter","poetry","moon","terrible"
,"large","mix","we","rough","picture","separate"
,"ants","pen","drawn","everything","proud","forgotten"
,"listen","compass","birds","structure","mixture","knife"
,"married","gone","disappear","donkey","pressure","has"];

// let word=['habit']
let selectedword=word[Math.floor(Math.random()*word.length)];



//............End.............

//Functions
//...........Start................

// Make a function to display a words

function displayword(){
    correctedword.innerHTML=`
    ${selectedword
    .split('')
    .map(letter=>`<span class="letter">
    
    ${correctletterArray.includes(letter) ? letter : ''}

    </span>`)
    .join('')
    }
    `;

    const innertext=correctedword.innerText.replace(/\n/g,'')
     
   if(innertext===selectedword)
   {
    winmessage.innerText='Congratulation!You won a Game!';
    popup.style.display='flex'
   }
     
};


function shownotification(){

    notification.classList.add('show');

     setTimeout(()=>{
        notification.classList.remove('show')
     },2000)
}


function updateincorrectletter(){
    incorrectword.innerHTML=`
    ${incorrectletterArray.length > 0 ? '<p> Incorrect Letter </p>' : ""}
    ${incorrectletterArray.map(letter=>`<span> ${letter} </span>`)}
    `;

    figurepart.forEach((part,index) => {
        const error=incorrectletterArray.length;
          if(index<error)
          {
              part.style.display='block'
          }
          else{
              part.style.display='none'
          }
    })

    if(incorrectletterArray.length===figurepart.length)
    {
        winmessage.innerText=' Game Over !';
    popup.style.display='flex'
    }

}
//...........End..................


//Evens
//...........Start...........

window.addEventListener('keydown',e=>{
    if(e.keyCode>=65 && e.keyCode<=90)
    {
        const key=e.key;
        if(selectedword.includes(key))
        {
           if(!correctletterArray.includes(key)){
               correctletterArray.push(key)
               displayword();
           }
           else{
               shownotification();
           }
        }
        else{
            if(!incorrectletterArray.includes(key)){
                incorrectletterArray.push(key)

                updateincorrectletter()
            }
            else{
                shownotification()
            }
        }
    }
})

playbtn.addEventListener('click',()=>{
    correctletterArray.splice(0);
    incorrectletterArray.splice(0);

    selectedword=Math.floor(Math.random()*word.length);
 
updateincorrectletter();

    popup.style.display='none';

    displayword();
})
//..........End...............

// .................Call Function...........
displayword();
