const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

// Success message element
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

form.addEventListener("submit", (e) => {
 
  nameError.innerText = "";
  emailError.innerText = "";
  subjectError.innerText = "";
  messageError.innerText = "";
  successMessage.style.display = "none";

  let isValid = true;


  if (nameInput.value.trim() === "" || nameInput.value == null) {
    nameError.innerText = "Full name is required";
    isValid = false;
  }

 
  const emailValue = email.value.trim();
  if (emailValue === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.innerText = "Please enter a valid email address";
    isValid = false;
  }

 
  if (subject.value.trim() === "") {
    subjectError.innerText = "Subject is required";
    isValid = false;
  }


  if (message.value.trim() === "") {
    messageError.innerText = "Message is required.";
    isValid = false;
  } 



  if (!isValid) {
    e.preventDefault();
    return;
  }

  
  e.preventDefault(); 
  successMessage.style.display = "block";
  form.reset();
});
