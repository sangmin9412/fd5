function getDayOfWeek(day, lang) {
  return {
    KR: ['일요일', '월요일'],
    US: ['Sundayj', 'Monday']
  }[lang][day];
}


getDayOfWeek(0, 'KR'); // 일요일
getDayOfWeek(1, 'US'); // Monday

function evenFilter(numbers) {
  var result = [];
  var i = 0;

  while(i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
    i++;
  }

  return result;
}
function oddFilter(numbers) {
  var result = [];
  var i = 0;

  while(i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i]);
    }
    i++;
  }

  return result;
}

function manFilter(genders) {
  var result = [];
  var i = 0;

  while(i < genders.length) {
    if (genders[i] === '남') {
      result.push(genders[i]);
    }
    i++;
  }

  return result;
}
var numbers = [2,3,1,4,5,6,7,9,8];
evenFilter(numbers); // [2,4,6,8]
oddFilter(numbers); // [3,1,5,7,9]
manFilter(['남', '여', '여', '남']);















