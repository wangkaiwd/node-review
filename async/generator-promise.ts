console.log('start before');

function * testPromise (): Generator<any, any, any> {
  const a = yield new Promise((resolve) => {
    setTimeout(() => {
      console.log('resolve a');
      resolve(1);
    }, 2000);
  });
  console.log('a', a);
  const b = yield Promise.resolve(a + 1);
  console.log('b', b);
  return b + 1;
}

const co = (generator: any) => {
  const iterator = generator();
  const next = (...args: any[]): Promise<any> => {
    try {
      const { value, done } = iterator.next(...args);
      if (!done) {
        // value may be non promise
        // such as yield 5
        return Promise.resolve(value).then(next);
      } else {
        return Promise.resolve(value);
      }
    } catch (err) { // handle error
      return Promise.reject(err);
    }
  };
  return next();
};

co(testPromise).then((res: any) => {
  console.log('res', res);
});
console.log('start');
