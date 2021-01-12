//process.stdout.write('hello from spinner2.js... \rheyyy\n');
let spin = "|/-\\|/-\\|";
let delay = 100;
for (const char of spin) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, delay += 200);
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 100)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-   '); 
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 1900);