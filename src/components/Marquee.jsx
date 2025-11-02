const Marquee = ({ text, className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-marquee">
        {Array(10).fill(text).map((item, index) => (
          <span key={index} className="inline-block mx-8 text-6xl md:text-8xl font-bold text-gray-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
