const initUpdateNavbarOnScroll = () => {
  const title = document.querySelector('.title');
  if (title) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        title.classList.add('title-big');
      } else {
        title.classList.remove('title-big');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
