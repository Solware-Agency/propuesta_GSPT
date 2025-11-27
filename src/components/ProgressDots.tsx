interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const ProgressDots = ({ total, current, onDotClick }: ProgressDotsProps) => {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-carousel flex items-center gap-2"
      role="tablist"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onDotClick(index)}
            className="focus-ring rounded-full transition-all duration-300"
            style={{
              width: isActive ? "12px" : "8px",
              height: isActive ? "12px" : "8px",
              minWidth: window.innerWidth < 640 ? "31px" : "44px",
              minHeight: window.innerWidth < 640 ? "31px" : "44px",
              padding: window.innerWidth < 640 ? "11px" : "16px",
              background: isActive
                ? "hsl(var(--primary))"
                : "rgba(255, 255, 255, 0.3)",
              transform: isActive ? "scale(1.25)" : "scale(1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: isActive 
                  ? (window.innerWidth < 640 ? "8px" : "12px")
                  : (window.innerWidth < 640 ? "6px" : "8px"),
                height: isActive 
                  ? (window.innerWidth < 640 ? "8px" : "12px")
                  : (window.innerWidth < 640 ? "6px" : "8px"),
                background: isActive
                  ? "hsl(var(--primary))"
                  : "rgba(255, 255, 255, 0.3)",
                borderRadius: "50%",
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ProgressDots;
