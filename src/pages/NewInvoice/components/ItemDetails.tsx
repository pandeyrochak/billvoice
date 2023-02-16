import { InputItem } from "../../../utils/exports";

interface ItemDetailsProps {
  itemNumber: number;
}
const ItemDetails = (props: ItemDetailsProps) => {
  const { itemNumber } = props;
  return (
    <div key={itemNumber}>
      <h3 className="text-base font-medium mb-6">Item #{itemNumber}</h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-1">
        <InputItem
          id="itemName"
          labelText="Name"
          name="itemName"
          placeholderText="item name"
          type="text"
        />
        <InputItem
          id="itemPrice"
          labelText="Price"
          name="itemPrice"
          placeholderText="price"
          type="text"
        />
        <InputItem
          id="gstRate"
          labelText="GST Rate"
          name="gstRate"
          placeholderText="gst rate"
          type="number"
        />
      </div>
    </div>
  );
};

export default ItemDetails;
