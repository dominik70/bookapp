import { useCallback, useEffect, useRef, useState } from 'react';

export const useFetch = <T>(url: string, skip = false) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef<{ [key: string]: T }>({});

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data;
        setData(data);
      }
      setError(null);
    } catch {
      setError('Failed to fetch data');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, [fetchData, skip]);

  return { data, isLoading, error, refetch: fetchData };
};
