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
  if (meanHours < 10) {
    meanHours = "0" + meanHours;
  }
  if (meanMinutes < 10) {
    meanMinutes = "0" + meanMinutes;
  }
  if (meanSeconds < 10) {
    meanSeconds = "0" + meanSeconds;
  }
  let average = "Average: " + meanHours + "|" + meanMinutes + "|" + meanSeconds;
  console.log(average);

  //add everything together in a new array so that we can arrange it for the to find the range and the median
  //maybe we can sort the new array and the old array to get our answers?
  let totalSecondsArray = array2.map(
    x =>
      parseInt(x[0], 10) * 3600 + parseInt(x[1], 10) * 60 + parseInt(x[2], 10)
  );

  // console.log(totalSecondsArray);

  let sortSecondsArray = totalSecondsArray.concat().sort((a, b) => a - b);
  // console.log(sortSecondsArray);

  //didn't work because I have to sort everything first
  let medianRaw = 0;
  if (array1.length % 2 !== 0) {
    medianRaw = sortSecondsArray[Math.round(array1.length / 2) - 1];
  } else if (array1.length % 2 === 0) {
    medianRaw = Math.floor(
      (sortSecondsArray[array1.length / 2] +
        sortSecondsArray[array1.length / 2 - 1]) /
        2
    );
  }
  let rangeRaw =
    sortSecondsArray[sortSecondsArray.length - 1] - sortSecondsArray[0];

  let medianSeconds = (medianRaw % 3600) % 60;
  let medianMinutesBefore = (medianRaw - medianSeconds) / 60;
  let medianMinutes = medianMinutesBefore % 60;
  let medianHour = (medianMinutesBefore - medianMinutes) / 60;
  if (medianHour < 10) {
    medianHour = "0" + medianHour;
  }
  if (medianMinutes < 10) {
    medianMinutes = "0" + medianMinutes;
  }
  if (medianSeconds < 10) {
    medianSeconds = "0" + medianSeconds;
  }
  //median altogether
  let median =
    "Median: " + medianHour + "|" + medianMinutes + "|" + medianSeconds;
  console.log(median);

  let rangeSeconds = (rangeRaw % 3600) % 60;
  let rangeMinutesBefore = (rangeRaw - rangeSeconds) / 60;
  let rangeMinutes = 0;
  let rangeHour = 0;
  if (rangeMinutesBefore >= 60) {
    rangeMinutes = rangeMinutesBefore % 60;
    rangeHour = (rangeMinutesBefore - rangeMinutes) / 60;
  } else if (rangeMinutesBefore < 60) {
    rangeMinutes = rangeMinutesBefore;
  }

  if (rangeHour < 10) {
    rangeHour = "0" + rangeHour;
  }
  if (rangeMinutes < 10) {
    rangeMinutes = "0" + rangeMinutes;
  }
  if (rangeSeconds < 10) {
    rangeSeconds = "0" + rangeSeconds;
  }
  let range = "Range: " + rangeHour + "|" + rangeMinutes + "|" + rangeSeconds;
  console.log(range);
  let result = range + " " + average + " " + median;

  return result;
}

// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
// //"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
// console.log(
//   stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")
// );
// //"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
// console.log(
//   stat(
//     "01|15|59, 02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"
//   )
// );
