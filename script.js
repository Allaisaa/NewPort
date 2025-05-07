function onSubmit(e) {
    const inputEmail = document.getElementById('email');
    const formInfo = document.getElementById('form-info');
    const email = inputEmail.value;
  
    // Check if email value is lowercase or not
    if (email !== email.toLowerCase()) {
      e.preventDefault();
      inputEmail.classList.add('invalid');
      formInfo.classList.add('error');
      formInfo.innerText = 'Error form is not sent! The Email should be in lower case!!';
    } else {
      inputEmail.classList.remove('invalid');
      formInfo.classList.remove('error');
    }
  }
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', onSubmit);
  
  // Remove Error onchange from the form.
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  inputEmail.addEventListener('change', () => {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
    formInfo.innerText = '';
  }
  );