let myHeading = document.querySelector('h1');
myHeading.textContent = 'hi!';
/*
document.querySelector('html').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});*/


let myImage=document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if (mySrc==='images/firefox-icon.png'){
		myImage.setAttribute('src','images/firefox-icon2.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}
	
