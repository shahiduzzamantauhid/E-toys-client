import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `E-Toys | ${title}`;
  }, [title]);
};

export default useTitle;
