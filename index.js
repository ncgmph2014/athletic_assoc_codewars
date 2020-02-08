function stat(strg) {
  // your code
  //do i need to seperate the hour minute and seconds to get the average median and range?
  let array1 = strg.split(", ");
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
  //to get the Mean
  for (let i = 0; i < array2.length; i++) {
    hours += parseInt(array2[i][0], 10);
    minutes += parseInt(array2[i][1], 10);
    seconds += parseInt(array2[i][2], 10);
  }

  let totalInSeconds = hours * 3600 + minutes * 60 + seconds;
  let averageInSeconds = parseInt(totalInSeconds / array1.length, 10);
  let meanSeconds = (averageInSeconds % 3600) % 60;
  let meanMinutesBefore = (averageInSeconds - meanSeconds) / 60;
  let meanMinutes = meanMinutesBefore % 60;

  let meanHours = (meanMinutesBefore - meanMinutes) / 60;
  console.log(meanHours);

  console.log(meanMinutes);
  //   let numberOf3600s = parseInt((averageInSeconds - meanSeconds) / 3600, 10);
  //   let meanMinutes =
  console.log(meanSeconds);

  let average = "Average: " + meanHours + "|" + meanMinutes + "|" + meanSeconds;
  console.log(average);

  //didn't work because I have to sort everything first
  let median = 0;
  if (array1.length % 2 !== 0) {
    median = array1[Math.round(array1.length / 2)];
  }

  console.log(median);
}

stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17");
//"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41");
//"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
