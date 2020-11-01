function fbi(i) {
  if (i < 2) {
    return i === 0 ? 0 : 1;
  }

  return fbi(i - 1) + fbi(i - 2);
}

for (let i = 0; i < 40; i++) {
  console.log(fbi(i));
}