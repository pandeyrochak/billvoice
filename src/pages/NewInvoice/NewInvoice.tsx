import CustomerDetails from "./components/CustomerDetails";
import ItemsList from "./components/ItemsList";

const NewInvoice = () => {
  return (
    <div>
      <CustomerDetails />
      <hr className="my-4" />
      <ItemsList />
    </div>
  );
};

export default NewInvoice;
