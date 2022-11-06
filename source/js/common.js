AOS.init();

const termsTrigger = document.querySelector('.terms-trigger'),
      policyTrigger = document.querySelector('.policy-trigger'),
      termsModal = document.querySelector('#terms-modal'),
      policyModal = document.querySelector('#policy-modal'),
      closeTermsModal = document.querySelector('.close-terms'),
      closePolicyModal = document.querySelector('.close-policy'),
      burger = document.querySelector('.burger')
      mobMenu = document.querySelector('.header__nav'),
      body = document.body;

function openModal(currentModal, closeModal) {
  currentModal.classList.add('--show-modal');
  closeModal.addEventListener('click', () => {
    currentModal.classList.remove('--show-modal');
  })
}

termsTrigger.addEventListener('click', () => {
  openModal(termsModal, closeTermsModal);
})

policyTrigger.addEventListener('click', () => {
  openModal(policyModal, closePolicyModal);
})

burger.addEventListener('click', () => {
  burger.classList.toggle('--active-burger')
  if (burger.classList.contains('--active-burger')) {
    mobMenu.classList.add('--active-menu')
    body.classList.add('--body-locked')
  } else {
    mobMenu.classList.remove('--active-menu')
    body.classList.remove('--body-locked')
  }
})
