import fizzBuzz from "../src/fizzBuzz";

describe("fizzBuzz", () => {
  describe("入力が3の倍数の正の整数の場合、文字列で Fzzz を返す", () => {
    it("3の場合、文字列で Fzzz を返す", () => {
      expect(fizzBuzz(3)).toBe("Fizz");
    });
  });

  describe("入力が5の倍数の正の整数の場合、文字列で Buzz を返す", () => {
    it("5の場合、文字列で Buzz を返す", () => {
      expect(fizzBuzz(5)).toBe("Buzz");
    });
  });

  describe("入力が15の倍数の正の整数の場合、文字列で FzzzBuzz を返す", () => {
    it("15の場合、文字列の FizzBuzz を返す", () => {
      expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
  });

  describe("入力が3の倍数でも5の倍数でもない正の整数の場合、数値を文字列にして返す", () => {
    it("1の場合、文字列の1を返す", () => {
      expect(fizzBuzz(1)).toBe("1");
    });
  });
});
