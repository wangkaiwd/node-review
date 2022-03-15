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
  const run = (...args: any[]) => {
    const { value, done } = iterator.next(...args);
    if (!done) {
      return value.then((result: any) => run(result));
    } else {
      return Promise.resolve(value);
    }
  };
  return run();
};

co(testPromise).then((res: any) => {
  console.log('res', res);
});
console.log('start');
