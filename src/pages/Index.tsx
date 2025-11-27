import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import ProgressDots from "@/components/ProgressDots";
import SwipeIndicator from "@/components/SwipeIndicator";
import SlideCover from "@/components/slides/SlideCover";
import SlideDiagnosis from "@/components/slides/SlideDiagnosis";
import SlideObjectives from "@/components/slides/SlideObjectives";
import SlideWebsite from "@/components/slides/SlideWebsite";
import SlideImpact from "@/components/slides/SlideImpact";
import SlideTimeline from "@/components/slides/SlideTimeline";
import SlidePricing from "@/components/slides/SlidePricing";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSlides = 7;

  const slides = [
    <SlideCover key="cover" />,
    <SlideDiagnosis key="diagnosis" />,
    <SlideObjectives key="objectives" />,
    <SlideWebsite key="website" />,
    <SlideImpact key="impact" />,
    <SlideTimeline key="timeline" />,
    <SlidePricing key="pricing" />,
  ];

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      // Reset vertical scroll of target slide
      if (slideRefs.current[index]) {
        slideRefs.current[index]!.scrollTop = 0;
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const slideWidth = carousel.offsetWidth;
      const newSlide = Math.round(carousel.scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

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
  }, [currentSlide]);

  useEffect(() => {
    // Reset vertical scroll when slide changes
    if (slideRefs.current[currentSlide]) {
      slideRefs.current[currentSlide]!.scrollTop = 0;
    }
  }, [currentSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Header />

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar pt-20 pb-16"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className="min-w-full h-full snap-start overflow-y-auto hide-scrollbar"
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
