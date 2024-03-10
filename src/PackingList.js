import { useState } from "react";
import Itemscom from "./Itemscom";
export default function PackingList({
  items,
  deleteitems,
  ontoggle,
  handleclear,
}) {
  const [sortby, setSortby] = useState("input");
  let sorteditems;
  if (sortby === "input") {
    sorteditems = items;
  }
  if (sortby === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  if (sortby === "description") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="list">
      {sorteditems.map((item) => (
        <Itemscom item={item} dt={deleteitems} ontog={ontoggle} key={item.id} />
      ))}
      <div className="actions">
        <select
          value={sortby}
          onChange={(e) => {
            setSortby(e.target.value);
          }}
        >
          <option value="input">Based on input</option>
          <option value="packed">Based onPacked</option>
          <option value="description">Based on description</option>
        </select>
        <button onClick={handleclear}>Clear the list</button>
      </div>
    </div>
  );
}
