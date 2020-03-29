const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // var old = document.querySelector('.current')
    // if(old) old.classList.remove('current');
    // this.parentNode.classList.add('current');
    const options = [
      'location=1',
      'status=1',
      'scrollbars=1',
      'width=600',
      'height=600',
      'top=0',
      'left=850',
    ];
    window.open(link.href, 'small', options.join(','));
  });
}
