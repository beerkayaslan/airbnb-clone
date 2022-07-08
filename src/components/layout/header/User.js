import { RiGlobalLine } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { MainContext, useContext } from '../../../context';

export default function User() {

    const { loading } = useContext(MainContext);

    return (
        <div className='user'>
            {
                loading ? "" : (<div className='left-buttons'>
                    <button>Ev sahibi olun</button>
                    <button><RiGlobalLine size={20} /></button>
                </div>)
            }

            <div className='user-dropdown'>
                <div className='header-user-icon'><FiMenu size={20} /><FaUserCircle className='user-circle-icon' size={20} /></div>
            </div>
        </div>
    )
}