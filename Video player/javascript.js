// Target All the HTML Elements
// ..............Start.......................

const video=document.getElementById("video");
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const fullscreen=document.getElementById('fullscreen');
const volume=document.getElementById('volum');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');
const nextvideo=document.getElementById('next');
const previosvideo=document.getElementById('previous');
var videoSource = ["video/joker.mp4","video/Rauf & Faik).mp4","video/Dharia1.mp4","video/Ali Gatie .mp4"];
var posters=["image/joker1.jpg","image/neverlieme.jpg","image/DHARIA.jpg","image/aligate.jpg"];
// videoSource[0]='video/topgun.m4v';
// videoSource[1]='video/joker.m4v';
// video.videoHeight(360);
// video.videoHeight(400, { constrain: true });
var videoCount = videoSource.length;
var videoindex=0;
video.setAttribute('poster',posters[videoindex])
video.setAttribute("src", videoSource[videoindex]);
// console.log(videoCount)

// ....................End........................

// Function
//...............Start....................

// 1.Create a function to click on video to play/pause
 function updatevideostatus(){
    
   
     if(video.paused)
     {
     
    video.play();
     }
     else{
         video.pause();
     }

     
 }


 //2.Create a function to update the play and stop icons
    function Iconupdate()
    {
        if(video.paused)
        {
            play.innerHTML='<i class="fas fa-play "></i>'
        }
        else{
            play.innerHTML='<i class="fas fa-pause "></i>'
        }
    }

//3.Create a function to update the progress bar
    function Setprogressvideo(){
        
        video.currentTime=(progress.value*video.duration)/100;
    }

//4.Create a function update the screeen full or Minimize
function updatescreen(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else{
          video.exitFullscreen();
      }
}

//5. function to stop the video
    function stopvideo(){
        video.currentTime=0;
        video.pause();
    }

//6. Update the Volume
function updatevolum(){
    if(video.muted)
    {
        video.muted=false;
        volume.innerHTML='<i class="fas fa-volume-up">'
    }
    else{
        video.muted=true;
        volume.innerHTML='<i class="fas fa-volume-mute"></i>'
    }
}

// update progress
function updateProgress(){
    
    progress.value=(video.currentTime/video.duration)*100;
    
    let mins=Math.floor(video.currentTime/60);
    
    if(mins<10)
    {
        mins='0'+ String(mins)
    }

    let sec=Math.floor(video.currentTime%60);
    if(sec<10)
    {
        sec='0' + String(sec)
    }
    timestamp.innerText=`${mins}:${sec}`
}

// Play to Next Vidoe
function NextVideos(){
    
    if(video.paused)
    {
        play.innerHTML='<i class="fas fa-play "></i>'
    }
    else{
        play.innerHTML='<i class="fas fa-play "></i>'
    }

    if(videoindex < videoCount - 1){
        videoindex++;
    }
    else{
        videoindex = 0;
    }
    
    video.setAttribute('poster',posters[videoindex])
    video.setAttribute("src", videoSource[videoindex]);
    video.pause();


    
}

// play Previous Video

function PreviousVideo(){
    if(video.paused)
    {
        play.innerHTML='<i class="fas fa-play "></i>'
    }
    else{
        play.innerHTML='<i class="fas fa-play "></i>'
    }

    if(videoindex < videoCount-1){
        videoindex--;
    }
    else{
        videoindex=0;
    }

    video.setAttribute('poster',posters[videoindex])
    video.setAttribute("src", videoSource[videoindex]);
}


//...............End................



// Event listner for video
//..................Start....................

video.addEventListener('click',updatevideostatus)


video.addEventListener('play',Iconupdate);

video.addEventListener('pause',Iconupdate);

video.addEventListener('timeupdate',  updateProgress);






// Even Listner for buttons

play.addEventListener('click',updatevideostatus);

stop.addEventListener('click',stopvideo);

progress.addEventListener('change' ,Setprogressvideo);

volume.addEventListener('click',updatevolum);

fullscreen.addEventListener('click',updatescreen);

nextvideo.addEventListener('click',NextVideos);

previosvideo.addEventListener('click',PreviousVideo)


//.............End.....................

