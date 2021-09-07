//Target all html Element
//............Start............

const menu=document.getElementById('toggle');
const open=document.getElementById('open');
const modal=document.getElementById('modal');
const close=document.getElementById('close');

//.........End.............

//evens
//..........Start..........

menu.addEventListener('click',()=>{

    document.body.classList.toggle('show-menu')
})

open.addEventListener('click',()=>{
    modal.classList.add('show-contact')
})

close.addEventListener('click',()=>{
    modal.classList.remove('show-contact')
})

window.addEventListener('click',e=>{
e.target===modal?modal.classList.remove('show-contact'):false
})
//.......End..............