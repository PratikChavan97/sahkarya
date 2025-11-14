import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDonationTable({ data = [], rowsPerPage = 5, headers = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteDoner, setDeleteDoner] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Compute data slice for current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  console.log(currentRows);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  function handleDelete(id) {
    setId(id);
    setDeleteDoner(true);
    navigate("/dashboard/");
  }

  function handleUpdate(id) {
    navigate(`/dashboard/donation/update-doner/${id}`);
  }

  useEffect(() => {
    if (deleteDoner) {
      async function deleteDonerId() {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/v1/donation/${id}`);
          console.log("Doner deleted");
        } catch (err) {
          if (err) console.log("Could not delete doner");
        }
      }
      deleteDonerId();
    }
  }, [id, deleteDoner]);

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.toUpperCase()}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.amount}</td>
              <td>
                <button onClick={() => handleUpdate(row._id)}>
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button onClick={() => handleDelete(row._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminDonationTable;
