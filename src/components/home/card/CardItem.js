import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { MainContext, useContext } from '../../../context';
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function CardItem({item}) {
    const { cardLoading } = useContext(MainContext);
    return (
        <div className="card-item">
            {cardLoading ? (
                <>
                    <Skeleton width="100%" height={288} className="!rounded-3xl w- " />
                    <div className="flex items-center justify-between mt-1">
                        <Skeleton height={20} containerClassName="w-3/5" />
                        <Skeleton height={20} containerClassName="w-1/5" />
                    </div>
                    <Skeleton width="50%" height={20} />
                    <Skeleton width="50%" height={20} />
                    <Skeleton width="50%" height={20} />
                </>
            ) : (
                <>
                    <Swiper
                        navigation={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        simulateTouch={false}
                        modules={[Navigation, Pagination]}>
                        {
                            item.img && item.img.map(img => <SwiperSlide> <img src={img} /></SwiperSlide>)
                        }
                    </Swiper>
                    <AiFillHeart size={24} className="absolute top-4 right-4 z-20 stroke-white heart-icon"/>
                    <div className="flex items-center justify-between mt-3">
                        <b className="text-[15px]">{item.title}</b>
                        <div className="flex items-center justify-center">
                            <span>{item.star}</span>
                            <AiFillStar className="ml-1" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-700">{item.distance} kilometre uzakta</span>
                        <span className="text-gray-600">{item.date}</span>
                    </div>
                    <p className="text-[16px] mt-1"><b>{item.price} ₺</b> / gece</p>
                </>
            )}
        </div>
    )
}