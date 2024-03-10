export default function Itemscom({ item, dt, ontog }) {
  return (
    <div className="it">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          ontog(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => dt(item.id)}>&times;</button>
    </div>
  );
}
