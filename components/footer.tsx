

const Footer = () => {
  return (
    <footer className="bg-primary-300 w-full">
      <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12 w-full">
        {/* copy rights */}
        <div className="text-white border-t border-white/20 py-6 w-full">
          <div className="container mx-auto h-full w-full">
            <div className="flex items-center justify-between h-full w-full">
              <span>&copy; 2024 The Gym</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
