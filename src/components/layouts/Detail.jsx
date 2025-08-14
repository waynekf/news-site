function Detail({ className, children }) {
  return (
    <div className={"detail" + (className && " " + className)}>{children}</div>
  );
}

export default Detail;
