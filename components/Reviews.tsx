import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import pic1 from "../assets/pic-1.png";
import pic2 from "../assets/pic-2.png";
import pic3 from "../assets/pic-3.png";
import pic4 from "../assets/pic-4.png";
import pic5 from "../assets/pic-5.png";
import pic6 from "../assets/pic-6.png";
import Image from "next/image";
function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        <span>client&apos;s reviews</span>
      </h1>

      <div className="swiper reviews-slider">
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
            <Image src={pic1} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <Image src={pic2} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <Image src={pic3} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide box">
            <Image src={pic4} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <Image src={pic5} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide box">
            <Image src={pic6} alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
