import { useState, useEffect } from "react";

function useFetchData(dataMethod) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dataMethod.then((res) => {
        setData(res);
      });
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}

export default useFetchData;
