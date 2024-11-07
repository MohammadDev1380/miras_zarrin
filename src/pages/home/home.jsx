import 'swiper/css';
import 'swiper/css/navigation';
import './home.scss';
// images
import mainBack from '../../assets/img/main-back.png';
import sliderOneDecor from '../../assets/img/Vector Smart Object copy 10.png';
import layer1 from '../../assets/img/Layer 7.png';
import layer2 from '../../assets/img/Layer 11.png';
import layer3 from '../../assets/img/Layer 10.png';
import layer4 from '../../assets/img/Layer 9.png';
import layer5 from '../../assets/img/Layer 8.png';
import layer6 from '../../assets/img/Layer 3 copy.png';
import fantasySliderNav from '../../assets/img/Vector Smart Object copy 21.png';
import roundCarpet from '../../assets/img/round-carpet.png';
import roundCarpetPattern from '../../assets/img/carpet-pattern1.png';
import vectorSec3 from '../../assets/img/Vector-section-3.png';
import pagesTitleDecor from '../../assets/img/Vector Smart Object copy 13.png';
import seeAllDecor from '../../assets/img/Vector Smart Object copy 15.png';
import carpetSample from '../../assets/img/sample-carpet.png';
import sec4Bg from '../../assets/img/section4-bg.png';
import sec5Bg from '../../assets/img/section5-bg.png';
import news1 from '../../assets/img/Layer 17.png';
import news2 from '../../assets/img/Layer 18.png';
import news3 from '../../assets/img/Layer 19.png';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// 
import ProCard from '../../components/product-card/product-card';
// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const HomePage = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.round-carpet',
                start: 'top top',
                end: '+=500',
                scrub: 1
            },
            defaults: {
                stagger: {
                    amount: 0.5,
                    from: 'start'
                },
                duration: 2,
                ease: 'power2',
                autoAlpha: 0
            }
        });
        tl.fromTo('.pro-card',
            {
                yPercent: 100
            },
            {
                yPercent: 0,
                y: 0,
                autoAlpha: 1
            }
        );
        // ------- //
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section-2',
                start: 'top top',
                end: '+=400',
                scrub: 1
            },
            defaults: {
                stagger: {
                    amount: 0.5,
                    from: 'start'
                },
                duration: 2,
                ease: 'power2',
                rotate: 0
            }
        });
        tl2.to('.round-carpet',
            {
                rotate: 180
            }
        )
    })


    return (
        <div className="home">
            <section className="section-1">
                <img src={mainBack} alt="main-back" />
            </section>
            <section className="section-2">
                <div className="container">
                    <img className="next-nav" src={fantasySliderNav} alt="" />
                    <img className="prev-nav" src={fantasySliderNav} alt="" />
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={6}
                        onSlideChange={() => {}}
                        onSwiper={() => {}}
                    >
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer1} alt="" />
                                </div>
                                <h6>فرش و گلیم</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer2} alt="" />
                                </div>
                                <h6>مینا کاری</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer3} alt="" />
                                </div>
                                <h6>خاتم کاری</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer4} alt="" />
                                </div>
                                <h6>ترمه</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer5} alt="" />
                                </div>
                                <h6>مس و خاتم</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer6} alt="" />
                                </div>
                                <h6>قلمکار</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer1} alt="" />
                                </div>
                                <h6>فرش و گلیم</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className="decor" src={sliderOneDecor} alt="" />
                                <div className="slide-card">
                                    <img src={layer2} alt="" />
                                </div>
                                <h6>مینا کاری</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="section-3">
                <img className="round-carpet-pattern" src={roundCarpetPattern} alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h1>
                                میراث زرین دستان پارس
                            </h1>
                            <p>
                                گروه صنایع دستی میراث زرین قصد دارد
                                تا مرز جدیدی برای صنایع دستی تمام کشور
                                باشد. این گروه محصولی با عرضه دست سازه های استاد کاران
                                به نام ایرانی و ضمانت اصالت کالا انتخابی تازه
                                برای خرید هنر دست ایرانی است.
                            </p>
                            <button className="btn">
                                تماس با کارشناسان ما
                            </button>
                        </div>
                        <div className="col-4">
                            <img className="round-carpet" src={roundCarpet} alt="" />
                        </div>
                        <div className="col-4 last-col">
                            <div className="row">
                                <div className="col-6" style={{
                                    marginBottom: 23
                                }}>
                                    <div className="mini-card">
                                        <img src={layer2} alt="" />
                                        <img src={vectorSec3} alt="" />
                                    </div>
                                </div>
                                <div className="col-6" style={{
                                    marginBottom: 23
                                }}>
                                    <div className="mini-card">
                                        <img src={layer1} alt="" />
                                        <img src={vectorSec3} alt="" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mini-card">
                                        <img src={layer3} alt="" />
                                        <img src={vectorSec3} alt="" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mini-card">
                                        <img src={layer4} alt="" />
                                        <img src={vectorSec3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="pages-title">
                    <img className="right" src={pagesTitleDecor} alt="" />
                    <h2>
                        با قالی دستباف ایرانی، هنر اصیل ایرانی را مهمان خانه خود کنید.
                    </h2>
                    <img className="left" src={pagesTitleDecor} alt="" />
                </div>
                <div className="see-all">
                    <span>
                        مشاهده همه
                    </span>
                    <br />
                    <img src={seeAllDecor} alt="" />
                </div>
                <div className="sec-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های گلدانی"
                                    subTitle="6 * 9"
                                />
                            </div>
                            <div className="col-3">
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح محرابی"
                                    subTitle="6 * 9"
                                />
                            </div>
                            <div className="col-3">
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح اقتباسی"
                                    subTitle="6 * 9"
                                />
                            </div>
                            <div className="col-3">
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح تلفیقی"
                                    subTitle="6 * 9"
                                />
                            </div>
                        </div>
                        {/* <Swiper
                            spaceBetween={25}
                            slidesPerView={4}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های گلدانی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح محرابی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح اقتباسی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح تلفیقی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح تلفیقی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProCard
                                    img={carpetSample}
                                    title="فرش های طرح تلفیقی"
                                    subTitle="6 * 9"
                                />
                            </SwiperSlide>
                        </Swiper> */}
                    </div>
                    <img className="bg" src={sec4Bg} alt="" />
                </div>
            </section>
            <section className="section-5">
                <img src={sec5Bg} alt="home-baner" />
            </section>
            <section className="section-6">
                <div className="pages-title">
                    <img className="right" src={pagesTitleDecor} alt="" />
                    <h2>
                        اخبار و مقالات
                    </h2>
                    <img className="left" src={pagesTitleDecor} alt="" />
                </div>
                <div className="see-all">
                    <span>
                        مشاهده همه
                    </span>
                    <br />
                    <img src={seeAllDecor} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="news-card">
                                <img src={news1} alt="" />
                                <div className="body">
                                    <h6>
                                        هنر قلم زنی در ایران:‌از نقش های کهن تا نوآوری های معاصر
                                    </h6>
                                    <p>
                                        هنرمندی ایرانی که با دقت فراوان نقوشی سنتی را روی بشقاب مسی
                                        حکاکی می کند و هنر اصیل حکاکی ایرانی را به نمایش می گذارد.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="news-card">
                                <img src={news2} alt="" />
                                <div className="body">
                                    <p>
                                        هنر قلم زنی در ایران:‌از نقش های کهن تا نوآوری های معاصر
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="news-card">
                                <img src={news3} alt="" />
                                <div className="body">
                                    <p>
                                        هنر قلم زنی در ایران:‌از نقش های کهن تا نوآوری های معاصر
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;