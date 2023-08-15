function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function displayAnswer() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = 'none';

  const dropdownBtn = document.getElementById('dropdown-btn');
  dropdownBtn.textContent = '▼';

  const selectedOption = document.getElementById('question-dropdown').value;

  const chatContent = document.getElementById('chat-content');

  // Replace with your predefined answers for each question
  if (selectedOption === 'q1') {
    chatContent.textContent = 'Operating hours: 9 AM to 6 PM';
  } else if (selectedOption === 'q2') {
    chatContent.textContent = 'We are located at 123 Main Street.';
  } else if (selectedOption === 'q3') {
    chatContent.textContent = 'We have a variety of stores and brands available.';
  } else if (selectedOption === 'q4') {
    chatContent.textContent = 'Yes, there is parking available.';
  } else if (selectedOption === 'q5') {
    chatContent.textContent = 'Check our website for ongoing promotions and events.';
  }
}

