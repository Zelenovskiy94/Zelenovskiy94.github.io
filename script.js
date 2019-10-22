'use strict'


function hideShowMenu(argument) {
	let headerNav = document.getElementById('headerNav');
	let menu = document.getElementById('menu');
	let nav = headerNav.querySelector('ul');
	var i = 0;
	document.addEventListener('click', function(event){
		if(event.target == headerNav && i===0 ) {
			nav.style.maxHeight = '550px';
			i = 1
		} else if(i===1 && !headerNav.contains(event.target) || event.target == headerNav){
			nav.style.maxHeight = '0';
			i = 0
		}

	})
}
hideShowMenu()

$('.slider').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
	asNavFor: '.review',
});

$('.review').slick({
	arrows: true,
	appendArrows: $('.nav-review'),
	asNavFor: '.slider',
});

function popup() {
	var modal = document.getElementById('modal');
	var ourWorks = document.getElementById('ourWorks');
	var works = ourWorks.getElementsByTagName('div');
	var close = document.getElementById('close')
	for(var i = 0; i < works.length; i++) {
		function pop(elem) {
			return function(event) {
				if(event.target == elem) {
					var style = window.getComputedStyle(elem).getPropertyValue('background-image');
					var url = style.slice(31, -2)
					var urlNet = style.slice(5, -2)
					var img = document.createElement('img');
					img.setAttribute('src', url) || img.setAttribute('src', urlNet);
					img.classList.add('modal-content')
					modal.appendChild(img);
					setTimeout(function(){img.style.width = img.naturalWidth + 'px' }, 150)
					modal.style.display = 'block';
				}
				if(event.target == modal || event.target == close) {
					var img = modal.getElementsByTagName('img')
					img[0].style.width = '0';
					setTimeout(function(){
						if(img.length !== 0){
						modal.removeChild(img[0])
						} 
						modal.style.display = 'none';
					}, 500)	
				}	



		}
	}
		document.addEventListener('click', pop(works[i]) )
	}	

}
popup()


function createStars (elemReview) {
	var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
	svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    var points = document.createElementNS("http://www.w3.org/2000/svg",'polygon');
    points.setAttribute('points', "10,0 14,6 20,6 16,12 18,20 10,16 2,20 4,12 0,6 6,6 10,0");
    points.setAttribute('fill', '#f2da3b');
    svg.appendChild(points)
    elemReview.appendChild(svg)
    
}
var aa = document.getElementsByClassName('elemReview');
for(var j = 0; j < aa.length; j++) {
for(var i =0 ;i<5;i++) {
	createStars (aa[j])
}	
}


function scrollTo(from, to) {
let a = document.getElementById(to);
let b = document.getElementById(from);
return function(event){
	if(b.contains(event.target)){
	a.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
	}
	}
}

document.addEventListener('click', scrollTo('btnToContacts', 'contactUs'),false)
document.addEventListener('click', scrollTo('toAboutUs', 'aboutUs'),false)
document.addEventListener('click', scrollTo('toOurWorks', 'ourWorks'),false)
document.addEventListener('click', scrollTo('toOurServices', 'ourServices'),false)
document.addEventListener('click', scrollTo('toOurTeam', 'ourTeam'),false)
document.addEventListener('click', scrollTo('toRewiews', 'rewiews'),false)
document.addEventListener('click', scrollTo('toSponsors', 'sponsors'),false)
document.addEventListener('click', scrollTo('toContacts', 'contactUs'),false)
document.addEventListener('click', scrollTo('toFollowUs', 'followUs'),false)