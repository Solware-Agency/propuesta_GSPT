import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const SwipeIndicator = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has seen the indicator before
    const hasSeenIndicator = sessionStorage.getItem("swipe-indicator-seen");
    
    // Check user preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasSeenIndicator && !prefersReducedMotion) {
      setShow(true);

      // Fade out after 4 seconds
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("swipe-indicator-seen", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-tooltip animate-fade-in pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label="Swipe to see more"
    >
      <div className="glass-surface px-4 py-2 flex items-center gap-2">
        <span className="text-sm text-foreground/90">Swipe to see more</span>
        <div className="flex items-center">
          <ChevronRight
            className="w-4 h-4 text-primary animate-swipe-hint"
            aria-hidden="true"
          />
          <ChevronRight
            className="w-4 h-4 text-primary animate-swipe-hint -ml-2"
            style={{ animationDelay: "0.2s" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default SwipeIndicator;
