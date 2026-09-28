/**
 * Sorts `arr` in ascending order using Merge Sort and returns it.
 */
function merge(arr: number[], left: number, mid: number, right: number): void {
  let arr1 = arr.slice(left, mid + 1);
  let arr2 = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  while(i < arr1.length && j < arr2.length) {
    arr[k++] = arr1[i]! <= arr2[j]! ? arr1[i++]! : arr2[j++]!;
  }

  while(i < arr1.length) arr[k++] = arr1[i++]!;
  while(j < arr2.length) arr[k++] = arr2[j++]!;
}

export function mergeSort(arr: number[]): number[] {
  let len = arr.length;

  for(let currentSize = 1; currentSize <= len; currentSize *= 2) {
    for(let leftStart = 0; leftStart < len - 1; leftStart += 2 * currentSize) {
      let mid = Math.min(currentSize + leftStart - 1, len - 1);
      let rightEnd = Math.min(leftStart + 2 * currentSize - 1, len - 1);
      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}
