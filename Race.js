let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly=true;
const age=16;
if(raceNumber<=1000 && age>=18){
  console.log('You are adult.');
}
if(age>=18 &&  registeredEarly==true){
  console.log('They will race at 9:30am with number=' +raceNumber);
}
else if(age>=18 && registeredEarly==false){
  console.log('Race at 11:00am and number is =' +raceNumber );
}
else if(age< 18){
  console.log('Race at 12:30pm and shirt number is ' + raceNumber);
}