import { useEffect, useRef, useState, useCallback } from "react";
import Header from "@/components/Header";
import ProgressDots from "@/components/ProgressDots";
import SwipeIndicator from "@/components/SwipeIndicator";
import SlideCover from "@/components/slides/SlideCover";
import SlideDiagnosis from "@/components/slides/SlideDiagnosis";
import SlideObjectives from "@/components/slides/SlideObjectives";
import SlideWarranty from "@/components/slides/SlideWarranty";
import SlideTimeline from "@/components/slides/SlideTimeline";
import SlidePricing from "@/components/slides/SlidePricing";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSlides = 6;
  const isScrollingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const slides = [
    <SlideCover key="cover" />,
    <SlideDiagnosis key="diagnosis" />,
    <SlideObjectives key="objectives" />,
    <SlidePricing key="pricing" />,
    <SlideTimeline key="timeline" />,
    <SlideWarranty key="warranty" />,
  ];

  const scrollToSlide = useCallback((index: number) => {
    if (carouselRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      // Reset vertical scroll of target slide
      if (slideRefs.current[index]) {
        slideRefs.current[index]!.scrollTop = 0;
      }
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  }, []);

  const handlePrevSlide = useCallback(() => {
    if (currentSlide > 0 && !isScrollingRef.current) {
      scrollToSlide(currentSlide - 1);
    }
  }, [currentSlide, scrollToSlide]);

  const handleNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1 && !isScrollingRef.current) {
      scrollToSlide(currentSlide + 1);
    }
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const slideWidth = carousel.offsetWidth;
        const newSlide = Math.round(carousel.scrollLeft / slideWidth);
        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide);
        }
      }, 50);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevSlide, handleNextSlide]);

  useEffect(() => {
    // Reset vertical scroll when slide changes
    if (slideRefs.current[currentSlide]) {
      slideRefs.current[currentSlide]!.scrollTop = 0;
    }
  }, [currentSlide]);

  // Touch event handlers for controlled swipe
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchStartXRef.current - touchEndX;
      const deltaY = Math.abs(touchStartYRef.current - touchEndY);
      const threshold = 50;

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > deltaY) {
        if (deltaX > 0) {
          // Swipe left - next slide
          handleNextSlide();
        } else {
          // Swipe right - previous slide
          handlePrevSlide();
        }
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handlePrevSlide, handleNextSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Header />

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory hide-scrollbar pt-20 pb-16"
        style={{
          scrollSnapType: "x mandatory",
          scrollSnapStop: "always",
          WebkitOverflowScrolling: "auto",
          touchAction: "pan-x"
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`min-w-full h-full snap-start snap-always hide-scrollbar ${
              index === 0 ? "overflow-hidden" : "overflow-y-auto"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:block">
        {currentSlide > 0 && (
          <button
            onClick={handlePrevSlide}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-carousel neuo-pressable p-4 focus-ring"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" aria-hidden="true" />
          </button>
        )}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={handleNextSlide}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-carousel neuo-pressable p-4 focus-ring"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" aria-hidden="true" />
          </button>
        )}
      </div>

      <ProgressDots
        total={totalSlides}
        current={currentSlide}
        onDotClick={scrollToSlide}
      />
      <SwipeIndicator />
    </div>
  );
};

export default Index;
