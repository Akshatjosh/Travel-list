function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <p>Start Your packing</p>
      </div>
    );
  const nums = items.length;
  const packed = items.filter((items) => items.packed).length;
  const percent = Math.round((packed / nums) * 100);
  return (
    <div className="stats">
      <p>
        {percent === 100
          ? "You are ready to go"
          : ` 💼 You have ${nums} items on your list,and you already packed ${packed}(
       ${percent}%)`}
      </p>
    </div>
  );
}
export default Stats;
