const donations = JSON.parse(localStorage.getItem('donation')) || {
  balance: 5500,
  noakhali: 0,
  feni: 600,
  quota: 2400
};

let history = JSON.parse(localStorage.getItem('donationHistory')) || '';

// updating the website amounts with global obj value
updateAmounts();

// updating the donation history when the page lodes
updateHistory();

// converting the form input value to integer
function convertValueToNumber(id) {
  return Number(document.getElementById(id).value);
}

// converting the element's text to integer
function convertTextToNumber(id) {
  return Number(document.getElementById(id).innerText);
}

// handling the donations 
function handleDonation(e, campaign) {
  e.preventDefault();

  const donationAmount = convertValueToNumber(`${campaign}-donation-amount`);
  const balance = convertTextToNumber("balance");
  const TotalDonation = convertTextToNumber(`${campaign}-total-donation`);
  const donationModalObj = document.getElementById('confirmation-modal');

  if(donationAmount > 0 && balance >= donationAmount && typeof donationAmount === 'number') {
    // showing success modal
    donationModalObj.showModal();

    // updating global donations obj
    donations.balance = balance - donationAmount;
    donations[campaign] = TotalDonation + donationAmount;

    // clearing the input donation field 
    document.getElementById(`${campaign}-donation-amount`).value = '';

    // updating site amounts
    updateAmounts();

    // create donation history
    handleDonationHistory(donationAmount, campaign);

    // updating local storage
    localStorage.setItem('donation', JSON.stringify(donations));
  } else {
    document.getElementById(`${campaign}-donation-amount`).value = '';
    alert('Invalid Donation Amount');
  }
}

// close the modal when button is clicked
function handleCloseModal(e, campaign) {
  e.preventDefault();
  e.stopPropagation();
  
  document.getElementById(`${campaign}_modal`).close();
}

// update amounts in page 
function updateAmounts() {
  document.getElementById('balance').innerText = donations.balance;
  document.getElementById('noakhali-total-donation').innerText = donations.noakhali;
  document.getElementById('feni-total-donation').innerText = donations.feni;
  document.getElementById('quota-total-donation').innerText = donations.quota;
}

// handle donation history
function handleDonationHistory(donationAmount, campaign) {
  let campaignName; 
  if(campaign === 'noakhali') {
    campaignName = 'Donated for Flood at Noakhali, Bangladesh';
  } else if(campaign === 'feni') {
    campaignName = 'Donated for Flood Relief in Feni, Bangladesh';
  } else if (campaign === 'quota') {
    campaignName = 'Donated for Aid for Injured in the Quota Movement, Bangladesh';
  }

  const d = new Date();
  
  history += `<div class="border border-form-bg rounded-2xl p-8">
    <h2 class="text-xl text-text-primary font-bold mb-4">${donationAmount} Taka is ${campaignName}</h2>
    <p class="text-text-secondary font-light">Date : ${d}</p>
</div>`;

  updateHistory();
  localStorage.setItem('donationHistory', JSON.stringify(history));
}

// update donation history
function updateHistory() {
  document.getElementById('history-container').innerHTML = history;
}
