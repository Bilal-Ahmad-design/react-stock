const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Stock</h1>
      <div className='navLinks'>
        <a href='/kse100'>KSE100</a>
        <a href='/invest'>Invest</a>
        <a href='/account'>Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
