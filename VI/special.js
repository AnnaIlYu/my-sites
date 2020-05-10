window.onload = funonload;
var fontS=20;
var interval=24;
var bcg = ReadSpec('background');
var clr=ReadSpec('color');
var fnt=ReadSpec('fontSize');
var int=ReadSpec('interval');
var borderColor=ReadSpec('borderColor');


function funonload()
{
	var slabovid = ReadSpec('special');
	addButton(slabovid);
	checkSpec(slabovid);
	if (slabovid== 'y')
	buttons_control();
}

function checkSpec(spec) 
{

	setButton(spec);

	if (spec == 'y')
 	{

 // Это обработка формы обратной связи, которая была добавлена на сайт позднее
    	if(bcg!=null)
     	{
			document.getElementsByClassName("show-btn")[0].style.borderColor=borderColor;
	        document.getElementsByClassName("send-message")[0].style.borderColor=borderColor;
	        document.getElementById("envelope").style.borderColor=borderColor;
     	}
     	else
     	{
	        document.getElementsByClassName("show-btn")[0].style.borderColor="#999999";
	        document.getElementsByClassName("send-message")[0].style.borderColor="#999999";
	        document.getElementById("envelope").style.borderColor="#999999";
     	}
     
     //Обработка всех элементов сайта, кроме формы обратной связи (ведь она была позже добавлена)
     	var allelem = document.getElementsByTagName("*");

	    for(var i=0; i<allelem.length; i++) 	
	    {
			if(allelem[i].id!="spec" && allelem[i].id!="close")
			{
			   if(bcg!=null)
			   {
					allelem[i].style.background=bcg;
					allelem[i].style.color=clr;
			   }
			   else
			   {
					allelem[i].style.background="#fff";
					allelem[i].style.color="#000";
			   }
				allelem[i].style.backgroundImage= "none";
				allelem[i].style.fontStyle='normal';
				allelem[i].style.fontFamily="PT Sans, sans-serif, Arial, Verdana";
				allelem[i].style.overflow=" visible";

	           	if(fnt!=undefined)
					allelem[i].style.fontSize= fnt+"px";
		   		else
					allelem[i].style.fontSize= fontS+"px";

		   		if(int!=undefined)
					allelem[i].style.lineHeight=int + "px";
		   		else
					allelem[i].style.lineHeight=interval + "px";
					allelem[i].style.letterSpacing=" 2px" ;
			}
	    }
  	}
}

