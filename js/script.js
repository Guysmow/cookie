$(document).ready(function() {
  var nombreActuelDeCookies = 0;
  var nombreDeCookiesParSecondes = 0;
  var nombreDeCookiesParClic = 1;
  var coutAmélioration1 = 150;
  var nombreActuelAmélioration1 = 0;
  var nombreActuelAmélioration00 = 0;
  var coutAmélioration0 = 15;
  var coutAmélioration00 = 20;
  var coutAmélioration2 = 500;
  var nombreActuelAmélioration2 = 0;
  var coutAmélioration3 = 5000;
  var nombreActuelAmélioration3 = 0;
  var coutAmélioration4 = 20000;
   var nombreActuelAmélioration4 = 0;
   var coutAmélioration5 = 100000;
    var nombreActuelAmélioration5 = 0;
    var coutAmélioration6 = 500000;
  $('#actualScore').html(nombreActuelDeCookies)
  $('#coutAmélioration1').html(coutAmélioration1)
  $('#coutAmélioration2').html(coutAmélioration2)
  $('#coutAmélioration3').html(coutAmélioration3)
  $('#coutAmélioration4').html(coutAmélioration4)
  $('#coutAmélioration5').html(coutAmélioration5)
  $('#coutAmélioration6').html(coutAmélioration6)
  $('#coutAmélioration0').html(coutAmélioration0)
  $('#coutAmélioration00').html(coutAmélioration00)
  $('#nombreActuelAmélioration0').html(nombreDeCookiesParClic.toFixed(0))
  $('#nombreActuelAmélioration00').html(nombreActuelAmélioration00.toFixed(0))
  $('#nombreActuelAmélioration1').html(nombreActuelAmélioration1.toFixed(0))
  $('#nombreActuelAmélioration2').html(nombreActuelAmélioration2.toFixed(0))
  $('#nombreActuelAmélioration3').html(nombreActuelAmélioration3.toFixed(0))
  $('#nombreActuelAmélioration4').html(nombreActuelAmélioration4.toFixed(0))
  $('#nombreActuelAmélioration5').html(nombreActuelAmélioration5.toFixed(0))



function retour() {
  $('img').animate({
    width: "636px",
    height: "500px"

  }, 30)
}

$('#amélioration0').click(function(){
  if(nombreActuelDeCookies<coutAmélioration0) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration0.toFixed(0)
  nombreDeCookiesParClic *= 2;
  nombreActuelAmélioration0++;
  $('#nombreActuelAmélioration0').html(nombreDeCookiesParClic.toFixed(0))

  coutAmélioration0 *= 2.8;
  $('#coutAmélioration0').html(coutAmélioration0.toFixed(0))

})
$('#amélioration00').click(function(){
  if(nombreActuelDeCookies<coutAmélioration00) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration00.toFixed(0)
  nombreDeCookiesParSecondes += 1;
  nombreActuelAmélioration00++;
  $('#nombreActuelAmélioration00').html(nombreActuelAmélioration00.toFixed(0))

  coutAmélioration00 *= 1.4;
  $('#coutAmélioration00').html(coutAmélioration00.toFixed(0))

})
$('#amélioration1').click(function(){
  if(nombreActuelDeCookies<coutAmélioration1) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration1.toFixed(0)
  nombreDeCookiesParSecondes += 5;
  nombreActuelAmélioration1++;
  $('#nombreActuelAmélioration1').html(nombreActuelAmélioration1.toFixed(0))

  coutAmélioration1 *= 1.5
  $('#coutAmélioration1').html(coutAmélioration1.toFixed(0))

})
$('#amélioration2').click(function(){
  if(nombreActuelDeCookies<coutAmélioration2) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration2.toFixed(0)
  nombreDeCookiesParSecondes += 25;
  nombreActuelAmélioration2++;
  $('#nombreActuelAmélioration2').html(nombreActuelAmélioration2.toFixed(0))

  coutAmélioration2 *= 1.7
  $('#coutAmélioration2').html(coutAmélioration2.toFixed(0))

})
$('#amélioration3').click(function(){
  if(nombreActuelDeCookies<coutAmélioration3) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration3.toFixed(0)
  nombreDeCookiesParSecondes += 100;
  nombreActuelAmélioration3++;
  $('#nombreActuelAmélioration3').html(nombreActuelAmélioration3.toFixed(0))

  coutAmélioration3 *= 1.8
  $('#coutAmélioration3').html(coutAmélioration3.toFixed(0))

})
$('#amélioration4').click(function(){
  if(nombreActuelDeCookies<coutAmélioration4) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration4.toFixed(0)
  nombreDeCookiesParSecondes += 500;
  nombreActuelAmélioration4++;
  $('#nombreActuelAmélioration4').html(nombreActuelAmélioration4.toFixed(0))

  coutAmélioration4 *= 1.9
  $('#coutAmélioration4').html(coutAmélioration4.toFixed(0))

})
$('#amélioration5').click(function(){
  if(nombreActuelDeCookies<coutAmélioration5) return alert('Vous n\'avez pas assez de cookies')
  nombreActuelDeCookies -= coutAmélioration5.toFixed(0)
  nombreDeCookiesParSecondes += 3000;
  nombreActuelAmélioration5++;
  $('#nombreActuelAmélioration5').html(nombreActuelAmélioration5.toFixed(0))

  coutAmélioration5 *= 2
  $('#coutAmélioration5').html(coutAmélioration5.toFixed(0))

})
$('#amélioration6').click(function(){
  if(nombreActuelDeCookies<coutAmélioration6) return alert('Vous n\'avez pas assez de cookies')
window.open('victoire.html')
})
  $('img').click(function() {
    $('img').animate({
      width: "600px",
      height: "480px"
    }, 30)
    retour();
    nombreActuelDeCookies += nombreDeCookiesParClic;
    $('#actualScore').html(nombreActuelDeCookies.toFixed(0))

console.log(nombreDeCookiesParClic)
  retour();
  $('#actualScore').html(nombreActuelDeCookies.toFixed(0))
})
  setInterval(function(){
  nombreActuelDeCookies += nombreDeCookiesParSecondes
    $('#actualScore').html(nombreActuelDeCookies)

  }, 1000)
})
