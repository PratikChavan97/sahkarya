import CreateNewButton from "./CreateNewButton";

function AdminNoDonation() {
  return (
    <div>
      <h2>No Donations</h2>
      <CreateNewButton navigateTo="add-doner" />
    </div>
  );
}

export default AdminNoDonation;
