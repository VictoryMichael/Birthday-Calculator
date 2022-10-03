
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function claculateDate (){
const dateOfBirth = document.getElementById('date-input').value;
const givenDate = document.getElementById('given-input').value;


// convert user input into data object
let startDate = new Date(dateOfBirth);
let endDate = new Date(givenDate);

//extract the year, month, and date from user date input
let stdobYear = startDate.getFullYear();
let stdobMonth = startDate.getMonth() + 1;
let stdobDate = startDate.getDate();

//console.log(`${stdobYear} year : moth: ${stdobMonth}: Dys : ${stdobDate}`);
let givenYear = endDate.getFullYear();
let givenMonth = endDate.getMonth() + 1;
let givenDate1 = endDate.getDate();

 leapTest(givenYear);

if(
    stdobYear > givenYear || 
    (stdobMonth > givenMonth && stdobYear === givenYear) ||
    (stdobDate > givenDate1 && stdobMonth === givenMonth && stdobYear === givenYear)
){
    alert('Not Born Yet!!')
    return;
}

let diffrentYear = givenYear - stdobYear;
 //console.log(diffrentYear)

let diffrentMonth;
let diffrentDate;


if(givenMonth >= stdobMonth){
    diffrentMonth = givenMonth - stdobMonth;
    //console.log(diffrentMonth);
}else {
    diffrentYear--;
    diffrentMonth = 12 + givenMonth - stdobMonth;
    //console.log(diffrentMonth)
}

if(givenDate1 >= stdobDate){
    diffrentDate = givenDate1 - stdobDate;
}else {
    diffrentMonth--;
    let days = month[givenMonth - 2];
    diffrentDate = days + givenDate1 - stdobDate;
    if(diffrentMonth < 0){
        diffrentMonth = 11;
        diffrentYear--;
    }
   // console.log(diffrentMonth);

}

showResult(diffrentYear, diffrentMonth, diffrentDate);


}


const showResult = (totalYears, totalMonth, TotalDays) => {
document.querySelector('.years').innerHTML = `${totalYears} `
document.querySelector('.month').innerHTML = `${totalMonth} `
document.querySelector('.days').innerHTML = `${TotalDays} `

}


//calculate Leap year

function leapTest(year){
 if ((year % 4 == 0) && (year % 100 != 0) ||  (year % 400 == 0)) {
   month[1] = 29;
   //console.log('leap year')
 }else{
    month[1] = 28;
    //console.log('normal Year')
 }

}
