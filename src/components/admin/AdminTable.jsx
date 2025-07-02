import { Table } from "react-bootstrap";

function AdminTable({ users }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user._id}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AdminTable;
