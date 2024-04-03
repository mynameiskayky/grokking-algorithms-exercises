function fat(x: number): number {
  if (x === 1) return x;
  else return x * fat(x - 1);
}

console.log(fat(4));
