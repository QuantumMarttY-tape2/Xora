import clsx from "clsx";
import React from "react";

const TestimonialItem = ({ item, containerClassName }) => {
    return (
        // Grid constructed using before and after.
        <div className={clsx("relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
            containerClassName)}>
            
            {/* Comments. */}
            <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>

            {/* Avatars. */}
            <div className="flex items-center max-xl:-mr-8">
                <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
                    <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className="size-full object-cover"
                    />
                </div>

                <div className="">
                    {/* Names. */}
                    <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>

                    {/* Roles. */}
                    <p className="small-compact uppercase text-s3">{item.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;