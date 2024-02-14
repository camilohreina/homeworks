const array1 = [32, 33, 16, 40];
const array2 = [10, 20, 30, 40];

//at
const numberPosition1 = array1.at(1);
console.log(numberPosition1);

//concat
const children = array1.concat(array2);
console.log(children);

//constructor
const textConstructor = array1.constructor;
console.log(textConstructor);

//withIn
const copyElementByIndex = [...array1].copyWithin(2, 0);
console.log(copyElementByIndex);

//entries
const entries = array1.entries();
console.log(entries);

//every
const ages = array1.every((x) => x < 50);
console.log(ages);

//fill
const fillArray = [...array1].fill(55);
console.log(fillArray);

//filter
const agesFilter = array1.filter((x) => x < 40);
console.log(agesFilter);

//find
const agesFind = array1.find((x) => x < 40);
console.log(agesFind);

//findIndex
const agesFindIndex = array1.findIndex((x) => x < 30);
console.log(agesFindIndex);

//findLast
const agesFindLast = array1.findLast((x) => x < 40);
console.log(agesFindLast);

//findLastIndex
const agesFindLastIndex = array1.findLastIndex((x) => x < 30);
console.log(agesFindLastIndex);

//flat
const arrayFlat = [1, 2, [3, [4, 5, 6], 7], 8];
const newArrayFlat = arrayFlat.flat(1);
console.log(newArrayFlat);

//flatMap
const arrayFlatMap = [1, 2, 3, 4, 5, 6];
const newArrayFlatMap = arrayFlatMap.flatMap((x) => x * 2);
console.log(newArrayFlatMap);

//forEach
array2.forEach((x) => x * 2);
console.log(array2);

//from
const arrayLetters = Array.from('ABCDEFG');
console.log(arrayLetters);

//includes
console.log(array1.includes(16));

//indexOf
console.log(array1.indexOf(16));

//isArray
console.log(Array.isArray(array1));

//join
console.log(array1.join(' - '));

//keys
console.log(array1.keys());

//lastIndexOf
console.log(array1.lastIndexOf(33));

//length
console.log(array1.length);

//map
console.log(array1.map((x) => x * 3));

//of
const helloWorld = Array.of('world', 'mundo', 'hi', 'hello');
console.log(helloWorld);

//pop
console.log(helloWorld.pop());

//push
helloWorld.push('hello');
console.log(helloWorld);

//reduce
function getSum(total, num) {
  return total + Math.round(num);
}

const arrayReduce = array1.reduce(getSum, 0);
console.log(arrayReduce);

//reduceRight
const arrayReduceRight = array1.reduceRight(getSum, 0);
console.log(arrayReduceRight);

//reverse
console.log(helloWorld.reverse());

//shift
console.log(helloWorld.slice(1, 3));

//some
console.log(array1.some((x) => x > 10));

//sort
console.log(array1.sort());

//splice
console.log(array2.splice(1, 2));

//toString
console.log(helloWorld.toString());

//unshift
helloWorld.unshift('mango', 'pera');
console.log(helloWorld);

//valueOf
console.log(helloWorld.valueOf());

//with
console.log(helloWorld.with(2, 'papaya'));
