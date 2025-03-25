import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, prefix = "", color = "#2f388d", fontSize = "6rem" }) => {
	const counterRef = useRef(null);

	useEffect(() => {
        const el = counterRef.current;

        gsap.fromTo(
            el,
            { innerText: 0 },
            {
                innerText: end,
                duration: 1,
                snap: { innerText: 1 },
                ease: "power1.out",
                scrollTrigger: {
                    trigger: el, // Activa la animación cuando el elemento aparece
                    start: "top 95%", // Inicia cuando el 80% del viewport ve el elemento
                    toggleActions: "play none none none",
                }
            }
        );
    }, [end]);
	return <span ref={counterRef} style={{ color, fontSize, fontWeight: "901" }}>{prefix}0</span>;
};

export default Counter;
