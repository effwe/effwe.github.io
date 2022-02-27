

window.addEventListener('scroll', () => {
    const Y = window.scrollY;
    const innerText = document.querySelector('.innerText');
    const Text = document.querySelector('.Text');

    innerText.style.left = 100 - Y / 5 + '%';
    Text.style.left = 100 - Y / 5 + '%';
  });

