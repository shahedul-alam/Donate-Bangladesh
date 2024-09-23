// campaign noakhali
document.getElementById('donate-btn-1').addEventListener('click', (e) => {
  handleDonation(e, 'noakhali');
});

document.getElementById('close-btn-1').addEventListener('click', (e) => {
  handleCloseModal(e, 'noakhali');
});

// campaign feni
document.getElementById('donate-btn-2').addEventListener('click', (e) => {
  handleDonation(e, 'feni');
});

document.getElementById('close-btn-2').addEventListener('click', (e) => {
  handleCloseModal(e, 'feni');
});

// campaign quota
document.getElementById('donate-btn-3').addEventListener('click', (e) => {
  handleDonation(e, 'quota');
});

document.getElementById('close-btn-3').addEventListener('click', (e) => {
  handleCloseModal(e, 'quota');
});

// switch to blog page
document.getElementById('blog-btn').addEventListener('click', () => {
  window.location.href = '../blog.html';
});

// handle donation button
document.getElementById('donation-btn').addEventListener('click', () => {
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('donation-section').classList.remove('hidden');

  document.getElementById('donation-btn').className = "text-xl font-semibold text-text-primary bg-btn-primary px-8 py-4 rounded-lg";
  document.getElementById('history-btn').className = "text-xl font-semibold text-text-secondary border border-btn-secondary rounded-lg px-8 py-4";

  document.getElementById('footer').classList.remove('hidden');
});

// handle history button
document.getElementById('history-btn').addEventListener('click', () => {
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.remove('hidden');

  document.getElementById('history-btn').className = "text-xl font-semibold text-text-primary bg-btn-primary px-8 py-4 rounded-lg";
  document.getElementById('donation-btn').className = "text-xl font-semibold text-text-secondary border border-btn-secondary rounded-lg px-8 py-4";

  document.getElementById('footer').classList.add('hidden');
});