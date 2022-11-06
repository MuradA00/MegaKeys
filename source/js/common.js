AOS.init();

const termsTrigger = document.querySelector('.terms-trigger'),
      policyTrigger = document.querySelector('.policy-trigger'),
      termsModal = document.querySelector('#terms-modal'),
      policyModal = document.querySelector('#policy-modal'),
      closeTermsModal = document.querySelector('.close-terms'),
      closePolicyModal = document.querySelector('.close-policy');

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
