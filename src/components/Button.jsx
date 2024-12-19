import clsx from "clsx";
import React from "react";
import Marker from "./Marker";

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
    // Content to pass in the return section.
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4
                rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                {/* Marker. */}
                <span className="absolute -left-[1px]">
                    <Marker markerFill={markerFill} />
                </span>

                {/* If icon exists, render image. */}
                {icon && (
                    <img
                        src={icon}
                        alt="circle"
                        className="size-10 mr-5 object-contain z-10"
                    />
                )}

                {/* Text part of the button. */}
                <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
                    {children}
                </span>

                {/* Glowy effect of the button's circumference. */}
                <span className="glow-before glow-after" />
            </span>
        </>
    )

    // Check if href exists.
    return href ? (
        // If exists, show link.
        <a className={clsx(
            'relative p-0.5 g5 rounded-2xl shadow-500 group',
            containerClassName
            )}
            href={href}
        >
            <Inner />
        </a>
    ) : (
        // Show button otherwise.
        <button className={clsx(
            'relative p-0.5 g5 rounded-2xl shadow-500 group',
            containerClassName    
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    )
}

export default Button;