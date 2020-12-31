console.log("User Activity")
//Mobile menu
const mobileMenu=document.getElementById('menuButton');
const menuNone=document.querySelector('.container');


mobileMenu.addEventListener('click',()=>{
	menuNone.classList.toggle("change");
	console.log("Mobile menu Click");
});


//Intro  typewriting effect
const texts= ["I'm Thiha." ,"I'm from Myanmar.", "I love coding.","I love design."];
console.table(texts);
let count= 0;
let index= 0;
let currentText = '';
let letter= '';
 
//Run immediately
(function type(){
    //count(တန်ဖိုး)ကtexts.length(တန်ဖိုး)နဲ့ညီ ရင်countရဲ့တန်းဖိုးက  0 ဖြစ်  
	if(count === texts.length){
		count= 0;
	}
	//The currentText get the texts array
	currentText = texts[count];
	letter=currentText.slice(0,++index);
	

	document.querySelector('.typing').textContent= letter;
	if(letter.length === currentText.length){
		count++;
		index=0;
	}
	setTimeout(type, 150);

}());

//Skillbars
window.onscroll=()=>{move()};

var i = 0;
 move=()=> {
	//If user scroll horizontally greater than 50px start this function
	if(document.body.scrollTop > 50 && document.body.scrollTop < 90 ){
		if (i == 0) {
			i=1;
			var html,css,js;
			 html = document.getElementById("html");
			 css = document.getElementById("css");
			 js = document.getElementById("js");
			 var per1,per2,per3;
			 per1=0;
			 per2=0;
			 per3=0;

    var id = setInterval(frame, 50);
    function frame() {
      if (per1 >= 60) {
		clearInterval(id);
		i=0;
	  }else {
		per1++;
		html.style.width = per1 + "%";
		html.innerHTML = per1  + "%";
      }
	}
	
	var id2 = setInterval(frame2, 70);
	 function frame2(){
		 if(per2 >= 30){
			 clearInterval(id2);
			 i=0;
		 }else{
			 per2++;
			 css.style.width= per2 + "%"
			 css.innerHTML = per2 + "%";
			}
	 }

	 var id3 = setInterval(frame3, 100);
	 function frame3(){
		 if(per3 >= 20){
			 clearInterval(id3);
			 i=0;
		 }else{
			 per3++;
			 js.style.width= per3 + "%"
			 js.innerHTML = per3 + "%";
			}
	 }

}
}
}

//Contact form valdiation
//If the user enter invalid in contact form
var sendBtn = document.getElementById('send');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

sendBtn.addEventListener('click',function(e){
	
	if(email.value.match(pattern) && subject.value.length > 2 && message.value.length > 10)
	{
		console.log("Running");
	
	}else{
		e.preventDefault();
		console.log("Not run!")
	}

});

email.addEventListener('keyup', function(){
	if(!email.value.match(pattern))
	{
		document.getElementById('email-hint').textContent = "Invalid email address";
	}else{
		document.getElementById('email-hint').textContent = "";
	}
});

subject.addEventListener('keyup', function(){
	if(subject.value.length > 2){
		document.getElementById('subject-hint').textContent = "";
	}else{
		document.getElementById('subject-hint').textContent = "Please type at least 2 words";
		

	}
});

message.addEventListener('keyup', function(){
	if(message.value.length > 10){
		document.getElementById('message-hint').textContent = "";
		
	}else{
		
		document.getElementById('message-hint').textContent = "Please type at least 10 words";

	}
});

