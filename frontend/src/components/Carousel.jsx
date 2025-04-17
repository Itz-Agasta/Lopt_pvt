import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Example slides: Replace with your own images or content
const slides = [
  <img src="https://picsum.photos/id/1018/300/200" alt="slide1" />,
  <img src="https://picsum.photos/id/1015/300/200" alt="slide2" />,
  <img src="https://picsum.photos/id/1019/300/200" alt="slide3" />,
];
const slideWidth = 300; // width of a single slide (in px)

export function InfiniteCarousel() {
  const controls = useAnimation();
  const isAnimating = useRef(true);

  useEffect(() => {
    const animate = async () => {
      while (!isAnimating.current) {
        await controls.start({
          x: -slides.length * slideWidth,
          transition: { duration: 10, ease: "linear" },
        });
        controls.set({ x: 0 });
      }
    };
    animate();
    return () => {
      isAnimating.current = false;
    };
  }, [controls]);

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      style={{
        overflow: "hidden",
        width: slideWidth * slides.length,
        margin: "2rem auto",
      }}
    >
      <motion.div style={{ display: "flex" }} animate={controls}>
        {duplicatedSlides.map((slide, i) => (
          <div key={i} style={{ width: slideWidth, flex: "none" }}>
            {slide}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
