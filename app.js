//Silme Event Bubling

var liste = document.querySelector('.alisverisListesi');
liste.addEventListener('click',function(e){
	if(e.target.className = 'silButon'){
		liste.removeChild(e.target.parentElement);
	}
});

/* silme 
var silButon = document.querySelectorAll('.silButon');
Array.from(silButon).forEach( function(element, index) {
	element.addEventListener('click',function(e){
		//console.log(e.target.parentElement);
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
	})
});

*/

//Ekleme
var ekle = document.querySelector('#ekle');
//console.log('ekle: ' + ekle);
var eklenecekUrun = document.querySelector('#urunEkleme');
var lst = document.querySelector('.alisverisListesi');

ekle.addEventListener('click', function(e){
	var li  = document.createElement('li');
	var sAdi = document.createElement('span');
	sAdi.classList.add('siparisAdi');
	sAdi.innerHTML = eklenecekUrun.value;
	var sBtn = document.createElement('span');
	sBtn.classList.add('silButon');
	sBtn.innerHTML = 'Sil';
	li.appendChild(sAdi);
	li.appendChild(sBtn);
	lst.appendChild(li);
	eklenecekUrun.value = '';
})


