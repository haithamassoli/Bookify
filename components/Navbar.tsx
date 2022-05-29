function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> bookify
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart"></a>
            <div id="login-btn" className="fas fa-user"></div>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div>
      </header>

      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home"></a>
        <a href="#featured" className="fas fa-list"></a>
        <a href="#arrivals" className="fas fa-tags"></a>
        <a href="#reviews" className="fas fa-comments"></a>
        <a href="#blogs" className="fas fa-blog"></a>
      </nav>

      <div className="login-form-container">
        <div id="close-login-btn" className="fas fa-times"></div>

        <form action="">
          <h3>sign in</h3>
          <span>username</span>
          <input
            type="email"
            name=""
            className="box"
            placeholder="enter your email"
            id=""
          />
          <span>password</span>
          <input
            type="password"
            name=""
            className="box"
            placeholder="enter your password"
            id=""
          />
          <div className="checkbox">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me"> remember me</label>
          </div>
          <input type="submit" value="sign in" className="btn" />
          <p>
            forget password ? <a href="#">click here</a>
          </p>
          <p>
            don&apos;t have an account ? <a href="#">create one</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Navbar;
