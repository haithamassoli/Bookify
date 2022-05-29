import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import blog5 from "../assets/blog-5.jpg";
import Image from "next/image";

function OurBlogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>our blogs</span>
      </h1>
      <div className="swiper blogs-slider">
        <Swiper
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            // @ts-ignore
            disableOnInteraction: "false",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="swiper-wrapper"
        >
          <SwiperSlide className="swiper-slide box">
            <div className="image">
              <Image src={blog1} alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <div className="image">
              <Image src={blog2} alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <div className="image">
              <Image src={blog3} alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <div className="image">
              <Image src={blog4} alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <div className="image">
              <Image src={blog5} alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default OurBlogs;
