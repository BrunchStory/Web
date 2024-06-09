import { useEffect, useState } from "react";
import { IWeek } from "../models/week.model";
import { getWeekList } from "../api/week.api";

export const useWeek = () => {
  const [weeks, setWeeks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      try {
        const res: any = await getWeekList();

        setWeeks(res);
        console.log(res);
      } catch (e) {
        setError("erro 발생");
        throw e;
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, []);

  return { weeks, error, loading };
};
