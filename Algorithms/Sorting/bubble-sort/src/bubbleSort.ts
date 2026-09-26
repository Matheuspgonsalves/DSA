/**
 * Sorts `arr` in ascending order using Bubble Sort and returns it.
 */
export function bubbleSort(arr: number[]): number[] {
  for(let end = arr.length - 1; end > 0; end--) {
    let swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i]! > arr[i + 1]!) {
        [arr[i], arr[i + 1]] = [arr[i + 1]!, arr[i]!];
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return arr;
}
