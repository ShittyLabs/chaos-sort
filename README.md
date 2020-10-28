# Chaos Sort [![@johnny.reina/chaos-sort](https://img.shields.io/npm/v/@johnny.reina/chaos-sort?style=for-the-badge)](https://www.npmjs.com/package/@johnny.reina/chaos-sort)

_Scrambles an array until it is sorted, then returns it_

## Time Complexity

The sky's the limit.

## Installation

`npm i @johnny.reina/chaos-sort`

## Usage

```typescript
import { chaosSort } from "@johnny.reina/chaos-sort";
const input = [
  { name: "Sam", age: 22 },
  { name: "Ed", age: 53 },
  { name: "Sally", age: 49 },
];
const actual = chaosSort(input, (x) => x.age);
// [
//   { name: "Sam", age: 22 },
//   { name: "Sally", age: 49 },
//   { name: "Ed", age: 53 },
// ]
```

## Ord?

`Ord` as a convention is used to mean anything that can be ordered. In this case, strings, numbers, booleans, and Date objects can be ordered natiively in JavaScript.
