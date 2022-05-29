import type { NextPage } from "next";
import Link from "next/link";
import OurBlogs from "../components/OurBlogs";
import Reviews from "../components/Reviews";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import book1 from "../assets/book-1.png";
import book2 from "../assets/book-2.png";
import book3 from "../assets/book-3.png";
import book4 from "../assets/book-4.png";
import book5 from "../assets/book-5.png";
import book6 from "../assets/book-6.png";
import book7 from "../assets/book-7.png";
import book8 from "../assets/book-8.png";
import book9 from "../assets/book-9.png";
import book10 from "../assets/book-10.png";
import stand from "../assets/stand.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
          <div className="swiper books-slider">
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
              <SwiperSlide>
                <Link href={`/author/2`}>
                  <Image
                    src={book1}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a>
                  <Image
                    src={book2}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a>
                  <Image
                    src={book3}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a>
                  <Image
                    src={book4}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a>
                  <Image
                    src={book5}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a>
                  <Image
                    src={book6}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </a>
              </SwiperSlide>
            </Swiper>
            <Image src={stand} className="stand" alt="" />
          </div>
        </div>
      </section>
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast"></i>
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-lock"></i>
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-redo-alt"></i>
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-headset"></i>
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </section>
      <section className="featured" id="featured">
        <h1 className="heading">
          <span>featured books</span>
        </h1>
        <div className="swiper featured-slider">
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              // @ts-ignore
              disableOnInteraction: "false",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book1} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book2} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book3} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book4} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book5} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book6} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book7} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                {" "}
                <Image src={book8} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book9} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <Image src={book10} alt="" />
              </div>
              <div className="content">
                <h3>featured books</h3>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
      <Reviews />
      <OurBlogs />
    </>
  );
};

export default Home;
