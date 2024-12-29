import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

export default function App() {
  return (
    <div className='background w-full flex flex-col h-screen '>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
