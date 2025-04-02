import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./banner.css";

const Banner = () => {
  const [sliderShow, setSliderShow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://jio-cinema-ea348-default-rtdb.firebaseio.com/Shows.json"
        );
        setSliderShow(response.data || []);
      } catch (error) {
        console.error("Error fetching shows:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchShows();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <main className="banner">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop={true}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.5}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="banner-swiper"
      >
        {sliderShow.slice(0, 6).map((show, index) => (
          <SwiperSlide key={index} className="banner-slide">
            <div className="slide-content">
              <img src={show.thumbnail_url} alt={show.title} />
              <div className="overlay"></div>
              <div className="details">
                <img src={show.logo} alt={show.title} /> 
                <p>
                  {show.language} • {show.genre} • {show.rating || "U/A 13+"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Banner;
