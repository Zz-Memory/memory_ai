import SearchBox from "@/components/SearchBox";
import useSearchStore from "@/store/useSearchStore";
import styles from "./search.module.css";
import { useState,useEffect,memo } from "react";

const HotListItem = memo ((props) => {
  console.log(props,'-------');
  const {hotList} = props;
  return (
    <div className={styles.hot}>
      <h1>热门推荐</h1>
      {
        hotList.map((item) => (
          <div className={styles.item} key={item.id}>
            {item.city}
          </div>
        ))
      }
    </div>
  )
})

const Search = () => {
  // 单向数据流
  // 反复生成 useCallback
  const [query, setQuery] = useState("");
  const handleQuery = (query) => {
    // api 请求
    console.log("debounce后", query);
    if (query === "") {
      setSuggestList([]);
      return;
    }
    setQuery(query);
    setSuggestList(query);
  };

  const { 
    hotList,
    suggestList, 
    setSuggestList, 
    setHotList 
  } = useSearchStore();

  useEffect(() => {
    setHotList();
  }, [setHotList]);

  // 控制搜索建议列表的显示
  const suggestListStyle = {
    display: query === "" ? "none" : "block",
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBox handleQuery={handleQuery} />
        {/* 维护性 */}
        <HotListItem hotList={hotList} />
        <div className={styles.list} style={suggestListStyle}>
          {suggestList.map((item, index) => (
            <div className={styles.item} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
