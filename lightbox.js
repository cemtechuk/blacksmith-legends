// Opens a screenshot over the page instead of leaving it. Any link to a picture in shots/
// opens here; tap anywhere or press Esc to close. Pictures in the same gallery get
// previous/next arrows (and the arrow keys). Without this script the links still work,
// they just open the picture on its own.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('a[href^="shots/"]'));
  if (!links.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.innerHTML =
    '<img alt="">' +
    '<button class="lb-prev" aria-label="Previous picture">&#8249;</button>' +
    '<button class="lb-next" aria-label="Next picture">&#8250;</button>' +
    '<button class="lb-close" aria-label="Close">&#215;</button>';
  document.body.appendChild(box);

  var img = box.querySelector('img');
  var prev = box.querySelector('.lb-prev');
  var next = box.querySelector('.lb-next');
  var group = [];
  var index = 0;

  function show(i) {
    index = i;
    var link = group[i];
    img.src = link.getAttribute('href');
    img.alt = link.querySelector('img') ? link.querySelector('img').alt : '';
    prev.hidden = next.hidden = group.length < 2;
  }

  function open(link) {
    var gallery = link.closest('.gallery');
    group = gallery ? Array.prototype.slice.call(gallery.querySelectorAll('a[href^="shots/"]')) : [link];
    show(group.indexOf(link));
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
  }

  function step(by) {
    show((index + by + group.length) % group.length);
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      open(link);
    });
  });

  prev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  next.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  box.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft' && group.length > 1) step(-1);
    else if (e.key === 'ArrowRight' && group.length > 1) step(1);
  });
})();
