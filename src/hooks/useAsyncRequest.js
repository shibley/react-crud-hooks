import { useState, useEffect } from "react";

const useAsyncRequest = (amount, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://btccpr-strapi.herokuapp.com/dictionaries?_limit=${amount}`

        );
        const json = await response.json();
        setData(json, setLoading(false));
      } catch (err) {
        console.warn("Something went wrong fetching the API...", err);
        setLoading(false);
      }
    };

    const posdData = async () => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
      };
      fetch(`https://btccpr-strapi.herokuapp.com/dictionaries`, requestOptions)
        .then(response => response.json());
      //.then(data => setPostId(data.id));
    };


    if (amount) {
      fetchData(amount);
    }
    else if (method === "post") {
      posdData();
    }
  }, [amount]);

  return [data, loading];
};

export default useAsyncRequest;
