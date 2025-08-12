function List({ children }) {
  return (
    <div
      className="list"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      {children}
    </div>
  );
}

export default List;
