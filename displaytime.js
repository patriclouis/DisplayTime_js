// Display time & date
// Created by patriclouis @ ZJU on Oct. 3, 2013.

// Define variables
var d = new Date();
var date; 
var week; 
var day   = d.getDay();
var month = d.getMonth();
var year  = d.getFullYear();
var hour  = d.getHours();
var minute= d.getMinutes();
var second= d.getSeconds();

// Identify the right day mark
switch(day)
{
	case 0:
	week = "Sunday"
	break;
	case 1:
	week = "Monday"
	break;
	case 2:
	week = "Tuesday"
	break;
	case 3:
	week = "Wendsday"
	break;
	case 4:
	week = "Thursday" 
	break;
	case 5:
	week = "Friday"
	break;
	case 6: 
	week = "Saturday"
}

/* //Alternative way to assign the day mark
if(d.getDay()==0) 
	week="Sunday" 
if(d.getDay()==1) 
	week="Monday" 
if(d.getDay()==2) 
	week="Tuesday" 
if(d.getDay()==3) 
	week="Wendsday" 
if(d.getDay()==4) 
	week="Thursday" 
if(d.getDay()==5) 
	week="Friday" 
if(d.getDay()==6) 
	week="Saturday" */

// Show greetings
if(hour>0 && hour<=12) 
	msg = "Good morning!"
if(hour>12 && hour<=18)
	msg = "Good afternoon!"
if(hour>18 && hour<=24)
	msg = "Good evening!"
if(hour>22 || hour<6)
    msg = "Hey, it is time to sleep and do not be too late!"
    
// Add "0" when the digit is smaller than 10
if(second<10)
	second="0"+second
if(minute<10)
	minute="0"+minute

// Concatenate the elements of date
date = "<br>&nbsp;<br><b>"+ msg +"</b>"+"&nbsp; Now is: "+ year + "-"+ (month+1)+"-"+(d.getDate())+" "; 
time = hour + ":" + minute + ":" + second; 

// Write the ultimate time & date on HTML
document.write("<span>"+ date + week +" "+ time +"</span><br>&nbsp;<br>");
