

export default function GridBG() {
  return (
    <div className="pointer-events-none fixed inset-0 w-full h-full z-0">
      <svg
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      >
        <defs>
          <pattern
            id="grid"
            width="60" height="60"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
} 