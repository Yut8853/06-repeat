const { sum, sumEven, sumOfFive, sumOfThree, fiveMoreArray, maxNum } = require('./app');

// for文を使って1から10までの和を求めてください。

test('課題０４', () => {
  const result = 55;
  const resultCalc = sum();

  expect(resultCalc).toBe(result);
});

// for文を使って1から10までの偶数の和を求めてください。30

test('課題０５' , () => {
  const result = 30;
  const resultCalc = sumEven();

  expect(resultCalc).toBe(result);
})

// for文を使って1から10までの5以上の数の和を求めてください。45

test('課題０６', () => {
  const result = 45;
  const resultCalc = sumOfFive();

  expect(resultCalc).toBe(result);
});

// for文を使って1から10までの3以上の偶数の和を求めてください。28

test('課題０７', () => {
  const result = 28;
  const resultCalc = sumOfThree();

  expect(resultCalc).toBe(result);
});

// 配列[7, 3, 8, 11, 1, 6, 2, 4]の要素の中で5以上の要素をだけを持っている別の配列をfor文を使って作成してください。

test('課題０８', () => {
  const array = [7, 3, 8, 11, 1, 6, 2, 4];
  const result = [7,8,11,6];
  const resultCalc = fiveMoreArray(array);

  expect(resultCalc).toStrictEqual(result);
});

// 配列[7, 3, 8, 11, 1, 6, 2, 4]の要素の中で最大の数をfor文を使って求めてください。

test('課題０９', () => {
  const array = [7, 3, 8, 11, 1, 6, 2, 4];
  const resultCalc = maxNum(array);
  const result = 11;

  expect(resultCalc).toBe(result);
});
