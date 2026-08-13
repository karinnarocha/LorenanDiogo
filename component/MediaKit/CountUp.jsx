// components/CountUp.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, duration = 2000, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate();
                    observer.unobserve(node); // stop watching once triggered
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const animate = () => {
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
        };

        requestAnimationFrame(step);
    };

    return (
        <span ref={ref} style={{ display: "inline-block" }}>
            {count}
            {suffix}
        </span>
    );
}