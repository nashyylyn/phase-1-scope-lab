
var customerName = 'bob';

function upperCaseCustomerName() {
  return   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone else';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'maybe bob';
}
