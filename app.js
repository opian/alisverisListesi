var urunler = document.getElementsByClassName('siparisAdi');
Array.from(urunler).forEach( function(element, index) {
	console.log(element.innerHTML);
});