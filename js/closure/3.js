function add(...args) {
  console.log(args);
  return (...newArgs) => {
    const arr = [...args,...newArgs];
    console.log(arr);
  }
}
// 先返回一个函数，然后再执行返回的函数
add(1, 2, 3)(4,5,6);
