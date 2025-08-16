export default function customSorter(sortInfo) {
  return function sort(a, b) {
    const itemA =
      sortInfo.field === "created_at"
        ? new Date(a[sortInfo.field]).getTime()
        : a[sortInfo.field];
    const itemB =
      sortInfo.field === "created_at"
        ? new Date(b[sortInfo.field]).getTime()
        : b[sortInfo.field];
    if (sortInfo.direction === "ASC") {
      return itemA - itemB;
    } else if (sortInfo.direction === "DESC") {
      return itemB - itemA;
    }
  };
}
