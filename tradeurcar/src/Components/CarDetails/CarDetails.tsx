import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../Models/CarFullDetails";
import { RootState } from "../../Redux/configureStore";
import { getCarDetails } from "../../Redux/Store/CarDetails/actions";

function CarDetails() {
  let { id } = useParams();
  const carDetails = useSelector<RootState>(
    (state) => JSON.parse(JSON.stringify(state.carDetails)).cardetails
  ) as CarFullDetails;

  const [carid, setCarid] = useState(id!);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarDetails(carid));
  }, []);

  return <div>{carDetails?.cost}</div>;
}

export default CarDetails;
