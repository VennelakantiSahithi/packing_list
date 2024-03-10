export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="ft">
        <em>Start adding items to your list !</em>
      </footer>
    );
  }
  const noofitems = items.length;
  const packed = items.filter((itm) => itm.packed).length;
  const percentage = Math.round((packed / noofitems) * 100);
  return (
    <footer className="ft">
      {percentage === 100 ? (
        "You Packed Everything.Let's Go"
      ) : (
        <em>
          you have {noofitems} items in your list and you already packed{" "}
          {packed} items ({percentage}%)
        </em>
      )}
    </footer>
  );
}
