
var toggleIcon =  querySelector("#navToggle");

var sidebarToggle =  querySelector("#sidebarToggle");

var navBox = querySelector(".header-nav");

var sidebar = querySelector("#sidebar");

var leftSidebar = querySelector(".sidebar-left-content > ul");

var	prodLeftNav = querySelector("#prdLeft");

var	prodRightNav = querySelector("#prdRight");

var	current = querySelector("#current");

var iconLeft = querySelector("#iconLeft");

var iconRight = querySelector("#iconRight");

var indicatorBtn = querySelectorAll(".indicator span");

var	bannerToggle = querySelector("#bannerToggle");

var homeOverlay = querySelector(".home-overlay");

var overlayIcon = querySelector(".overlay-icon");

var	 aboutToggle = querySelectorAll(".main-content1-table-list");

var tableRows = querySelectorAll(".boost-contents-table");

var smToggle = querySelector(".sm-toggle");

var	chatSuggestion = querySelector(".product-details-suggestion");

var closeChat = querySelector("#closeChat");

var chatbox = querySelector("#chatbox");

var startChat = querySelector("#startChat")


closeChat?.addEventListener("click", function(e) {
	e.target.closest(".product-details-chat").classList.add("d-none");
	startChat.classList.remove("disabled")
})



chatbox?.addEventListener("input", function(e) {

	if (this.value.length >= 10) {
		console.log( true )
		startChat.classList.remove("disabled")
	} else{
		startChat.classList.add("disabled")
	}
})

chatbox?.addEventListener("blur", function() {

		if (chatbox.value.length > 0) {

			this.nextElementSibling.style.top ="-20%"
		} else{

				this.nextElementSibling.style.top =""
		}
})




startChat?.addEventListener("click", function(e) {
	
	e.target.previousElementSibling.classList.remove("d-none");

	if ( !this.classList.contains("disabled") && chatbox.value.length < 10) {

		this.classList.add("disabled")


	}
})
chatSuggestion?.addEventListener('click', function(e){

	if (e.target.tagName == "SPAN") {
		console.log( e.target.dataset.value)
		chatbox.value = e.target.dataset.value
		chatbox.focus()
	}
})



smToggle?.addEventListener( "click", function(e) {
	if (e.target.tagName == "SPAN") {
		var toggleId =  e.target.dataset.id;

		Array.from( smToggle.children ).forEach(child  => child.classList.remove("toggleactive"))
		e.target.classList.add("toggleactive");

		tableRows.forEach( (rows, ind) => ind > 0 && rows.classList.add("dnone-sm"))
		tableRows[toggleId].classList.remove("dnone-sm") 

	}
})




tableRows.forEach( (rows, ind) => {

	var search = "boost-contents-table-normal";
	var search1 = "boost-contents-table-normal-sub";
	var index,parentElementIndex, childElementIndex;

	/*Rows Selection Border*/
	if (ind > 1 ) {

		rows.addEventListener('click', function() {
			tableRows.forEach(data => data.classList.remove("selected") )
			rows.classList.add("selected")

			var price = rows.querySelector(".price").innerHTML.trim()

			querySelector(".main-price").innerHTML = price;
		})
	}


	rows.addEventListener("mouseover", function(e) {

		if( e.target.classList.contains(search) || e.target.closest(`.${search}`)){

			var currentRowChildren = Array.from(rows.children);
			  index = currentRowChildren.findIndex(data => data == e.target || data == e.target.closest(`.${search}`) ) 
			
			 performHover(index);

		} else if(e.target.classList.contains(search1) || e.target.closest(`.${search1}`) ) {

			var currentRowChildren1 = Array.from(rows.children);

			var parentElement = currentRowChildren1.find( data => Array.from(data.children).includes(e.target) || Array.from(data.children).includes(e.target.closest(`.${search1}`)) )

			parentElementIndex = currentRowChildren1.findIndex(data => data == parentElement)

			childElementIndex = Array.from(parentElement.children).findIndex( childElement => childElement == e.target || e.target.parentElement == childElement );

			performHover( null, parentElementIndex, childElementIndex)
		}
	})
	

	rows.addEventListener('mouseout', function() {
		index && tableRows.forEach( row =>  row.children[index].classList.remove("bg-blur") )
		 parentElementIndex && tableRows.forEach( row =>{
 			var hoverElement = row.children[parentElementIndex]
 			.children[childElementIndex];

 			hoverElement.classList.remove("bg-blur2")
 		})
	})


	rows.addEventListener('click', function (e) {
			
		if( e.target.classList.contains("droptoggle") || e.target.closest(".droptoggle") ){
			var clickIndex = Array.from(rows.children).findIndex( childElement => childElement == e.target || e.target.closest(".droptoggle") == childElement )
			performClick( clickIndex )
		}

	})
})




