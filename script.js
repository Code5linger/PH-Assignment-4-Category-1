function cashOut(money) {
  if (typeof money !== 'number' || money < 0) {
    // Insted of creating another if block I used Ternary Operator "||, &&"
    return 'Invalid';
  }
  return (money * 1.75) / 100;
}
