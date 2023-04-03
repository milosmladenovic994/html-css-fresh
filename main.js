const expand = document.querySelector('.expand');
const mainlist = document.querySelector('.mainlist');
const expanded = document.querySelector('.expanded');
const tablediv = document.querySelector('.tablediv');
const contents = document.querySelectorAll('.content');

expand.addEventListener('click', function () {
  expanded.style.display == 'flex'
    ? (expanded.style.display = 'none')
    : (expanded.style.display = 'flex');
  if (expanded.style.display == 'flex') {
    mainlist.style.width = 'calc(100% - 55px)';
    contents.forEach((content) => {
      content.style.width = 'calc(500px - 5px)';
      content.style.transition = '0.2s';
    });
  } else {
    mainlist.style.width = '100%';
    contents.forEach((content) => {
      content.style.width = '548px';
    });
  }
  expand.classList.toggle('close');
  expand.classList.toggle('expand');
});
