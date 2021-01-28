const infoBlock = document.querySelectorAll('.info__block');

const deleteActiveClass = () => {
  infoBlock.forEach(item => item.classList.remove('info__block--active'));
}

infoBlock.forEach((btn, index) => btn.addEventListener('click', () => {
  if(btn.classList.contains('info__block--active')) {
    deleteActiveClass();
  } else {
    deleteActiveClass();
    btn.classList.add('info__block--active');
  }
}))