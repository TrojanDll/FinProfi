const fileInputs = document.querySelectorAll(".report__header__btn-input");
const fileInfo = document.querySelectorAll(".report__header__file-name");

fileInputs.forEach((inputs) => {
    inputs.addEventListener("change", (e) => {
        const selectedFile = e.target.files[0];
        fileInfo.forEach((fileInfo) => {
            fileInfo.textContent = `Выбран файл: ${selectedFile.name}`;
        });
    });
});
