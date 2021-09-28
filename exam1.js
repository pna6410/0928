console.log("my test")
console.log('filename: ', __filename);
console.log('dirname: ', __dirname);
console.time('alpha');

//Time Check Start
console.timeEnd('alpha');
let output =1;
for(var i=1; i<=10; i++){
  output *= i;
}
console.log('Result:', output);