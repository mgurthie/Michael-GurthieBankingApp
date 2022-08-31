function Home() {
  //fetch all users data in context and display as a table
  const ctx = React.useContext(UserContext);
  const userdata = ctx.users.map((user, i) => {
    return <></>;
  });

  return (
    <Card
      bgcolor="black"
      txtcolor="white"
      header="Welcome to the Big Bad Bank"
      text="We are hear for all your banking needs"
      body={
        <table className="table" bgcolor="">
          <thead>
            <tr></tr>
            <tr>
              <img src="bank.png" class="card-img-bottom" />
            </tr>
          </thead>
          <tbody>{userdata}</tbody>
        </table>
      }
    />
  );
}
