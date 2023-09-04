"use client"

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import supabase from "@/database/supabase";

const Carosel = () => {
    const [content, setcontent] = useState(null);
    const [founderror, seterror] = useState(null);

    useEffect(() => {
        const fetchcontent = async () => {
            const { data, error } = await supabase
                .from('Featured')
                .select();

            if (error) {
                seterror('No luck in finding content');
                setcontent(null);
                console.log(error);
            }
            if (data) {
                setcontent(data);
                seterror(null);
            }
        }
        fetchcontent();
    }, []);

    return (
        content && (
            <div className="">
                <h1 className="text-5xl p-10 text-center">Most Popular</h1>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    arrowSize={1000}




                >
                    {content.map((c, key) => (
                        <div key={key} className="rounded-2xl p-5 gap-2 bg-black/70 mb-10">
                            <img className="rounded-3xl" src={c.image_path} alt="" />
                            <div className="flex justify-center">
                                <h1 className="text-3xl m-3 p-4 rounded-md">{c.title}</h1>
                            </div>
                            <p>{c.desc}</p>
                            <div className="flex items-end">
                                <a href={`../Gallery/` + c.id} className="bg-white text-violet-700 p-5 rounded-md transition hover:text-white hover:bg-violet-700 mt-5 text-xl w-full text-center">
                                    <button>Watch Now</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    );
}

export default Carosel;

