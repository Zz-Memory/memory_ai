import { useState } from "react";
import Child from "../Child";
import { useTheme } from "@/hooks/useTheme";

const Page = () => {
  const theme = useTheme();
  return (
    <>
      {theme}
      <Child></Child>
    </>
  );
};

export default Page;
