import React, {useEffect} from 'react';
import {useInfiniteQuery} from 'react-query';

const fetchPosts = async ({pageParam = 1}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
  );
  return res.json();
};

const InfiniteScrollList = () => {
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('posts', fetchPosts, {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length ? allPages.length + 1 : undefined,
    });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold">Infinite Scroll List</h2>
      <ul>
        {data?.pages.flat().map(post => (
          <li key={post.id} className="p-2 border-b">
            {post.title}
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="w-full mt-2 p-2 bg-blue-500 text-white rounded">
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default InfiniteScrollList;
