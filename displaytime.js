// Display time & date
// Created on by patriclouis @ ZJU on Oct. 3, 2013.

var d = new Date();
var date; 
var week; 

switch(d.getDay())
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

var day   = d.getDay();
var month = d.getMonth();
var year  = d.getFullYear();
var hour  = d.getHours();
var minute= d.getMinutes();
var second= d.getSeconds();

if(hour>0 && hour<=12) 
	msg = "Good morning!"
if(hour>12 && hour<=18)
	msg = "Good afternoon!"
if(hour>18 && hour<=24)
	msg = "Good evening!"
if(hour>22 || hour<6)
    msg = "Hey, it is time to sleep and do not be too late!"
if(second<10)
	second="0"+second
if(minute<10)
	minute="0"+minute

date = "<br>&nbsp;<br><b>"+ msg +"</b>"+"&nbsp; Now is: "+(d.getYear())+"-"+(d.getMonth()+1)+"-"+(d.getDay()-1)+" "; 
time = hour + ":" + minute + ":" + second; 

document.write("<span>"+ date + week +" "+ time +"</span><br>&nbsp;<br>");
