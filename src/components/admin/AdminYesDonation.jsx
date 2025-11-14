import AdminDonationTable from "./AdminDonationTable";
import CreateNewButton from "./CreateNewButton";

function AdminYesDonation({ donation }) {
  return (
    <div>
      <h2>Donation</h2>
      <CreateNewButton navigateTo="add-doner" />
      <AdminDonationTable
        data={donation}
        headers={["sr.no", "name", "email", "amount"]}
      />
    </div>
  );
}

export default AdminYesDonation;
