function hackerrankInString(s) {

  const regex = /h.*a.*c.*k.*e.*r.*r.*a.*n.*k/i;
  if (regex.test(s)) {
    return 'YES';
  }
  return 'NO';
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));
console.log(hackerrankInString('hhaacckkekraraannk'));
console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'));
