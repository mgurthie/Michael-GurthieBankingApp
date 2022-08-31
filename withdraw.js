const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  const activeUser = ctx.activeUser;
  const [total, setTotal] = React.useState(() => {
    return ctx.activeUser.balance;
  });
  const [empty, setEmpty] = React.useState(true);

  const updateUser = () => {
    let index = ctx.users.findIndex((user) => user.email === activeUser.email);
    ctx.users[index] = activeUser;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let status = Number(e.target.num.value);
    setTotal(total - status);
    alert(`You withdrawed: $ ${status}`);
  };

  React.useEffect(() => {
    activeUser.balance = total;
    if (activeUser.name != "Guest") {
      updateUser();
    }
  }, [total]);

  return (
    <div className="container-fluid main-container">
      <Card
        txtcolor="info"
        header="Withdraw"
        text={`${activeUser.name}'s Account balance $${total}`}
        body={
          <div className="container">
            <form onSubmit={handleSubmit}>
              <span>$ </span>
              <input
                type="number"
                name="num"
                min="0"
                max={total}
                onChange={(e) => {
                  e.target.value == 0 ? setEmpty(true) : setEmpty(false);
                }}
              ></input>
              <br />
              <button
                type="submit"
                className="btn btn-primary mt-2"
                disabled={empty}
              >
                Withdraw
              </button>
            </form>
          </div>
        }
      />
    </div>
  );
};

const SubmitBalance = (prop) => {
  return (
    <>
      <input type="number" name="num" min="0" max={prop.total}></input>
      <br />
      <input
        type="submit"
        className="btn btn-danger mt-2"
        value={prop.innerText}
      ></input>
    </>
  );
};
