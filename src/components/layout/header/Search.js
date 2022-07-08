import { FaSearch } from 'react-icons/fa';
import { MainContext, useContext } from '../../../context';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Search() {

    const { loading } = useContext(MainContext);

    return (
        <div className='search'>
            <div className='search-inner'>
                <button className='left'>{loading ? <Skeleton width={100} /> : "Herhangi bir yer" }  </button>
                <span className='vertical-line'></span>
                <button className='center'>{loading ? <Skeleton width={100} /> : "Herhangi bir hafta" }</button>
                <span className='vertical-line'></span>
                <button className='right'>{loading ? <Skeleton width={100} /> : "Misafir Ekleyin" }<div><FaSearch size={13} /></div></button>
            </div>
        </div>
    )
}