const indexTables = document.querySelectorAll(".index-table");

indexTables.forEach((indexTable) => {
  const table = indexTable.querySelector(".index-table__wrapper");
  const tableHeight = window.getComputedStyle(table).height;
  const descr = indexTable.querySelector(".conclusions-item__descr");
  let descrHeight = "";
  if (descr) {
    descrHeight = window.getComputedStyle(descr).height;
  }
  console.log(`Высота описания ${descrHeight}`);
  console.log(tableHeight);

  const sumHeight =
    +tableHeight.slice(0, -2) + +descrHeight.slice(0, -2) + "px";
  console.log(`Высота суммарная ${sumHeight}`);
  indexTable.style.minHeight = sumHeight;
});
