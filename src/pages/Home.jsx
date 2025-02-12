import { Button, CourseFlow } from '../components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='sm:p-6 p-3 flex flex-col min-h-screen'>
      <div className='relative w-full border border-gray-700 rounded-lg p-4 shadow-lg h-screen'>
        <CourseFlow />
        <Button style='absolute top-4 right-4'>
          <Link to='/home/edit'>Edit</Link>
        </Button>
      </div>
    </div>
  );
}
