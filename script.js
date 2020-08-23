$(document).ready(function() {

menu = document.getElementById("menu").getElementsByTagName('div');
categorie = []
for (var i = menu.length - 1; i >= 0; i--) {
	categorie.push(menu[i].id);
	nbre = document.getElementsByClassName(menu[i].id).length;
	console.log(document.getElementById(menu[i].id).getElementsByTagName('span')[0]);
	document.getElementById(menu[i].id).getElementsByTagName('span')[0].innerHTML = nbre;
}



for (var i = categorie.length - 1; i >= 0; i--) {
	identifiant = '#' + categorie[i]
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

});
