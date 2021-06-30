const args = process.argv.slice(2);
console.log("My Args:", args);
for (let time of args) {
  let delay = Number(time);
  console.log("my delay", delay);
  console.log("checking time", isNaN(delay));
  if (isNaN(delay) || delay < 0) {
    continue; // continue will let us take the next item and test it if the first one did not meet the requirements
  }
  console.log("delay:", delay);
  delay *= 1000;
  setTimeout(() => {
    process.stdout.write("alarm\n");
  }, delay);
}
// let time = 100;

// let spinner = [
//   "\r| BUFFERING",
//   "\r/ BUFFERING",
//   "\r- BUFFERING",
//   "\r\\ BUFFERING",
//   "\r| BUFFERING",
//   "\r/ BUFFERING",
//   "\r- BUFFERING",
//   "\r| DONE....\n   ",
//   "Thanks!",
// ];

// for (const spin of spinner) {
//   setTimeout(() => {
//     process.stdout.write(spin);
//   }, time);
//   time += 200;
// }
