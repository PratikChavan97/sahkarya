import axios from "axios";
import { useEffect, useState } from "react";

import "./module.AdminQueryDisplay.css";
import AdminQueryTable from "./AdminQueryTable";

function AdminQueryDisplay() {
  const [queries, setQueries] = useState(null);

  useEffect(() => {
    async function getAllQueries() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/query");
        console.log(res.data.data.queries);
        setQueries(res.data.data.queries);
      } catch (err) {
        if (err) console.log("Can't fetch queries!");
      }
    }
    getAllQueries();
  }, []);

  // console.log(queries);
  return (
    <div className="admin-query-display">
      {!queries?.length ? (
        <>
          <h3>Sorry, No queries found</h3>
        </>
      ) : (
        <div>
          <h2>Queries</h2>
          <AdminQueryTable
            data={queries}
            headers={["sr. no", "name", "query", "actions"]}
          />
        </div>
      )}
    </div>
  );
}

export default AdminQueryDisplay;
