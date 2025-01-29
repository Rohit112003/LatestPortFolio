export const Header = () => {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center items-center z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full 
          bg-white/10 backdrop-blur-md ">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70">Contact</a>
      </nav>

      {/* Background Blur Effect */}
      {/* <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white/20 to-transparent z-[-1]"></div> */}
    </div>
  );
};
