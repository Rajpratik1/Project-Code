const endDate = "16 April 2024 07:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = Math.floor((end - now) / 1000);
    if(diff<0)return;
    // Days
    inputs[0].value = Math.floor(diff / 24 / 3600);
    //Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //Minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //Seconds
    inputs[3].value = (Math.floor(diff % 60));
}

setInterval(
    ()=>{
        clock();
    },1000
)