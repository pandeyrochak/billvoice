interface InputItemProps {
  labelText?: string;
  name: string;
  id: string;
  type: string;
  placeholderText: string;
}

const InputItem = (props: InputItemProps) => {
  const { labelText, name, id, type, placeholderText } = props;
  return (
    <>
      <label htmlFor={id} className="w-full mb-4" key={id}>
        {labelText && (
          <p className="text-base mb-2 hidden md:block">{labelText}</p>
        )}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholderText}
          className="w-full border-gray-300 placeholder:text-gray-300 rounded-md focus:ring-2 focus:ring-violet-300 focus:border-violet-600"
        />
      </label>
    </>
  );
};

export default InputItem;
