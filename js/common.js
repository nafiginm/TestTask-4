                           // Активный пункт меню

var elems = document.getElementsByTagName('li');
for(var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', bgMenu);
}
function bgMenu() {
	for(var j = 0; j < elems.length; j++) {
		elems[j].style.background = '';
	}
	this.style.background = '#2A2D37';
}

var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', colorMenu);
}
function colorMenu() {
	for(var j = 0; j < links.length; j++) {
		links[j].style.color = '';
	}
	this.style.color = '#808592';
}

// ---------------------------------------
 //                   Всплывающее окно

var popUp  = document.querySelector('#click'),
    clean = document.querySelector('#exit');
popUp.onclick = function() {
	document.querySelector('#pop-up').style.display = 'block';
}

clean.onclick = function() {
	document.querySelector('#pop-up').style.display = 'none';
}
// Убираем фон при клике у последнего пункта меню
var  cleanLi = document.querySelector('#exit-li');
cleanLi.onclick = function() {
	document.querySelector('#exit-li').style.background = '#191C24';
}
// -------------------------------------------------------------

//                      Валидация формы

// Номер карты
var Num  = document.querySelector('#first-num'),
    secondNum = document.querySelector('#second-num'),
    thirdNum  = document.querySelector('#third-num'),
    fourthNum = document.querySelector('#fourth-num'),
      events  = ['input', 'change', 'blur', 'keyup'];
for (var i in events) {
    Num.addEventListener(events[i], formatCardCode);
    secondNum.addEventListener(events[i], formatCardCode);
    thirdNum.addEventListener(events[i], formatCardCode);
    fourthNum.addEventListener(events[i], formatCardCode);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,4);
    this.value = cardCode;
}
// -------------------------------------------------------------
// Держатель карты
var userName  = document.querySelector('#user-name'),
    	events  = ['input', 'change', 'blur', 'keyup'];
for (var i in events) {
    userName.addEventListener(events[i], formatCardHolder);
}
function formatCardHolder() {
	var cardHolder = this.value.replace(/[^\A-Z]/g, '');
    this.value = cardHolder;
}
// -------------------------------------------------------------
// Код CVV2 / CVC2
var cvv  = document.querySelector('#cvv'),
    	events  = ['input', 'change', 'blur', 'keyup'];
for (var i in events) {
    cvv.addEventListener(events[i], formatCode);
}
function formatCode() {
    var code = this.value.replace(/[^\d]/g, '').substring(0,3);
    this.value = code;
}
// -------------------------------------------------------------    
