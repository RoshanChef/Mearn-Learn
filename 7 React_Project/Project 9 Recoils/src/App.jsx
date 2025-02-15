import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    console.log('running...');
        fetchBlogPosts();
  }, []);

  return (
    <div className='w-full flex flex-col h-screen overflow-x-hidden'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
