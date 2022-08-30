import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import VehicleForm from "./VehicleForm";
import TrailerForm from "./TrailerForm";

const Vehicles = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  // const [vehicleComponent, setVehicleComponent] = useState([]);
  // const [trailerComponent, setTrailerComponent] = useState([]);
  // const [vehicleFormShow, setVehicleFormShow] = useState(true);
  // const [trailerFormShow, setTrailerFormShow] = useState(true);

  const handleShowForms = (e) => {
    // setVehicleFormShow(true);
    // vehicleFormShow === true
    // ? setTrailerFormShow(true)
    // : setTrailerFormShow(false);
    // setVehicleComponent([...vehicleComponent, <VehicleForm />]);
    // setTrailerComponent([...trailerComponent, <TrailerForm />]);
  };
  return (
    <div className="Vehicles">
      <a className="addBtn" href="#" onClick={handleShowForms}>
        <GoPlus />
        {"  "}
        Add Vehicle/Trailer
      </a>
      <Row>
        {/* {vehicleFormShow === true
          ? vehicleComponent.map((item, i) => <VehicleForm key={item} />)
          : ""}
        {trailerFormShow === !true
          ? trailerComponent.map((item, i) => <TrailerForm key={item} />)
          : ""} */}
        <VehicleForm key={0} />
        <TrailerForm key={1} />
      </Row>
    </div>
  );
};

export default Vehicles;
