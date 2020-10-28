type Ord = number | string | boolean | Date;

function scramble<T>(arr: Array<T>): Array<T> {
  arr.sort(() => 0.5 - Math.random());
  return arr;
}

function isSorted<T>(arr: Array<T>, ord: (item: T) => Ord): boolean {
  return arr.reduce<[boolean, T]>(
    ([sortMemo, prev], val) => {
      return [ord(val) >= ord(prev) && sortMemo, val];
    },
    [true, arr[0]]
  )[0];
}

/**
 * Scrambles the array until it is sorted, using the specified ordering.
 */
export function chaosSort<T>(arr: Array<T>, ord: (item: T) => Ord): Array<T> {
  if (arr.length < 2) return arr;
  let sorted, result;

  do {
    result = scramble(arr);
    sorted = isSorted(result, ord);
  } while (!sorted);

  return result;
}
