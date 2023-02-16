import ItemDetails from "./ItemDetails";
import { Button } from "../../../utils/exports";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ItemsList = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Items</h3>
      <ItemDetails itemNumber={1} />
      <Button title="Add new item" icon={<PlusCircleIcon className="w-6" />} />
    </div>
  );
};

export default ItemsList;
