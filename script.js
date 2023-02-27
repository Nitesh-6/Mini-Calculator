//question 1
function multiplyBy() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = input1 * input2;
}

function divideBy() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = input1 / input2;
}

// question 2
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log([...arr1, ...arr2]);
// question 2 written in exam
function combineArray(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(combineArray(arr1, arr2));

//question 3
function squareOfArray(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i] ** 2);
  }
  return newarr;
}
console.log(squareOfArray(arr1));

//question 4
function fourTable(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`4 x ${i} = ${4 * i}`);
  }
}
fourTable(10);

//question 5
fetch("https://fakestoreapi.com/users")
  .then((res) => res.json())
  .then((users) => {
    users.forEach((users) => {
      //   console.log(
      let name = `${users.name.firstname} ${users.name.lastname} : ${users.address.city}`;
      //   );
    });
  });