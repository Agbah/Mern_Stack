import{FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (

    <Header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'/>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Sedem</span>
        <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex-items-start '>
        <input type="text" placeholder="search....."className='bg transperent 
        focus:outline-none'/>
        <FaSearch className='text bg-slate-500 '/>
    
        <ul className='flex gap-4 '>




        </ul>

        </form>
        </div>
    </Header>
    
  )
}
