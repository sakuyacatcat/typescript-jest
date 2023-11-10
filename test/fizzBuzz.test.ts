import fizzBuss from "../src/fizzBuss";

describe("fizzBuzz", () => {
  describe("入力が3の倍数の正の整数の場合、文字列で Fzzz を返す", () => {
    it("3の場合、文字列で Fzzz を返す", () => {
      expect(fizzBuss(3)).toBe("Fizz");
    });
  });

  describe("入力が5の倍数の正の整数の場合、文字列で Buzz を返す", () => {});
  describe("入力が15の倍数の正の整数の場合、文字列で FzzzBuzz を返す", () => {});
});
