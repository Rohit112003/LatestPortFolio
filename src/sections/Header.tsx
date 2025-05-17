export const Header = () => {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full 
          bg-white/10 backdrop-blur-md ">
      <a href="#hero" className="nav-item bg-white text-gray-900 hover:bg-white/70">Home</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#contact" className="nav-item ">Contact</a>

      </nav>  

      {/* Background Blur Effect */}
      {/* <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white/20 to-transparent z-[-1]"></div> */}
    </div>
  );
};
