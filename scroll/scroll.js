const buttonScroll = document.getElementById('scroll-button')

buttonScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
})