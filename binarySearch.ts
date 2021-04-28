function binarySearch(list, element) {
  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let guess = list[mid];
    if (guess === element) {
      while (list[mid - 1] === element) {
        mid -= 1;
        console.log(true, mid);
      }
      return mid;
    }
    if (guess > element) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}
