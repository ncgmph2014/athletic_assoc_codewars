function stat(strg) {
  // your code
  //do i need to seperate the hour minute and seconds to get the average median and range?
  let array1 = strg.split(", ");
  console.log(array1);
  let array2 = [];
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let object = {};
  //I think I want to organize all of the hours, minutes, and seconds in one place
  //creating a nested array
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].split("|"));
  }
  //i can make an array of objects
  //[{hour: 0, minute, seconds: 0}]

  for (let i = 0; i < array2.length; i++) {
    hours += parseInt(array2[i][0], 10);
    minutes += parseInt(array2[i][1], 10);
    seconds += parseInt(array2[i][2], 10);
  }

  console.log(hours + " hours");
  console.log(minutes + " minutes");
  console.log(seconds + " seconds");
}

stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17");
//"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41");
//"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
