import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useShallowCompareMemo from 'hooks/useShallowCompareMemo';

function useFetch(apiCall, params, forceRefresh = 0) {
  const [fetchResponse, setFetchResponse] = useState({ res: null, status: 'init', error: null });
  const { sessionToken } = useSelector(state => state.user.data);

  const request = useCallback(
    async data => {
      setFetchResponse(prevData => ({ ...prevData, status: 'loading' }));
      const response = await apiCall({ ...data, sessionToken });

      if (response?.error) {
        setFetchResponse({ res: null, status: 'error', error: response.error });
      } else {
        setFetchResponse({ res: response, status: 'success', error: null });
      }

      return response;
    },
    [apiCall, sessionToken]
  );

  useEffect(() => {
    if (params) {
      request(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request, forceRefresh, useShallowCompareMemo(params)]);

  return { ...fetchResponse, request };
}

export default useFetch;
