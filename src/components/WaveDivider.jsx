const WaveDivider = ({ color = 'primary', className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <path
          d="M0,0 C150,80 350,0 600,60 C850,120 1050,40 1200,80 L1200,120 L0,120 Z"
          className={`fill-${color}`}
          style={{ fill: color === 'primary' ? '#00A67E' : color }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
