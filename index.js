function stat(strg) {
  // your code
  //do i need to seperate the hour minute and seconds to get the average median and range?
  let array1 = strg.split(", ");
  let array2 = [];
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  //I think I want to organize all of the hours, minutes, and seconds in one place
  //creating a nested array
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].split("|"));
  }
  console.log(array2);

  //to get the Mean
  for (let i = 0; i < array2.length; i++) {
    hours += parseInt(array2[i][0], 10);
    minutes += parseInt(array2[i][1], 10);
    seconds += parseInt(array2[i][2], 10);
  }
  //parsing the average into hours, minutes, and seconds
  let totalInSeconds = hours * 3600 + minutes * 60 + seconds;
  let averageInSeconds = parseInt(totalInSeconds / array1.length, 10);
  let meanSeconds = (averageInSeconds % 3600) % 60;
  let meanMinutesBefore = (averageInSeconds - meanSeconds) / 60;
  let meanMinutes = meanMinutesBefore % 60;

  let meanHours = (meanMinutesBefore - meanMinutes) / 60;

  let average = "Average: " + meanHours + "|" + meanMinutes + "|" + meanSeconds;
  console.log(average);

  //add everything together in a new array so that we can arrange it for the to find the range and the median
  //maybe we can sort the new array and the old array to get our answers?
  let totalSecondsArray = array2.map(
    x =>
      parseInt(x[0], 10) * 3600 + parseInt(x[1], 10) * 60 + parseInt(x[2], 10)
  );

  console.log(totalSecondsArray);

  let sortSecondsArray = totalSecondsArray.concat().sort((a, b) => a - b);
  console.log(sortSecondsArray);

  //didn't work because I have to sort everything first
  let medianRaw = 0;
  let median = 0;
  if (array1.length % 2 !== 0) {
    medianRaw = sortSecondsArray[Math.round(array1.length / 2) - 1];
  } else if (array11.length % 2 === 0) {
    medianRaw =
      sortSecondsArray[array1.length / 2] +
      sortSecondsArray[array1.length / 2 - 1];
  }
  let rangeRaw =
    sortSecondsArray[sortSecondsArray.length - 1] - sortSecondsArray[0];
  console.log(rangeRaw);
  console.log(medianRaw);
}

stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17");
//"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41");
//"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
