// --- Interactive Feature 1: Theme Toggle ---
// This allows users to switch between light and dark modes
const themeButton = document.getElementById('themeToggle');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// --- Interactive Feature 2: Live Character Counter ---
// Updates as the user types in the message box
const messageBox = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageBox.addEventListener('input', () => {
  const count = messageBox.value.length;
  charCount.textContent = `${count} / 200 characters`;
});

// --- Custom Form Validation ---
// This function prevents form submission if validation fails
const form = document.getElementById('feedbackForm');
const response = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = messageBox.value.trim();

  // Basic custom validation
  if (name === '') {
    response.textContent = '❌ Name is required.';
    response.style.color = 'red';
    return;
  }

  // Simple regex email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    response.textContent = '❌ Please enter a valid email address.';
    response.style.color = 'red';
    return;
  }

  if (message.length < 10) {
    response.textContent = '❌ Message must be at least 10 characters.';
    response.style.color = 'red';
    return;
  }

  // If all validation passes:
  response.textContent = `✅ Thank you, ${name}! Your feedback has been received.`;
  response.style.color = 'green';
  form.reset();
  charCount.textContent = '0 / 200 characters'; // Reset counter
});
