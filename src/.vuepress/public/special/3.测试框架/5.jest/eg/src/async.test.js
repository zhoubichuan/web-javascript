//如果函数里的形参使用了done的话，jest会阻塞在此不在执行
//jest会等待done被调用
test("async", done => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 1000);
});
