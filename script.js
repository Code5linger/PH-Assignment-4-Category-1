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
function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return 'Invalid';
  }

  let mangoCount = 0;
  let bananaCount = 0;

  for (let vote of votes) {
    if (typeof vote === 'string') {
      let lowerVote = vote.toLowerCase();
      if (lowerVote === 'mango') {
        mangoCount++;
      } else if (lowerVote === 'banana') {
        bananaCount++;
      }
    }
  }

  if (mangoCount > bananaCount) {
    return 'Mango';
  } else if (bananaCount > mangoCount) {
    return 'Banana';
  } else {
    return 'Draw';
  }
}

// Problem-04: Detect The Perfect Best Friend
function isBestFriend(f1, f2) {
  if (
    typeof f1 !== 'object' ||
    f1 === null ||
    typeof f2 !== 'object' ||
    f2 === null
  ) {
    return 'Invalid';
  }

  if (
    typeof f1.name !== 'string' ||
    typeof f2.name !== 'string' ||
    typeof f1.roll !== 'number' ||
    typeof f2.roll !== 'number' ||
    typeof f1.bestFriend !== 'number' ||
    typeof f2.bestFriend !== 'number'
  ) {
    return 'Invalid';
  }

  return f1.bestFriend === f2.roll && f2.bestFriend === f1.roll;
}


// ফাংশন কল বা console.log করার প্রয়োজন নেই কারণ এটি সাবমিটের আগে রিমুভ করতে হবে।
