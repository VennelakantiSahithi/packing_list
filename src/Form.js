import { useState } from "react";
export default function Form({ additems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handlesubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const nitem = { description, quantity, packed: false, id: Date.now() };
    additems(nitem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="addform" onSubmit={handlesubmit}>
      <h6>What do you need for your trip💼 </h6>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {a.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
