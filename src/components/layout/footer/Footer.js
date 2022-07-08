import { RiGlobalLine } from 'react-icons/ri';
import { FaChevronUp } from 'react-icons/fa';
import { BsFillMapFill } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { MainContext, useContext } from '../../../context';

export default function Footer() {

    const { loading } = useContext(MainContext);

    return (
        <footer className='fixed bottom-0 left-0 w-full z-50 bg-white border-t'>
            <button className='fixed bottom-24 transition-all left-1/2 -translate-x-1/2 bg-[#222222] text-white rounded-full px-6 py-3 flex items-center gap-x-2 font-medium text-md hover:scale-105 hover:drop-shadow-xl'>Haritayı Göster <BsFillMapFill /></button>
            <div className="container flex items-center justify-between py-3 flex-col md:flex-row">
                <div className='flex items-center justify-center gap-x-3 footer-left'>
                    {loading ? <Skeleton width={350} /> : (
                        <>
                            <p>© 2022 Airbnb, Inc.</p>
                            <a href="#">Gizlilik</a>
                            <a href="#">Şartlar</a>
                            <a href="#">Site haritası</a>
                        </>
                    )}
                </div>
                <div className='flex items-center justify-center gap-x-5 font-medium'>
                    {loading ? <Skeleton width={350} /> : (
                        <>
                            <button className='flex items-center gap-x-2'><RiGlobalLine size={20} /> <span>Türkçe(TR)</span></button>
                            <button><span>₺</span> TRY</button>
                            <button className='flex items-center gap-x-2'><span>Destek ve kaynaklar</span> <FaChevronUp /></button>
                        </>
                    )}
                </div>
            </div>
        </footer>
    )
}