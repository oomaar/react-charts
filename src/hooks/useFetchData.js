import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userToken = useAuth().user.token;

  useEffect(() => {
    const fetchData = async () =>
      await axios
        .get(`${url}`, { headers: { Authorization: `Bearer ${userToken}` } })
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
