const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-black">
      <NavLink className="navbar-brand" to="/">
        <img src="bank2.png" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Home screen"
          >
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              to="/create_account/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Home screen"
            >
              Create Account
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              to="/deposit/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Deposit your money here"
            >
              Deposit
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              to="/withdraw/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Withdraw your money here"
            >
              Withdraw
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              to="/all_data/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="See all data"
            >
              All data
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: "#0432ff" }}
              to="/login/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Already have an account?"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
