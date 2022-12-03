import Link from "next/link";
import React from "react";

import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=" mt-12">
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <Slider {...settings}>
                {[...Array(8)].map((a, e) => {
                    return (
                        <div key={e} >
                            <h3 className=" text-center py-3  text-3xl">
                                <Link href={`/blog/${e}`}>
                                    <div class=" px-4">
                                        <div class="rounded-lg h-48 lg:h-64 overflow-hidden">
                                            <img alt="content" class="object-cover object-center h-full w-full" src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                        </div>
                                        <h2 class="title-font text-base font-medium text-gray-900 mt-2 ">Doctors aren’t sure why these medications may be less effective in women </h2>
                                    </div>
                                </Link>
                            </h3>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Responsive;



