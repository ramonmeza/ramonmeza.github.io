"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Collapsible({ open, children, title }) {
    const [isOpen, setIsOpen] = useState(open);
    const [height, setHeight] = useState(
        open ? undefined : 0
    );

    const ref = useRef(null);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (!height || !isOpen || !ref.current) {
            return undefined;
        }

        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [height, isOpen]);

    useEffect(() => {
        if (isOpen) {
            setHeight(ref.current?.getBoundingClientRect().height);
        } else {
            setHeight(0);
        }
    }, [isOpen]);


    useEffect(() => {
        if (!height || !isOpen || !ref.current) return undefined;
        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [height, isOpen]);

    return (
        <div>
            <div className="p-2 bg-gray-200 grid grid-cols-2 justify-items-stretch my-2">
                <div className="text-xl md:text-2xl font-medium text-gray-700">{title}</div>
                <button type="button" className="justify-self-end" onClick={handleFilterOpening}>
                    {!isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="transition-height duration-800 ease-in-out overflow-hidden" style={{ height }} >
                <div ref={ref}>
                    <div className="p-3">{children}</div>
                </div>
            </div>
        </div>
    )
};