function performClick(clickIndex) {
	
	tableRows.forEach( rows => {
	
		rows.children[clickIndex].nextElementSibling.classList.toggle("d-none")

		var clickedText = rows.children[clickIndex].firstElementChild.innerText.toLowerCase();

		rows.children[clickIndex].firstElementChild.innerHTML = "see full list" == clickedText ? "hide full list" 
		: clickedText == "hide full list" ? "see full list" : clickedText

	})
}




function performHover(index, parentElementIndex, childElementIndex ) {
 	
 	index && tableRows.forEach( row =>  row.children[index].classList.add("bg-blur") )

 	parentElementIndex && tableRows.forEach( row =>{
 			var hoverElement = row.children[parentElementIndex]
 			.children[childElementIndex];

 			hoverElement.classList.add("bg-blur2")
 	})
}





aboutToggle.forEach( data => {
	data.addEventListener('click', function() {
		var scrollTo = +this.dataset.scrollTo;
		var elements = querySelectorAll(".main-content1-list");

		var scrollPosition = elements[scrollTo + 1].getBoundingClientRect().top

		console.log( scrollPosition )

		window.scrollTo(0, scrollPosition)
		
	})
})


overlayIcon?.addEventListener('click', function() {

		homeOverlay.classList.add("home-overlay-hidden");
		document.body.style.overflowY ="auto"
})



bannerToggle?.addEventListener('click', function () {
	
	homeOverlay.classList.remove("home-overlay-hidden");
	/*homeOverlay.classList.add("home-overlay-display");*/
	document.body.style.overflowY ="hidden"

});


homeOverlay?.addEventListener('click', function(e) {
	
	if ( e.target.className == "home-overlay" ) {
		
		this.classList.add("home-overlay-hidden");
		document.body.style.overflowY ="auto"		
	}


})


indicatorBtn[0]?.addEventListener("click",function(){
		moveLeft();

		indicatorBtn[1].classList.remove("indicator-active");
		this.classList.add("indicator-active");
})


indicatorBtn[1]?.addEventListener("click",function(){
		moveRight();

		indicatorBtn[0].classList.remove("indicator-active");
		this.classList.add("indicator-active");
})




iconLeft?.addEventListener('click', moveLeft)


function moveLeft() {

			var indicatorBtn = querySelectorAll(".indicator span");

			var sliderImage = querySelectorAll(".sidebar-right-about-slider-img");

			sliderImage[0].classList.add("slider-active");
			sliderImage[0].classList.remove("slider-prev");

			sliderImage[1].classList.remove("slider-active")
			sliderImage[1].classList.add("slider-next")
			querySelectorAll(".indicator span")[0].classList.add("active");
			querySelectorAll(".indicator span")[1].classList.remove("active");
			Array.from(indicatorBtn).map( data => data.classList.remove("indicator-active") )


}


