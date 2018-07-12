// JavaScript Docum
//hiệu ứng menu
var Number = 1;
function CreateEffect(){
	if(window.location == 'file:///C:/Users/HDN/Desktop/CyberSoft-master/layout/layout2/New%20folder/index.html')
	{
		
	}
}
var ImageTT = 0;
var ImageEnd = 4;
function sliderButton (){
	ImageTT++;
	document.getElementById("sliderImage").style.background = "#fff url(../images/" + ImageTT + ".jpg) no-repeat center";
	document.getElementById("sliderImage").style.backgroundSize = 'cover';
	if(ImageTT >= ImageEnd){
		ImageTT = 1;
	}
}
var current = 1;
var num_image = 4;
function TimeImage(){
	current++;
     document.getElementById("sliderImage").style.background = "#fff url(../images/" + current + ".jpg) no-repeat center";
	document.getElementById("sliderImage").style.backgroundSize = 'cover';
     if(current < num_image){
       setTimeout("TimeImage()", 3000);
     }else if(current == num_image){
       current = 1;
       setTimeout("TimeImage()", 3000);
     }
}

function ExitAds(){
	document.getElementById("ADS").style.height = '0';
	document.getElementById("videoADS").pause();
}

function PlayAds(){
	document.getElementById("ADS").style.height = '240px';
	document.getElementById("videoADS").play();
}
function ExitAdsCode(){
	document.getElementById("bannerAdsCode").style.height = '0';
	document.getElementById("bannerAdsCode").style.opacity = '0';
}

