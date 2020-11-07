$(document).ready(function() {

menu = document.getElementById("menu").getElementsByTagName('div');
categorie = []
for (var i = menu.length - 1; i >= 0; i--) {
	categorie.push(menu[i].id);
	if (menu[i].id == 'ALL') {
		nbre = document.getElementsByClassName('source').length;
	} else {
		nbre = document.getElementsByClassName(menu[i].id).length;
		console.log(document.getElementById(menu[i].id).getElementsByTagName('span')[0]);
	};
	document.getElementById(menu[i].id).getElementsByTagName('span')[0].innerHTML = nbre;
}

for (var i = categorie.length-1; i >=0; i--) {
	identifiant = '#' + categorie[i];
	$(identifiant).click( function() {
		classe = $(this).attr('id');
		liste = document.getElementById("liste").getElementsByTagName('a');
		articles = document.getElementsByClassName(classe);
		for (i = 0; i<liste.length; i++) {
			liste[i].style.setProperty("display",'none');
	 	};
	 	for (i = 0; i<articles.length; i++) {
	 		articles[i].style.setProperty("display",'flex');
	 	};
	});
}

function hasClassName(elmt, className)
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   var regex = new RegExp("\\b" + className + "\\b");
   return regex.test(elmt.className);
}

$("#boutonMenu").click( function() {
	var classe = $(this)[0].getElementsByTagName('i')[0].classList;
	if( classe == "fas fa-bars" ){
		classe.remove("fa-bars");
		classe.add("fa-times");
		document.getElementById('menuPanel').style.setProperty("display",'flex');
	}
	else {
		classe.remove("fa-times");
		classe.add("fa-bars");
		document.getElementById('menuPanel').style.setProperty("display",'none');
	}
	
});

});
