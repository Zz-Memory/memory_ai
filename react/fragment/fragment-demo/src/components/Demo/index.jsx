

const Demo = ({items}) => {
  return (
    // 如果使用<div></div>标签，DOM树多了一层不需要的节点，DOM解析性能下降，要多迭代一层
    // <></>是一个 jsx 表达式，不会解析成 DOM 节点，是 React.Fragment 的语法糖
    // <Fragment>
    <>
      <h1>Hello</h1>
      {
        items.map(item => (
          <Fragment key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Fragment>
        ))
      }
    </>
    // </Fragment>
  );
};
export default Demo;
