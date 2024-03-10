import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "./styles.css";
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function App() {
  const [items, setItems] = useState([]);
  function additems(nitem) {
    setItems([...items, nitem]);
  }
  function deleteitems(id) {
    setItems((items) => items.filter((itm) => itm.id !== id));
  }
  function ontoggle(id) {
    setItems((items) =>
      items.map((itm) =>
        itm.id === id ? { ...itm, packed: !itm.packed } : itm
      )
    );
  }
  function handleclear() {
    const confirmclear = window.confirm(
      "are you sure want to clear the items in the list?"
    );
    if (confirmclear) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form additems={additems} />
      <PackingList
        items={items}
        deleteitems={deleteitems}
        ontoggle={ontoggle}
        handleclear={handleclear}
      />
      <Stats items={items} />
    </div>
  );
}
