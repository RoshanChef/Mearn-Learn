import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';

export default function App() {
  const { fetchBlogData } = useContext(AppContext);

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className='background w-full flex flex-col h-screen '>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