function moveRight() {

			var indicatorBtn = querySelectorAll(".indicator span");
			var sliderImage = querySelectorAll(".sidebar-right-about-slider-img");

			sliderImage[0].classList.add("slider-prev");
			sliderImage[0].classList.remove("slider-active");

			sliderImage[1].classList.remove("slider-next")
			sliderImage[1].classList.add("slider-active")

			querySelectorAll(".indicator span")[0].classList.remove("active");
			querySelectorAll(".indicator span")[1].classList.add("active");
			Array.from(indicatorBtn).map( data => data.classList.remove("indicator-active") )
}



iconRight?.addEventListener('click',moveRight)

	
function querySelector(searchValue) {
	
	return document.querySelector(searchValue)
}


function querySelectorAll(searchValue) {
	
	return document.querySelectorAll(searchValue)
}

toggleIcon?.addEventListener('click', function () {
		
	navBox.style.maxHeight = navBox.style.maxHeight ? "" : navBox.scrollHeight + "px"
})


sidebarToggle?.addEventListener('click', function () {
	sidebar.classList.toggle("main-content-multiple-sidebar-open")
})




prodLeftNav?.addEventListener("click", function(){

	console.log( true )
})




function getIndex(data, dataClass) {
	return Array.from(data).findIndex(data => data.classList.contains(dataClass))
}



 var start = 1;

 var current = 0;

 var moving = querySelector(".product-full-details-inner");

 var total = querySelectorAll(".product-full-details-img").length;

 var length = querySelector(".product-full-details-img")?.offsetWidth;





prodLeftNav?.addEventListener("click", () => {
	current +=  length;

	 moving.style.left =  current + "px"

	 start--;
	
	if (start == 0) { 	

	 	start = querySelectorAll(".product-full-details-img").length ;
			 	
		current = -length  * (start - 1);

	 	moving.style.left = -length  * (start - 1)  + "px";

 	} 

 	querySelector("#current").innerHTML = start ;
})


prodRightNav?.addEventListener("click",	() =>{
	current  += -length;

 moving.style.left =  current + "px"

 start++;

 if (start > total) { 	

 	start = 1;
 	
 	current = 0;

 	moving.style.left = "";

 }

  querySelector("#current").innerHTML = start ;
})




var prevIndex = 1;

var productOverlay = querySelector(".products-slider-overlay");

var productOverlayImg = productOverlay.querySelector("img");

querySelector(".product-full-details-list")?.addEventListener("click", function(e){


	if( !e.target.closest(".show-image-click") ) return

	var elements = Array.from( querySelector(".product-full-details-list").children );

	
	var findIndex = elements.findIndex( element => element ==  e.target.closest(".show-image-click")) + 1;

	if(findIndex == 5){
	
		 productOverlay.classList.remove("slider-overlay-close") 
		 document.body.style.overflowY = "hidden";
	} 



	var imageSrc = getImageSrc(elements, 0);

	productOverlayImg.src = imageSrc;

	start = findIndex;

	current = -length * (findIndex - 1);

	moving.style.left =  current + "px";

	querySelector("#current").innerHTML = start ;
	
})

function getImageSrc(elements, ind) {
	return elements[ind].querySelector("img").src
}



var overlayImgCount = 0



querySelector("#overlayLeft")?.addEventListener("click", function() {

		console.log( overlayImgCount )

		var elements = Array.from( querySelector(".product-full-details-list").children );

		--overlayImgCount;

		overlayImgCount =  overlayImgCount < 0  ? elements.length - 1 : overlayImgCount

		var imageSrc = getImageSrc(elements, overlayImgCount);

		productOverlayImg.src = imageSrc;

})


querySelector("#overlayClose").addEventListener("click", ()=> {

		productOverlay.classList.add("slider-overlay-close");
		document.body.style.overflowY = "";
})


querySelector("#overlayRight")?.addEventListener("click", function() {

	var elements = Array.from( querySelector(".product-full-details-list").children );

	overlayImgCount++;

	overlayImgCount =  overlayImgCount >= elements.length ? 0 : overlayImgCount

	var imageSrc = getImageSrc(elements, overlayImgCount);

	productOverlayImg.src = imageSrc;


})



