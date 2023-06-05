
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle";


const Catagory = () => {
    return (
        // <Swiper
        //     effect={"coverflow"}
        //     grabCursor={true}
        //     centeredSlides={true}
        //     slidesPerView={"auto"}
        //     coverflowEffect={{
        //         rotate: 50,
        //         stretch: 0,
        //         depth: 100,
        //         modifier: 1,
        //         slideShadows: true,
        //     }}
        //     pagination={true}
        //     modules={[EffectCoverflow, Pagination]}
        //     className="mySwiper"
        // >
        //     <SwiperSlide>
        //         <img src={slide1} />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img src={slide2}  />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img src={slide3}  />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img src={slide4}  />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <img src={slide5}  />
        //     </SwiperSlide>
        // </Swiper>



<section>
<SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
<Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-40 "
      >
        <SwiperSlide>
            <img src={slide1} alt="" /></SwiperSlide>
            <h4 className="text-4xl uppercase text-center -mt-20">salad</h4>
        <SwiperSlide>
            <img src={slide2} alt="" /></SwiperSlide>
            <h4 className="text-4xl uppercase text-center -mt-20">soup</h4>
        <SwiperSlide>
            <img src={slide3} alt="" /></SwiperSlide>
            <h4 className="text-4xl uppercase text-center -mt-20"> pizza </h4>
        <SwiperSlide>
            <img src={slide4} alt="" /></SwiperSlide>
            <h4 className="text-4xl uppercase text-center -mt-20">dessert</h4>
        <SwiperSlide>
            <img src={slide5} alt="" /></SwiperSlide>
            <h4 className="text-4xl uppercase text-center -mt-20">salad</h4>
      </Swiper>
</section>
    );
};

export default Catagory;