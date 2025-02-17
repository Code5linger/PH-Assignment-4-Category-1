// Problem-01 : Calculate the cash-out Charge
function cashOut(money) {
  if (typeof money !== 'number' || money < 0) {
    // Insted of creating another if block I used Ternary Operator "||, &&"
    return 'Invalid';
  }
  return (money * 1.75) / 100;
}

// Problem-02 : Detect email  valid or not

function validEmail(email) {
  if (typeof email !== 'string') {
    return 'Invalid';
  }

  const firstChar = email.charAt(0);
  if ('.-_+@'.includes(firstChar)) {
    return false;
  }

  if (!email.includes('@')) {
    return false;
  }

  if (email.includes(' ')) {
    return false;
  }

  if (!email.endsWith('.com')) {
    return false;
  }

  return true;
}

// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )
