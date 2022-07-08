import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiFilter } from "react-icons/fi";
import { MainContext, useContext } from '../../../context';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import React from "react";
import data from "../../../data/category.json";


export default function Categories() {
    const slidesPerView = 15;
    const { loading, headerShadow } = useContext(MainContext);
    return (
        <div className={`categories ${headerShadow}`}>
           <div className="container">
           <div className={`mr-4 h-20 flex-1 flex items-center gap-x-6 ${loading ? "" : "hidden"}`}>
                {
                    Array(slidesPerView).fill(1).map((item, key) => (
                        <div className="flex flex-col items-center justify-center gap-y-1 pb-3 " key={key}>
                            <Skeleton
                                width={36}
                                height={36}
                                circle
                                containerClassName="avatar-skeleton"
                            />
                            <Skeleton width={70} height={8} />
                        </div>
                    ))
                }
            </div>
            <Swiper 
            simulateTouch={false} 
            navigation={true} 
            modules={[Navigation]} 
            className={`category-list ${loading ? "hidden" : ""}`}
            breakpoints={{
                "300": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                "400": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                "640": {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                "768": {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                "1024": {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
                "1280": {
                  slidesPerView: 10,
                  spaceBetween: 20,
                },
                "1536": {
                  slidesPerView: slidesPerView,
                  spaceBetween: 20,
                }
              }}
            >
                {data && data.map(item => <SwiperSlide key={item.id}><CategoryItem key={item.id} item={item} /></SwiperSlide>)}
            </Swiper>
            <button className="filter-btn">
                <FiFilter size={15} />
                <span>Filtreler</span>
            </button>
           </div>
        </div>
    )
}