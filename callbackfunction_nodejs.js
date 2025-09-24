NOTE: 
Before using the prompt function, you need to install prompt-sync by executing the “npm install prompt-sync” command in your command prompt or terminal. 




function showData(name, amt) {   
 console.log(' Hello ' + name + '\n Your are saving ' + amt);   
}   


function getData(callback) { 
 const prompt = require('prompt-sync')();
  var name = prompt(" Welcome! \n What is your name? ");   
 var amt = prompt(" Enter the amount you wish to save.");   
 callback(name, amt);    //callback === showData
}   
  
getData(showData);

