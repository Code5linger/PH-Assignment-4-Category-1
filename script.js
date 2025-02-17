function cashOut(money) {
  if (typeof money !== 'number' || money < 0) {
    return 'Invalid';
  }
  return (money * 1.75) / 100;
}

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

function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return 'Invalid';
  }

  if (!times.every((time) => typeof time === 'number')) {
    return 'Invalid';
  }

  let totalSeconds = times.reduce((sum, time) => sum + time, 0);

  let hour = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minute = Math.floor(totalSeconds / 60);
  let second = totalSeconds % 60;

  return { hour, minute, second };
}
