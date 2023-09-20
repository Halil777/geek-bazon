// Generating Random Numbers in the Format "12345-67890"
export function generateRandomNumbers(count: number) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = `${Math.floor(Math.random() * 90000) + 10000}-${
      Math.floor(Math.random() * 90000) + 10000
    }`;
    randomNumbers.push({ key: i, crossNumber: randomNumber, partNumber: "" });
  }
  return randomNumbers;
}

// Generating Random Alphanumeric Values
export function generateRandomAlphanumeric(count: number) {
  const randomValues = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomAlphanumeric = [];
  for (let i = 0; i < count; i++) {
    let value = "";
    for (let j = 0; j < 10; j++) {
      value += randomValues.charAt(
        Math.floor(Math.random() * randomValues.length)
      );
    }
    randomAlphanumeric.push({ key: i, crossNumber: "", partNumber: value });
  }
  return randomAlphanumeric;
}
