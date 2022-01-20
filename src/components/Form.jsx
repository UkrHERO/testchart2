import { useState } from "react";

const INITIAL_STATE = {
  price: "",
  size: "",
};
function Form({ arr, arr2 }) {
  const [value, setValue] = useState(INITIAL_STATE);

  const handleSubmitBuy = (e) => {
    e.preventDefault();
    arr.push(value);
    setValue(INITIAL_STATE);
  };

  const handleSubmitSell = (e) => {
    e.preventDefault();
    arr2.push(value);
    setValue(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      [name]: value,
    });
  };
  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="size"
          value={value.size}
        />
        <input
          type="text"
          onChange={handleChange}
          name="price"
          value={value.price}
        />
        <button type="submit" onClick={handleSubmitBuy}>
          Buy
        </button>
        <button type="submit" onClick={handleSubmitSell}>
          Sell
        </button>
      </form>
    </>
  );
}

export default Form;
