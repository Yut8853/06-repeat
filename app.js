// for文を使って1から10までコンソールに出力してください。

for(let i = 1; i <= 10; i++) {
  console.log(i)
}

// for文を使って1から10まで偶数をコンソールに出力してください。

for(let i = 1; i <= 10; i++) {
  if(i % 2 === 0) {
    console.log(i)
  }
}

// for文を使って1から10まで奇数をコンソールに出力してください。

for(let i = 1; i <= 10; i++) {
  if(i % 2 !== 0) {
    console.log(i)
  }
}

// for文を使って1から10までの和を求めてください。55

function sum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

// for文を使って1から10までの偶数の和を求めてください。30

function sumEven() {
  let sumEven = 0
  for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
      sumEven += i
    }
  }
  return sumEven;
}

// for文を使って1から10までの5以上の数の和を求めてください。45

function sumOfFive() {
  let sumOfFive = 0;
  for(let i = 5; i <= 10; i++) {
    sumOfFive += i
  }
  return sumOfFive
}

// for文を使って1から10までの3以上の偶数の和を求めてください。28

function sumOfThree() {
  let sumOfThree = 0;
  for(let i = 3; i <= 10; i++) {
    if(i % 2 === 0) {
      sumOfThree += i
    }
  }
  return sumOfThree
}

// 配列[7, 3, 8, 11, 1, 6, 2, 4]の要素の中で5以上の要素をだけを持っている別の配列をfor文を使って作成してください。

const array = [7, 3, 8, 11, 1, 6, 2, 4]

function fiveMoreArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      result.push(array[i]);
    }
  }
  return result;
}

// 配列[7, 3, 8, 11, 1, 6, 2, 4]の要素の中で最大の数をfor文を使って求めてください。

function maxNum(array) {
  let maxNum = array[0];
  // 配列の一番目を代入
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
      // もし次の配列が大きかったら更新していく
    }
  }
  return maxNum;
}

module.exports = {
  sum,
  sumEven,
  sumOfFive,
  sumOfThree,
  fiveMoreArray,
  maxNum,
}
