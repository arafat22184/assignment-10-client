import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full pt-12 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div className=" bg-[url('https://i.ibb.co.com/JW61PbKz/DSC-0061-1.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white px-4">
            <div className="bg-black/60 p-6 rounded-xl max-w-3xl text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold ">
                Discover Your Passion
              </h2>
              <p className="text-lg">
                Join hobby groups in your area and meet people who love what you
                love.
              </p>
              <Link
                to={"/groups"}
                className="px-3 py-2 rounded-lg hover:bg-indigo-700 bg-indigo-600"
              >
                Explore Groups
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/20X8fgZ2/united.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white px-4">
            <div className="bg-black/60 p-6 rounded-xl max-w-3xl text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold ">
                Create Your Own Group
              </h2>
              <p className="text-lg">
                Start something new and invite others to grow your community.
              </p>
              <Link
                to={"/groups"}
                className="px-3 py-2 rounded-lg hover:bg-indigo-700 bg-indigo-600"
              >
                Explore Groups
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/NdWLt5B7/mountain-Man.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white px-4">
            <div className="bg-black/60 p-6 rounded-xl max-w-3xl text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold ">
                Explore Diverse Hobbies
              </h2>
              <p className="text-lg">
                From painting to hiking, find your tribe and stay inspired every
                week.
              </p>
              <Link
                to={"/groups"}
                className="px-3 py-2 rounded-lg hover:bg-indigo-700 bg-indigo-600"
              >
                Explore Groups
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co.com/bMzmKNTf/group.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white px-4">
            <div className="bg-black/60 p-6 rounded-xl max-w-3xl text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold ">
                Connect. Create. Celebrate.
              </h2>
              <p className="text-lg">
                Be part of meaningful experiences. HobbyHub brings people
                together.
              </p>
              <Link
                to={"/groups"}
                className="px-3 py-2 rounded-lg hover:bg-indigo-700 bg-indigo-600"
              >
                Explore Groups
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
