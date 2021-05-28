// Target All HTML Element 
const container=document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total')
const movieManu=document.getElementById('movie')
let ticketprice=+movieManu.value;


PopulateUI();

// When you refresh the page the selected seat are eliminated This issue are solve to
// to get the data from local storage then the selected seat remain when we refresh the page
function PopulateUI()
{
    const selectedSeats=JSON.parse(localStorage.getItem('selected seat'))
    if(selectedSeats!=null && selectedSeats.length>0)
    {
       seats.forEach((seat,index)=>{
           
           if(selectedSeats.indexOf(index)>-1)
           {
            
              seat.classList.add('selected')
              
           }
       })
    };
/// Get the Movie index  from local storage....
const MovieIndex=localStorage.getItem('Movieindex');
if(MovieIndex != null)
{
   
    movieManu.selectedIndex = MovieIndex;
}
}



    
// To update the count value or selected seat value and price of Movie

function updatecountvalue(){
    //Get all seat
    const selectseat=document.querySelectorAll('.row .seat.selected');
    
    // Get the index of each seat
    const seatindex=[...selectseat].map(seat=>[...seats].indexOf(seat));
    
    //get the length of seat
    const selectedseatlenght=selectseat.length;
    
    // target the count value
    count.innerText=selectedseatlenght;
    //Total price of movie
    total.innerText=selectedseatlenght*ticketprice;
    // set the index on the localstorage
    localStorage.setItem('selected seat',JSON.stringify(seatindex))

    
}


//Add even Listner on container to click on the seat are selected
container.addEventListener('click',(seat)=>{
    if(seat.target.classList.contains('seat') && !seat. target.classList.contains('occupied') )
    {
        //add selected class and remove
        seat.target.classList.toggle('selected')
        updatecountvalue();
    }

    // Set the Movie price and Index in localstorage
    function setMovieData(Movieindex,Movievalue){
       
        localStorage.setItem('Movieindex',Movieindex);
        localStorage.setItem('Movieprice',Movievalue)
    }
    // Add event listner on moviemanu to change the price according to the selected and movie

    movieManu.addEventListener('change', e=>{
      ticketprice= e.target.value;
      setMovieData(e.target.selectedIndex, e.target.value);
      updatecountvalue();
        
    })
    
})