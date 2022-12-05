function add(a, b) {
  return a + b;
}
function devide(a, b) {
  if (b == 0) {
    throw new Error("除数不能为0");
    return;
  }
  return a / b;
}

exports.add = add;
exports.devide = devide;
