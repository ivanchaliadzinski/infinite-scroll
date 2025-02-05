import { useEffect, useState } from 'react';
import { User } from '../types/generic';
import { useGetUsersQuery } from '../redux/mainApi';

const useUserListSetup = () => {
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<User[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { refetch, isFetching, isLoading, data, error } = useGetUsersQuery({ page });

  const total = data?.total || 0;
  const hasMore = (page + 1) * 10 < total;

  useEffect(() => {
    if (data?.users && !isFetching) {
      if (!page) {
        setItems(data.users);
        return;
      }
      setItems((prevState) => [...prevState, ...data.users]);
    }
  }, [data, page, isFetching]);

  const handleLoadMore = () => {
    if (isRefreshing || isFetching || !hasMore) return;

    setPage((prevState) => prevState + 1);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setPage(0);

    await refetch().unwrap();

    setIsRefreshing(false);
  };
  return { items, handleRefresh, handleLoadMore, total, isFetching, page, error, isLoading };
};

export default useUserListSetup;
