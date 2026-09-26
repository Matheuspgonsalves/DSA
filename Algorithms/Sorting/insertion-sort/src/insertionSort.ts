/**
 * Sorts `arr` in ascending order using Insertion Sort and returns it.
 */
export function insertionSort(arr: number[]): number[] {
  for(let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    let key = arr[j];
    while(j > 0 && key! < arr[j - 1]!) {
      arr[j] = arr[j - 1]!;
      j--;
    }
    arr[j] = key!;
  }
  
  return arr
}
