import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

async function useFetchData(dataURL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const userToken = useAuth().user.token;

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(`${dataURL}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => setData(response.data.json()))
        .then(setData)
        .catch((error) => setError)
        .finally(() => setLoading(false));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataURL]);

  return { data, error, loading };
}

export default useFetchData;
