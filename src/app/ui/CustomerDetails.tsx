import { useContext, useState } from "react";
import { CustomersContext } from "../context/CustomersContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import RemovalBtn from "./RemovalBtn";
import { HiPencilAlt } from "react-icons/hi";

const CustomerDetails = ({ customer, setShowUpdateForm }) => {
  const { dispatch } = useContext(CustomersContext);

  const handleClick = async () => {
    const response = await fetch("/api/customers/" + customer._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CUSTOMER", payload: json });
      setLoading(false);
      setError(null);
    }
  };

  return (
    <Card className="customer-details mb-3">
      {loading && <h1 className="no-customers">Loading...</h1>}
      {error && <h1 className="error">Something went wrong</h1>}
      <Card.Body>
        <Card.Title>{customer.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {customer.isActivated ? "Activated" : "Deactivated"}
        </Card.Subtitle>
        <Card.Text>
          Customer Email : {customer.email}
          <br />
          Customer Contact Number : {customer.number}
          <br />
          Customer Store Name : {customer.store_Name}
          <br />
          Customer Address : {customer.address}
        </Card.Text>
        <button
          className="btn btn-warning"
          onClick={() => setShowUpdateForm(true)}
        >
          <Link href={`/updatecustomer/` + customer.id}>
            Update
            {/* <HiPencilAlt size={24}/> */}
            </Link>
        </button>
        <Card.Link>
          {/* <button
            className="btn btn-primary activatation-btn"
            onClick={() => {
              setActivationStatus(!activationStatus);
            }}
          >
            {!activationStatus ? "Deactivate" : "Activate"}
          </button> */}
        </Card.Link>
        
        {/* <RemovalBtn/> */}
      </Card.Body>
    </Card>
  );
};

export default CustomerDetails;
