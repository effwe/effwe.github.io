

window.addEventListener('scroll', () => {
    const Y = window.scrollY;
    const innerText = document.querySelector('.innerText');
    const Text = document.querySelector('.Text');
    const anc = document.querySelector('.anc');

    innerText.style.left = -Y / 5 + '%';
    Text.style.left = -Y / 5 + '%';

    anc.style.top = 15 + -Y/10 + '%';
    innerText.style.top = 15 + -Y / 10 + '%';
    Text.style.top = 15 + -Y / 10 + '%';

  });

