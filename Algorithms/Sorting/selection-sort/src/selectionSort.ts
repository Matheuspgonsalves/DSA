/**
 * Sorts `arr` in ascending order using Selection Sort and returns it.
 */
export function selectionSort(arr: number[]): number[] {
  if(arr.length <= 0) return [];

  for(let i = 0; i < arr.length - 1; i++) {
    let min = i;
    let j = i + 1;
    while(j < arr.length) {
      if(arr[j]! < arr[min]!) {
        min = j;
      }
      j++;
    }
    if(min !== i) {
      let aux = arr[min]!;
      arr[min] = arr[i]!;
      arr[i] = aux;
    }
  }

  return arr;
}
