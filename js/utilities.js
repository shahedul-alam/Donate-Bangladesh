const donations = JSON.parse(localStorage.getItem('donation')) || {
  balance: 5500,
  noakhali: 0,
  feni: 600,
  quota: 2400
};

// updating the website amounts with global obj value
updateAmounts();

// converting the form input value to integer
function convertValueToNumber(id) {
  return parseFloat(document.getElementById(id).value);
}

// converting the element's text to integer
function convertTextToNumber(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// handling the donations 
function handleDonation(e, campaign) {
  e.preventDefault();

  const donationAmount = convertValueToNumber(`${campaign}-donation-amount`);
  const balance = convertTextToNumber("balance");
  const TotalDonation = convertTextToNumber(`${campaign}-total-donation`);
  const donationModalObj = document.getElementById(`${campaign}_modal`);

  if(donationAmount > 0 && balance >= donationAmount) {
    // showing success modal
    donationModalObj.showModal();

    // updating global donations obj
    donations.balance = balance - donationAmount;
    donations[campaign] = TotalDonation + donationAmount;

    // clearing the input donation field 
    document.getElementById(`${campaign}-donation-amount`).value = '';

    // updating site amounts
    updateAmounts();

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

// handle donation button
