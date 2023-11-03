const fileInputs = document.querySelectorAll(".report__header__btn-input");
const fileInfo = document.querySelectorAll(".report__header__file-name");
const reportHeaderCodeItems = document.querySelectorAll(
  ".report__header__item-code"
);
const reportHeaderNameItems = document.querySelectorAll(
  ".report__header__item-name"
);

fileInputs.forEach((inputs) => {
  inputs.addEventListener("change", (e) => {
    const selectedFile = e.target.files[0];
    fileInfo.forEach((fileInfo) => {
      fileInfo.style.display = "block";
      fileInfo.textContent = `Выбран файл: ${selectedFile.name}`;
    });

    let marginTopForItem = "";

    if (window.innerWidth <= 930 && window.innerWidth > 680) {
      marginTopForItem = "82px";
    } else if (window.innerWidth <= 680 && window.innerWidth > 480) {
      marginTopForItem = "92px";
    } else if (window.innerWidth <= 480) {
      marginTopForItem = "15px";
    }

    reportHeaderCodeItems.forEach((reportHeaderCodeItem) => {
      reportHeaderCodeItem.style.marginTop = marginTopForItem;
    });
    reportHeaderNameItems.forEach((reportHeaderNameItem) => {
      reportHeaderNameItem.style.marginTop = marginTopForItem;
    });
  });
});
