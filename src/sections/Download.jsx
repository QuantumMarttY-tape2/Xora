import React from "react";
import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";

const Download = () => {
    return (
        <section>
            <Element name="download" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
                <div className="container">
                    <div className="flex items-center">
                        <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                            {/* Logo. */}
                            <div className="mb-10">
                                <img
                                    src="/images/xora.svg"
                                    width={160}
                                    height={55}
                                    alt="xora"
                                />
                            </div>

                            <p className="body-1 mb-10 max-w-md">
                                Try it now for free on iOS, Android, PC, Web - whatever your flavor, we have got you covered.
                            </p>

                            {/* Icons. */}
                            <ul className="flex flex-wrap items-center gap-6">
                                {links.map(({ id, url, icon }) => (
                                    <li
                                        key={id}
                                        className="download_tech-link download_tech-link_last-before
                                            download_tech-link_last-after"
                                    >
                                        {/* Links. */}
                                        <a href={url} className="size-22 download_tech-icon_before relative flex
                                            items-center justify-center rounded-half border-2 border-s3 bg-s1
                                            transition-borderColor duration-500">
                                            {/* Marker. */}
                                            <span className="absolute -top-2 rotate-90">
                                                <Marker />
                                            </span>

                                            {/* Image in the background. */}
                                            <img
                                                src="/images/lines.svg"
                                                alt="lines"
                                                className="absolute size-13/20 object-contain"
                                            />

                                            {/* Logos of the platforms. */}
                                            <span className="download_tech-icon">
                                                {icon}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Example app image. */}
                        <div className="mb-10 maxmd:hidden">
                            {/* Circumference, */}
                            <div className="download_preview-before download_preview-after rounded-40
                                relative w-[955px] border-2 border-s5 p-6">
                                {/* Background filling. */}
                                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                                    {/* Dots that resemble the top left macOS webpage. */}
                                    <span className="download_preview-dot left-6 bg-p2" />
                                    <span className="download_preview-dot left-11 bg-s3" />
                                    <span className="download_preview-dot left-16 bg-p1/15" />

                                    {/* App interface image. */}
                                    <img
                                        src="/images/screen.jpg"
                                        width={855}
                                        height={655}
                                        alt="screen"
                                        className="rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company logos. */}
                    <ul className="mt-24 flex justify-center max-lg:hidden">
                        {logos.map(({ id, title, url, width, height }) => (
                            <li key={id} className="mx-10">
                                <img
                                    src={url}
                                    width={width}
                                    height={height}
                                    alt={title}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Element>
        </section>
    )
}

export default Download;