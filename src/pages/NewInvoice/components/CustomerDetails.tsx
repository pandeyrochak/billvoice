import React from "react";
import { InputItem } from "../../../utils/exports";

const CustomerDetails = () => {
  return (
    <>
      <h3 className="text-base font-semibold mb-6">Customer details</h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-1">
        <InputItem
          id="customerName"
          labelText="Customer name"
          name="customerName"
          placeholderText="customer name"
          type="text"
        />
        <InputItem
          id="mobile"
          labelText="Contact"
          name="mobile"
          placeholderText="mobile number"
          type="text"
        />
        <InputItem
          id="customerAddress"
          labelText="Address"
          name="customerAddress"
          placeholderText="customer address"
          type="text"
        />
      </div>
    </>
  );
};

export default CustomerDetails;
