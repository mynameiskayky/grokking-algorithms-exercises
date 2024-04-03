const arrayList = [1, 2, 5, 6, 10, 44];

function binarySearch(list: number[], item: number) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let kick = list[mid];

    if (kick === item) return `${mid}`;
    if (kick > item) high = mid - 1;
    else low = mid + 1;
  }
}

console.log(binarySearch(arrayList, 5));
