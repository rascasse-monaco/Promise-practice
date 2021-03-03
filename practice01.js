function getA() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(11);
    }, 1000);
  });
}

function getB() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(13);
    }, 1000);
  });
}

function getC() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(17);
    }, 1000);
  });
}


////////////////////////////////////
getA()
  .then(a => {
    return getB()
      .then(b => {
        return getC()
          .then(c => {
            return console.log('ex1: ' + a * b * c);
          });
      });
  });
//上と同じ（省略形）////////////////////
getA()
  .then(a => {
    getB().then(b => {
      getC().then(c => {
          console.log('ex2: ' + a * b * c);
      });
    });
  });
//他の書き方////////////////////
getA()
  .then(a => {
      return getB()
        .then(b => {
          return a * b;
        })
    .then(result => {
      return getC()
        .then(c => {
          return console.log('ex3: ' + result * c);
        });
    });
  });
//////////////////////////////////
getA().then(async a => {
  const b = await getB();
  const c = await getC();
  console.log('ex4: ' + a * b * c);
});
//////////////////////////////////
getA().then(async a => {
 const [b, c] = [await getB(), await getC()];
 console.log('ex5: ' + a * b * c);
});