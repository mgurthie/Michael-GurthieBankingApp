function Spa() {
  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Michael",
              email: "mgurthie@wbtv.com",
              password: "password",
              balance: 100,
            },
            {
              name: "Mike",
              email: "mike@me.com",
              password: "hackme22",
              balance: 100,
            },
            {
              name: "Lisa",
              email: "lisa@mit.edu",
              password: "password",
              balance: 400,
            },
          ],
          activeUser: {
            name: "Guest",
            email: "guest@badbank.com",
            password: "password",
            balance: 0,
          },
        }}
      >
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/create_account/" exact component={CreateAccount} />
        <Route path="/login/" exact component={Login} />
        <Route path="/deposit/" exact component={Deposit} />
        <Route path="/withdraw/" exact component={Withdraw} />
        <Route path="/all_data/" exact component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
