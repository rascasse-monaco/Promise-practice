'use strict';
function get(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(number);
    }, 100);
  });
}
function ex1(){
  return new Promise((resolve) => {
  get(11)
  .then(a => {
    return get(13)
      .then(b => {
        return a * b;
      })
    .then(result => {
      return get(17)
        .then(c => {
          return resolve('ex1: ' + result * c);
        });
    });
  });
  });
}
function ex2(){
  return new Promise((resolve) => {
    get(11).then(a => {
      get(13).then(b => {
        get(17).then(c => {
          resolve('ex2: ' + a * b * c);
        });
      });
    });
  });
}

/////ex1とex2を順番に出してみる。
ex1()
  .then(a => {
    return ex2()
      .then(b => {
        return console.log(a +' ' + b);
      })
  });
/////または
Promise.all([ex1(), ex2()])
  .then(resolve => {
    console.log(resolve[0] + ' ' + resolve[1]);
  })