function countdown(i: number) {
  console.log(i);
  if (i <= 1) return; // base case
  else countdown(i - 1); // recursive case
}

countdown(100);
