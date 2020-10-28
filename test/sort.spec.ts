import { expect } from "chai";
import { chaosSort } from "../src";

describe("sort()", () => {
  it("Should sort a numeric array", () => {
    const input = [2, 5, 3, 8, 5];
    const actual = chaosSort(input, (x) => x);
    const expected = [2, 3, 5, 5, 8];

    expect(actual).to.eql(expected);
  });

  it("Should sort a string array", () => {
    const input = ["hello", "world", "!"];
    const actual = chaosSort(input, (x) => x);
    const expected = ["!", "hello", "world"];

    expect(actual).to.eql(expected);
  });

  it("Should sort a date array", () => {
    const input = [
      new Date("2020-01-01"),
      new Date("2019-01-01"),
      new Date("2021-01-01"),
    ];
    const actual = chaosSort(input, (x) => x);
    const expected = [
      new Date("2019-01-01"),
      new Date("2020-01-01"),
      new Date("2021-01-01"),
    ];

    expect(actual).to.eql(expected);
  });

  it("Should sort an object array using numbers", () => {
    const input = [
      { name: "Sam", age: 22 },
      { name: "Ed", age: 53 },
      { name: "Sally", age: 49 },
    ];
    const actual = chaosSort(input, (x) => x.age);
    const expected = [
      { name: "Sam", age: 22 },
      { name: "Sally", age: 49 },
      { name: "Ed", age: 53 },
    ];

    expect(actual).to.eql(expected);
  });

  it("Should sort an object array using strings", () => {
    const input = [
      { name: "Sam", age: 22 },
      { name: "Ed", age: 53 },
      { name: "Sally", age: 49 },
    ];
    const actual = chaosSort(input, (x) => x.name);
    const expected = [
      { name: "Ed", age: 53 },
      { name: "Sally", age: 49 },
      { name: "Sam", age: 22 },
    ];

    expect(actual).to.eql(expected);
  });

  it("Should return an array containing a single item", () => {
    const input = [{ name: "Sam", age: 22 }];
    const actual = chaosSort(input, (x) => x.name);
    const expected = [{ name: "Sam", age: 22 }];

    expect(actual).to.eql(expected);
  });

  it("Should return an array containing no items", () => {
    const input: Array<number> = [];
    const actual = chaosSort(input, (x) => x);
    const expected: Array<number> = [];

    expect(actual).to.eql(expected);
  });
});
