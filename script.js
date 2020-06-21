$(document).ready(function() {

// calcul de la position des éléments 
var largeurMenu = document.getElementById("menuPanel").offsetWidth + 'px';
console.log(largeurMenu);
document.getElementById("page").style.setProperty("left", largeurMenu);


menu = document.getElementById("menu").getElementsByTagName('div');
categorie = []
for (var i = menu.length - 1; i >= 0; i--) {
	categorie.push(menu[i].id);
}

for (var i = categorie.length - 1; i >= 0; i--) {
	identifiant = '#' + categorie[i]
	$(identifiant).click( function() {
	classe = $(this).attr('id');
	articles = document.getElementsByClassName('tuile');
	for (i = 0; i<articles.length; i++) {
		if ( hasClassName(articles[i], classe) ) {
			articles[i].style.setProperty("display",'flex');
		} else {
			articles[i].style.setProperty("display",'none');
		};
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
