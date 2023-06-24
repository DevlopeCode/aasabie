import { useState, useEffect } from "react";

const useFetch = (url, callback) => {
  
    const [data, setData] = useState('loading');
  
    useEffect(() => {
      fetch('https://www.aasabie.com/api/v1/'+url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            if(callback)callback(data)
        });
    }, [url]);
  
    return [data];
};

export {useFetch}
  