function ReadSpec(name)
{
	var matches = document.cookie.match(new RegExp(
	 "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function SetCookieSpec(name,value) 
{
    document.cookie = name + "=" + value;
}

function addButton() 
{

    var parentElem=document.getElementById('visPanel');
   	parentElem.setAttribute("style","position:relative; margin-left: auto; margin-right:auto; width:1024px;  color: #000;");

    var button = document.createElement('input');
    var parentElem = document.getElementById('visPanel');
    var s = ReadSpec('special');
    button.type = 'button';
    button.id = 'spec';
    button.value = '';
    button.setAttribute("onclick","Spec()");
    button.setAttribute("style","position:absolute; z-index:9999; left:70%;  font-size:20px; font-weight:bold; background: #fff;"); 
    parentElem.insertBefore(button, parentElem.lastChild);
    setButton(s);	
}


function Spec() {
	var spec = ReadSpec('special');
	
	if (spec == 'y')
	{
	   SetCookieSpec('special','n');  
	   setButton('n');
	   
	   location.reload();
	}
	else 
	{
    	if(bcg!=null)
    	{
			document.getElementsByClassName("show-btn")[0].style.borderColor=borderColor;
	        document.getElementsByClassName("send-message")[0].style.borderColor=borderColor;
	        document.getElementById("envelope").style.borderColor=borderColor;
     	}
	    else
	    {
	        document.getElementsByClassName("show-btn")[0].style.borderColor="#999999";
	        document.getElementsByClassName("send-message")[0].style.borderColor="#999999";
	        document.getElementById("envelope").style.borderColor="#999999";
     	}

		var allelem = document.getElementsByTagName("*");

		for(var i=0; i<allelem.length; i++) 	
		{
			if(allelem[i].id!="spec" && allelem[i].id!="close")
			{
	    		if(bcg!=null)
	   			{
					allelem[i].style.background=bcg;
					allelem[i].style.color=clr;
	   			}
			   else
			   {
					allelem[i].style.background="#fff";
					allelem[i].style.color="#000";
			   }
				allelem[i].style.backgroundImage= "none";
				allelem[i].style.fontStyle='normal';
				allelem[i].style.fontFamily="PT Sans, sans-serif, Arial, Verdana";
				allelem[i].style.overflow=" visible";

           		if(fnt!=undefined)
					allelem[i].style.fontSize= fnt+"px";
	   			else
					allelem[i].style.fontSize= fontS+"px";

	   			if(int!=undefined)
					allelem[i].style.lineHeight=int + "px";
	   			else
					allelem[i].style.lineHeight=interval + "px";
					allelem[i].style.letterSpacing=" 2px" ;
			}
		}

		SetCookieSpec('special','y');  
		setButton('y');

   		buttons_control();
	}
}


//кнопки управления
function buttons_control()
{
    var contentElem=document.getElementById('content');
    var parentElem=document.getElementById('visPanel');
   	parentElem.setAttribute("style", "position:relative; margin-left: auto; margin-right:auto; width:1024px; height:40px; color: #000;");

   	contentElem.setAttribute("style", "margin-top: 90px;");

    buttonMinus = document.createElement('input');
    buttonMinus.type = 'button';
    buttonMinus.id = 'minus';
    buttonMinus.value = ' а- ';
    buttonMinus.setAttribute("onclick","fontSize(this)");
    buttonMinus.setAttribute("style","position:absolute; z-index:9999;  width:5%;height:50; top:35px;left:0%; font-size: 20px; font-weight: bold;background: #fff;"); 
    parentElem.insertBefore(buttonMinus, parentElem.lastChild);

    labelFont = document.createElement('div');
    labelFont.id="F";
    labelFont.innerHTML = 'ШРИФТ';
    labelFont.setAttribute("style","color:"+clr+"; position:absolute; z-index:9999; top:10px;left:1.7%; font-size: 16px; font-weight: bold;"); 
    parentElem.insertBefore(labelFont, parentElem.lastChild);

    buttonPlus = document.createElement('input');
    buttonPlus.type = 'button';
    buttonPlus.id = 'plus';
    buttonPlus.value = ' А+ ';
    buttonPlus.setAttribute("onclick","fontSize(this)");
    buttonPlus.setAttribute("style","position:absolute; z-index:9999;  width:5%; height:50; top:35px;left:5%; font-size: 20px; font-weight: bold;background: #fff;"); 
    parentElem.insertBefore(buttonPlus, parentElem.lastChild);
	
    buttonInMin = document.createElement('input');
    buttonInMin.type = 'button';
    buttonInMin.id = 'intervalMinus';
    buttonInMin.value = ' и- ';
    buttonInMin.setAttribute("onclick","intervalSize(this)");
    buttonInMin.setAttribute("style","position:absolute; z-index:9999;  width:5%; left:13%; height:50;  top:35px; font-size: 20px; font-weight: bold;background: #fff;"); 
    parentElem.insertBefore(buttonInMin, parentElem.lastChild);

    buttonInPlu = document.createElement('input');
    buttonInPlu.type = 'button';
    buttonInPlu.id = 'intervalPlus';
    buttonInPlu.value = ' И+ ';
    buttonInPlu.setAttribute("onclick","intervalSize(this)");
    buttonInPlu.setAttribute("style","position:absolute; z-index:9999;  width:5%; height:50; top:35px;left:18%; font-size: 20px; font-weight: bold;background: #fff;"); 
    parentElem.insertBefore(buttonInPlu, parentElem.lastChild);

    labelInt = document.createElement('div');
   	labelInt.id="I";
    labelInt.innerHTML = 'ИНТЕРВАЛ';
    labelInt.setAttribute("style","color:"+clr+";position:absolute; z-index:9999; top:10px;left:13.3%; font-size: 16px; font-weight: bold;"); 
    parentElem.insertBefore(labelInt, parentElem.lastChild);
	
    buttonBOW = document.createElement('input');
    buttonBOW.type = 'button';
    buttonBOW.id = 'blackONwhite';
    buttonBOW.value = ' Ц ';
    buttonBOW.setAttribute("onclick","setColorShem(this)");
    buttonBOW.setAttribute("style","position:absolute; z-index:9999;   width:5%; height:50; top:35px;left:26%; font-size: 20px; font-weight: bold; color:#000!important; background: #FFF!important; "); 
    parentElem.insertBefore(buttonBOW, parentElem.lastChild);
		
    buttonWOB = document.createElement('input');
    buttonWOB.type = 'button';
    buttonWOB.id = 'whiteONblack';
    buttonWOB.value = ' Ц ';
    buttonWOB.setAttribute("onclick","setColorShem(this)");
    buttonWOB.setAttribute("style","position:absolute; z-index:9999;   width:5%; height:50; top:35px;left:31%; font-size: 20px; font-weight: bold; color:#FFF!important; background: #000!important; "); 
    parentElem.insertBefore(buttonWOB, parentElem.lastChild);
	
    buttonYB = document.createElement('input');
    buttonYB.type = 'button';
    buttonYB.id = 'yellowONblue';
    buttonYB.value = ' Ц ';
    buttonYB.setAttribute("onclick","setColorShem(this)");
    buttonYB.setAttribute("style","position:absolute; z-index:9999;   width:5%;height:50; top:35px; left:36%; font-size: 20px; font-weight: bold; color:#FFFF00!important; background: #0000FF!important; "); 
    parentElem.insertBefore(buttonYB, parentElem.lastChild);

    labelCS = document.createElement('div');
    labelCS.id="C";
    labelCS.innerHTML = 'ЦВЕТ САЙТА';
    labelCS.setAttribute("style","color:"+clr+";position:absolute; z-index:9999; top:10px;left:27.9%; font-size: 16px; font-weight: bold;"); 
    parentElem.insertBefore(labelCS, parentElem.lastChild);

    buttonOff = document.createElement('input');
    buttonOff.type = 'button';
    buttonOff.id = 'imgOff';
    buttonOff.value = ' Выкл ';
    buttonOff.setAttribute("onclick","imgNone()");
    buttonOff.setAttribute("style","position:absolute; z-index:9999;  width:8%; height:50; top:35px;left:44%; font-size: 20px; font-weight: bold;background: #fff;"); 
    parentElem.insertBefore(buttonOff, parentElem.lastChild);

    buttonBlack = document.createElement('input');
    buttonBlack.type = 'button';
    buttonBlack.id = 'imgBlack';
    buttonBlack.value = ' Ч/Б ';
    buttonBlack.setAttribute("onclick","blackImg()");
    buttonBlack.setAttribute("style","position:absolute; z-index:9999; width:8%;height:50;  top:35px;left:52%; font-size: 20px; font-weight: bold;background: #fff; "); 
    parentElem.insertBefore(buttonBlack, parentElem.lastChild);
	
    buttonCol = document.createElement('input');
    buttonCol.type = 'button';
    buttonCol.id = 'imgOn';
    buttonCol.value = ' Цвет ';
    buttonCol.setAttribute("onclick","showImg()");
    buttonCol.setAttribute("style","position:absolute; z-index:9999; width:8%;height:50; top:35px;left:60%; font-size: 20px; font-weight: bold;background: #fff; "); 
    parentElem.insertBefore(buttonCol, parentElem.lastChild);

    labelPic = document.createElement('div');
    labelPic.id="P";
    labelPic.innerHTML = 'ИЗОБРАЖЕНИЯ';
    labelPic.setAttribute("style","color:"+clr+";position:absolute; z-index:9999; top:10px;left:49%; font-size: 16px; font-weight: bold;"); 
    parentElem.insertBefore(labelPic, parentElem.lastChild);
}


//включить изображения
function showImg()
{

	var allimg = document.getElementsByTagName("img");
	for(var i=0; i<allimg.length; i++) 
		allimg[i].setAttribute("style", "filter: none;");


}

//черно-белые изображения
function blackImg()
{

	var allimg = document.getElementsByTagName("img");	
	for(var i=0; i<allimg.length; i++) 
		allimg[i].setAttribute("style", "filter: grayscale(100%);");
	
}


//выключить изображения
function imgNone()
{
	var allimg = document.getElementsByTagName("img");
	for(var i=0; i<allimg.length; i++) 		
		allimg[i].style.display = "none";	
}


//цветовая схема
function setColorShem(obj)
{

	var allelem = document.getElementsByTagName("*");

	if(obj.id=="blackONwhite")
	{
		SetCookieSpec('background',"#fff");
		SetCookieSpec('color',"#000");
		SetCookieSpec('borderColor',"#999999");

		document.getElementsByClassName("show-btn")[0].style.borderColor="#999999";
  	        document.getElementsByClassName("send-message")[0].style.borderColor="#999999";
    	        document.getElementById("envelope").style.borderColor="#999999";

		   
		for(var i=0; i<allelem.length; i++) 	
		{
			if(allelem[i].id!="zvuk" && allelem[i].id!="minus" && allelem[i].id!="plus" &&
			allelem[i].id!="intervalMinus" && allelem[i].id!="intervalPlus" && allelem[i].id!="blackONwhite" &&
			allelem[i].id!="whiteONblack" && allelem[i].id!="yellowONblue" && allelem[i].id!="imgOff" &&
			allelem[i].id!="imgBlack" && allelem[i].id!="imgOn" && allelem[i].id!="spec" && allelem[i].id!="close")
			{
				allelem[i].style.background="#fff";
				allelem[i].style.color="#000";

				var WB=document.getElementById("whiteONblack");
				WB.style.background="#000";
				WB.style.color="#fff";

				var YB=document.getElementById("yellowONblue");
				YB.style.background="#0000FF";
				YB.style.color="#FFFF00"; 
			}
		}
	}   

	if(obj.id=="whiteONblack")
	{
		SetCookieSpec('background',"#000");
		SetCookieSpec('color',"#fff");
		SetCookieSpec('borderColor',"#fff");

		document.getElementsByClassName("show-btn")[0].style.borderColor="#fff";
  	    document.getElementsByClassName("send-message")[0].style.borderColor="#fff";
	    document.getElementById("envelope").style.borderColor="#fff";

		for(var i=0; i<allelem.length; i++) 
		{
			if(allelem[i].id!="zvuk" && allelem[i].id!="minus" && allelem[i].id!="plus" &&
			allelem[i].id!="intervalMinus" && allelem[i].id!="intervalPlus" && allelem[i].id!="blackONwhite" &&
			allelem[i].id!="whiteONblack" && allelem[i].id!="yellowONblue" && allelem[i].id!="imgOff" &&
			allelem[i].id!="imgBlack" && allelem[i].id!="imgOn" && allelem[i].id!="spec" && allelem[i].id!="close")
			{
				allelem[i].style.background="#000";
				allelem[i].style.color="#fff";

				var BW=document.getElementById("blackONwhite");
				BW.style.background="#fff";
				BW.style.color="#000";

				var YB=document.getElementById("yellowONblue");
				YB.style.background="#0000FF";
				YB.style.color="#FFFF00";
			}	
		}
	}
		
	if(obj.id=="yellowONblue")
	{
	   	SetCookieSpec('background',"#0000FF");
		SetCookieSpec('color',"#FFFF00");
		SetCookieSpec('borderColor',"#FFFF00");

		document.getElementsByClassName("show-btn")[0].style.borderColor="#FFFF00";
		document.getElementsByClassName("send-message")[0].style.borderColor="#FFFF00";
	    document.getElementById("envelope").style.borderColor="#FFFF00";

		for(var i=0; i<allelem.length; i++) 
		{
			if(allelem[i].id!="zvuk" && allelem[i].id!="minus" && allelem[i].id!="plus" &&
			allelem[i].id!="intervalMinus" && allelem[i].id!="intervalPlus" && allelem[i].id!="blackONwhite" &&
			allelem[i].id!="whiteONblack" && allelem[i].id!="yellowONblue" && allelem[i].id!="imgOff" &&
			allelem[i].id!="imgBlack" && allelem[i].id!="imgOn" && allelem[i].id!="spec" && allelem[i].id!="close")
			{
				allelem[i].style.background="#0000FF";
				allelem[i].style.color="#FFFF00";

				var BW=document.getElementById("blackONwhite");
				BW.style.background="#fff";
				BW.style.color="#000";

				var WB=document.getElementById("whiteONblack");
				WB.style.background="#000";
				WB.style.color="#fff";
			}	
		}
	}   
}

//межстрочный интервал
function intervalSize(obj)
{	
	var a = document.getElementsByTagName("*");
	
	if(obj.id=="intervalPlus")
		interval+=2;
	if(obj.id=="intervalMinus")
		interval-=2;
	for(var i=0; i<a.length; i++) 
	   if(a[i].id!='P' && a[i].id!='C' &&a[i].id!='I' &&a[i].id!='F' &&a[i].id!='Z' )
		a[i].style.lineHeight=interval+"px";
	
	SetCookieSpec('interval',interval);
	
}

//размер шрифта
function fontSize(obj){
	
	var a = document.getElementsByTagName("*");
	
	if(obj.id=="plus")
		 fontS+=2;
	else 
		 fontS-=2;
	for(var i=0; i<a.length; i++)
	  if(a[i].id!='P' && a[i].id!='C' &&a[i].id!='I' &&a[i].id!='F' &&a[i].id!='Z' )
		a[i].style.fontSize=fontS+"px";

	SetCookieSpec('fontSize',fontS);
}

function setButton(spec) 
{
	var inputTag = document.getElementById("spec");

	if (spec == 'y')
	{

	  	inputTag.setAttribute("style", "position:absolute; z-index:9999; left:71%;  width: 29%; height:50; top:35px; font-size:20px;  border: 1px black outset; font-weight:bold; background: #fff;");  
	  	inputTag.value=" Стандартная версия ";
	}
	else 
	{
	  	inputTag.setAttribute("style", "position:absolute; z-index:9999; left:96.1%;  width: 29%; height:50; top:5px; font-size:20px;  border:0px; font-weight:bold; background: url(eye/eye.png) no-repeat;background-size:12%;");
		inputTag.value="";
	}
}

