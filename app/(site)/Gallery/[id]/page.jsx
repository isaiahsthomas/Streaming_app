"use client"

import React, { useState, useEffect } from "react";
import supabase from "@/database/supabase";

const Page = ({ params }) => {
    let { id } = params;
    const intId = parseInt(id, 10);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const [featured, setFeatured] = useState(null);
    const [featError, setFeatError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const { data, error } = await supabase
                .from('Contentdesc')
                .select()
                .eq('id', intId)
                .single();

            if (error) {
                setError('No luck in finding content');
                setContent(null);
                console.log(error);
            }
            if (data) {
                setContent(data);
                setError(null);
            }
        };
        fetchContent();

        const fetchFeatured = async () => {
            const { data, error } = await supabase
                .from('Featured')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                setFeatError('No luck in finding featured content');
                setFeatured(null);
                console.log(error);
            }
            if (data) {
                setFeatured(data);
                setFeatError(null);
            }
        };
        fetchFeatured();

    }, [id]);

    return (
        <div>

            <div className="flex justify-center items-center h-screen"> {/* Center content vertically */}
                {content && content.movie_path && (
                    <video controls>
                        <source src={content.movie_path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {featured && featured.movie_path && (
                    <video className="object-cover" controls>
                        <source src={featured.movie_path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            <p>Page ID: {id}</p>
        </div>
    );
}

export default Page;