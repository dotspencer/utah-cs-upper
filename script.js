var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){
    var old = document.querySelector('.current')
    if(old) old.classList.remove('current');
    this.parentNode.classList.add('current');
  });
}
