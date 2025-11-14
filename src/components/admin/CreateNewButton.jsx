import { useNavigate } from "react-router-dom";

function CreateNewButton({ navigateTo }) {
  const navigate = useNavigate();

  return <button onClick={() => navigate(navigateTo)}>Add +</button>;
}

export default CreateNewButton;
