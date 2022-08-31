function AllData() {
  //fetch all users data in context and display as a table
  const ctx = React.useContext(UserContext);
  const userdata = ctx.users.map((user, i) => {
    return (
      <tr key={i}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  });
  
  return (
    <Card
      txtcolor="white"
      header="All data in store"
      body={
        
        <table className="table" txtcolor="white">
          <thead>
            <tr >
              <th scope="col"><font color="#fff">Name</font></th>
              <th scope="col"><font color="#fff">Email</font></th>
              <th scope="col"><font color="#fff">Password</font></th>
              <th scope="col"><font color="#fff">Balance</font></th>
            </tr>
          </thead>
          <tbody>{userdata}</tbody>
        </table>
      
      }
    />
  );
}
