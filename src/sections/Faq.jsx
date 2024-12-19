import React from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
    // We want half of the faqs on the left side and the other half on the right side.
    const halfLength = Math.floor(faq.length / 2);

    return (
        <section>
            <Element name="faq" className="relative">
                <div className="container relative z-2 py-28">
                    <div className="">
                        <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
                            There is a North Korean mod for Half Life 2.
                        </h3>
                        <p className="body-1 max-lg:max-w-sm">Q & A Section</p>
                    </div>

                    {/* Small vertical line. */}
                    <div className="faq-ling_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />

                    {/* FAQ cards. */}
                    <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
                        <div className="container flex gap-10 max-lg:block">
                            {/* Icon in the middle. */}
                            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4
                                flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                                <img
                                    src="/images/faq-logo.svg"
                                    alt="logo"
                                    className="size-1/2"
                                />
                            </div>

                            {/* First half of FAQ cards. */}
                            <div className="relative flex-1 pt-24">
                                {faq.slice(0, halfLength).map((item, index) => (
                                    <div className="">
                                        <FaqItem key={item.id} item={item} index={index} />
                                    </div>
                                ))}
                            </div>

                            {/* Second half of FAQ cards. Hidden in mobile devices. */}
                            <div className="relative flex-1 lg:pt-24">
                                {faq.slice(halfLength).map((item, index) => (
                                    <div className="">
                                        <FaqItem key={item.id} item={item} index={halfLength + index} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vertical line that separates the two halves. */}
                        <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Faq;