// Fonction pour ajuster la largeur des cartes et les marges
// Cette fonction ajuste dynamiquement la largeur des cartes et les marges en fonction de la taille de la fenêtre.
function adjustMarginAndCardWidth() {
  var windowWidth = $(window).width();

  // Utilise 80% de la largeur de la fenêtre pour les petites tailles d'écran,
  // mais limite la largeur des cartes à un maximum de 800px pour les grands écrans.
  var cardWidth = Math.min(windowWidth * 1.2, 1200);

  // Applique la nouvelle largeur des cartes
  $('.testimonial').width(cardWidth);

  // Centre les cartes en ajustant les marges gauche et droite de la liste slick
  var newMargin = (windowWidth - cardWidth) / 2;
  $('.slick-list').css('margin-left', newMargin);
  $('.slick-list').css('margin-right', newMargin);
}

// Appelle la fonction au chargement du document
$(document).ready(function () {
  $('.regular').slick({
    dots: true, // Affiche les points de navigation
    infinite: true, // Permet une navigation infinie
    slidesToShow: 1, // Affiche une diapositive à la fois
    slidesToScroll: 1, // Fait défiler une diapositive à la fois
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 4000, // Définit la vitesse du défilement automatique (en millisecondes)
    speed: 2000, // Durée de la transition entre les diapositives (en millisecondes)
    centerMode: true, // Centre la diapositive active
    centerPadding: '35px', // Ajoute un espacement autour de la diapositive active
  });

  // Désactive le carrousel au survol de la souris
  $('.carousel-container').on('mouseenter', function () {
    $('.regular').slick('slickPause');
  });

  // Réactive le carrousel lorsque la souris quitte la zone
  $('.carousel-container').on('mouseleave', function () {
    $('.regular').slick('slickPlay');
  });

  // Applique l'ajustement des marges et de la largeur des cartes
  adjustMarginAndCardWidth();
});

// Appelle la fonction à chaque redimensionnement de la fenêtre
$(window).on('resize', adjustMarginAndCardWidth);