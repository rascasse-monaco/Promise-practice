////practice.jsを関数を使わないで書いたら
new Promise(resolve => {
  setTimeout(() => {
    resolve(11);
  }, 100);
})
  .then(a => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(13);
        });
      })
        .then(b => {
          return a * b;
        })
    .then(result => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(17);
        });
      })
        .then(c => {
          return console.log('ex1: ' + result * c);
        });
    });
  });