import { useEffect, useState } from "react";
import { IKeyword } from "../models/keyword.model";
import { fetchKeyword } from "../api/keyword.api";

export const useKeyword = () => {
  const [keywords, setKeywords] = useState<IKeyword[]>([]);

  useEffect(() => {
    fetchKeyword().then((keywords) => {
      if (!keywords) return;

      // Todo: Keywords 엔터 처리
      setKeywords(keywords);
    });
  }, []);

  return { keywords };
};
