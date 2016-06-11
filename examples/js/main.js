$(document).ready(function(){
	$('.tcg-elevator').tcgElevator();
	$('.elevator').tcgElevator({
		toggleSelector: '.panel-heading',
		contentSelector: '.panel-body',
		speed: 500,
		openingSpeed: 500,
		closingSpeed: 1000,
		openClass: 'open',
		openingClass: 'opening',
		closingClass: 'closing'
	});
})
