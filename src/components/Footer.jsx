const Footer = () => {
  return (
    <footer className="bg-cream py-8 md:py-12">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-lg md:text-xl">
            <span className="font-bold text-dark">prabhu sriramulu</span>
            {' | '}
            <span className="text-primary font-semibold">product manager</span>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
