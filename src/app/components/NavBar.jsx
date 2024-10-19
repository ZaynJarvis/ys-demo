const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 mt-4 mr-4 z-50">
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="text-white hover:text-gray-300 cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#products" className="text-white hover:text-gray-300 cursor-pointer">Products</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-300 cursor-pointer">About Us</a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-300 cursor-pointer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;