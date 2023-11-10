const fuzzBuss = (num: number): string => {
  let result = "";
  if (num % 3 === 0) {
    result += "Fizz";
  }
  return result || num.toString();
};

export default fuzzBuss;
