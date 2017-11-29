var result = binarySearch([
  1,
  23,
  43,
  56,
  77,
  89,
  211,
  212,
  789,
  972,
  1001,
  4567,
  4599,
  83784
], 77);

console.log(result);

function binarySearch(stuff, searchElement) {

  // starting values
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.length - 1;
  var minIndex = 0;

  // main loop
  while (minIndex <= maxIndex) {

    // get middle position (rough)
    currentIndex = Math.floor((minIndex+maxIndex)/2);

    // get dat element
    currentElement = stuff[currentIndex];
    console.log('Start Index: ', minIndex)
    console.log('End Index: ', maxIndex)
    console.log('Current Element', stuff[currentIndex])

    // test it
    if (currentElement < searchElement) {
      // if current element is LESS than what we're looking for, look ABOVE this value
      minIndex = currentIndex + 1 ; // reassignment

    }
    else if (currentElement > searchElement) {

      // if current element is MORE than what we're looking for, look BELOW this value
      maxIndex = currentIndex - 1 ;
    }
    else {
      // FOUND IT! Shoot back the index.
      console.log('Current Index: ', currentIndex)
      console.log('Curent Element', stuff[currentIndex])
      console.log(" ------- ")
      return currentIndex;
    }

  }

return false;
}
