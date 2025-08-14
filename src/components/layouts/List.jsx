function List({ className, children }) {
  return (
    <div
      className={"list" + (className && " " + className)}
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      {children}
    </div>
  );
}

export default List;
