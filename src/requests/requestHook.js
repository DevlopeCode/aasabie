/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
import {useState, useEffect} from 'react';

const useFetch = (url, callback) => {
  const [data, setData] = useState('loading');

  useEffect(() => {
    fetch('https://www.aasabie.com/api/v1/' + url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        if (callback) {
          callback(data);
        }
      });
  }, [url]);

  return [data];
};

const useFetchPost = (url, data) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };

        const res = await fetch(
          'https://www.aasabie.com/api/v1/' + url,
          requestOptions,
        );
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, data]);

  return {response, error, isLoading};
};

const useFetchPostFormData = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async formData => {
    setIsLoading(true);

    try {
      const requestOptions = {
        method: 'POST',
        body: formData,
      };

      const res = await fetch(
        'https://www.aasabie.com/api/v1/' + url,
        requestOptions,
      );
      const json = await res.json();

      setResponse(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {fetchData, response, error, isLoading};
};
export {useFetchPostFormData};

export {useFetchPost};

export {useFetch};
