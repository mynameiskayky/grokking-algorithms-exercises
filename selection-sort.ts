const testingList = [99, 8, 1];

function findSmallest(array: number[]) {
  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(array: number[]) {
  const length = array.length;
  let newArr = [];
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(array);
    newArr.push(array[smallest]);
    array.splice(smallest, 1);
  }
  return newArr;
}

console.log(selectionSort(testingList));
