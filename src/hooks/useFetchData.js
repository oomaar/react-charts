import axios from "axios";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userToken = useAuth().user.token;

  const initialStartDateYear = DateTime.now().c.year;
  const initialStartDateMonth = DateTime.now().c.month;
  const initialStartDateDay = DateTime.now().c.day;
  const initialStartData = `${initialStartDateYear}-${initialStartDateMonth}-${initialStartDateDay}`;
  // console.log(
  //   "🚀 ~ file: useFetchData.js ~ line 12 ~ useFetchData ~ DateTime.now()",
  //   DateTime.now().c.year
  // );
  const initialEndDate = DateTime.now().toJSDate();
  const initialEndDateFrom = DateTime.fromJSDate(initialEndDate);
  console.log(
    "🚀 ~ file: useFetchData.js ~ line 20 ~ useFetchData ~ initialEndDateFrom",
    initialEndDateFrom
  );

  useEffect(() => {
    const fetchData = async () =>
      await axios
        // .get(`${url}?from=${initialStartData}&to=${initialStartData}`, {
        .get(`${url}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          setLoading(true);
          setData(res.data);
          setLoading(false);
        });
    fetchData();
  }, []);

  return { data, loading };
}

export default useFetchData;
