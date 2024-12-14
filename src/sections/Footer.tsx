export const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* <div className="bg-white rounded-full p-2">
            
          </div> */}
          <h1 className="text-lg font-bold">Intyoza Solutions</h1>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-center md:text-left mt-4 md:mt-0">
          © {new Date().getFullYear()} Intyoza. Empowering Health Education.
        </p>

        {/* Links Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/terms" className="text-sm hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
