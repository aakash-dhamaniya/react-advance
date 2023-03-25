import React from "react";
import "./AddMedicine.css";
import MedicineForm from "./MedicineForm";
function AddMedicne(props) {
  return <MedicineForm onShowUpdate={props.onShowUpdate} />;
}

export default AddMedicne;
