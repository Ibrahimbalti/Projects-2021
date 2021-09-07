//Dom target Element
//......Start...........

const container=document.getElementById('container');
const imgtitle=document.getElementById('img-title')
const title=document.getElementById('title')
const playbtn=document.getElementById('play')
const prevbtn=document.getElementById('prev')
const nextbtn=document.getElementById('next')
const startime=document.getElementById('starttime')
const endtime=document.getElementById('endtime')
const progress=document.getElementById('progress')
const progressbar=document.getElementById('progress-bar')
const audio=document.getElementById('audio');
const images=document.getAnimations('images')
// console.log(images)

const track=["ALLAH U LATEEF ALLAH","IZZAT KHUDA KI FATIMA"]
// const img=["ABBAS ANAND","Muazzam Ali Mirza"]
let index=1;

//...........End...........

//////.........Function start.........
function loadtrack(track)
{
    title.innerHTML=track;
//    console.log( imgtitle.innerHTML=image);
//    console.log(audio.src=`${track}.mp3`)
audio.src = `naat/${track}.mp3`;
images.src=`image/${track}.jpg`

}

// function loadimage(image)
// {
   
   
    
// }

function Playtrack(){
   
    // audio.play();

    if(audio.paused)
    {
playbtn.innerHTML='<i class="fas fa-pause "></i>'
   audio.play()
    }
    else{
        playbtn.innerHTML='<i class="fas fa-play "></i>'
        audio.pause()
    }
}

function PrevTrack(){
    index--
    if(index < 0)
    {
        index=track.length-1
        // index=img.length-1
    }
loadtrack()
 audio.play()
}
//......End function........../
//...........Start Even.......

playbtn.addEventListener('click',Playtrack)
prevbtn.addEventListener('click',PrevTrack)

//...........end even.......




//..........call functions........
// loadimage(img[index])
loadtrack(track[index]);

