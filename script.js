/*|Header Scroll Button|*/
var botaoHome = document.getElementById('botaoHome');
var heroi = document.getElementById('heroi')

botaoHome.addEventListener('click', function() {
  setTimeout(function() {
    heroi.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});


var botaosobre = document.getElementById('botaoSobre');
var secaosobre = document.getElementById('sobre')

botaosobre.addEventListener('click', function() {
  setTimeout(function() {
    secaosobre.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});


var botaoContato = document.getElementById('botaoContato');
var contato = document.getElementById('contato')

botaoContato.addEventListener('click', function() {
  setTimeout(function() {
    contato.scrollIntoView({ behavior: 'smooth' }); 
  }, 100);
});
/*--|Header Scroll Button|--*/

/*--|Mobile Menu|--*/
function toggleMenu() {
  var menuList = document.getElementById('lsm');
  if (menuList.style.display === 'none' || menuList.style.display === '') {
      menuList.style.display = 'flex';
  } else {
      menuList.style.display = 'none';
  }
}

function toggleoffMenu() {
  var menuList = document.getElementById('lsm');
  var close = document.getElementById('cmn');
  if (menuList.style.display === 'none' || menuList.style.display === '') {
      menuList.style.display = 'flex';
  } else {
      menuList.style.display = 'none';
  }
}

// Adicione este código para garantir que o menu não seja exibido ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  var menuList = document.getElementById('lsm');
  menuList.style.display = 'none'; // Inicialmente esconde o menu ao carregar a página
});
/*--|Mobile Menu|--*/