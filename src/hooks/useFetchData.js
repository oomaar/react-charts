import { useState, useEffect } from "react";

function useFetchData(dataMethod) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () =>
      await dataMethod.then((res) => {
        setLoading(true);
        setData(res);
        setLoading(false);
      });
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
}

export default useFetchData;
