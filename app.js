const endDate = prompt("Enter the date");


document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = ()=>{
    const end =  new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000 ;

    if(diff <0) return alert("Date over");
    //cConevert into days
    const days = Math.floor(diff/3600/24);
    console.log(days)
    inputs[0].value = days ;
    const hours = Math.floor(diff/3600)%24;
    inputs[1].value = hours;
    const min = Math.floor(diff/60)%60;
    inputs[2].value = min;
    const sec = Math.floor(diff)%60;
    inputs[3].value = sec;

}

clock()


setInterval(
    ()=>{
        clock()

    },1000
)