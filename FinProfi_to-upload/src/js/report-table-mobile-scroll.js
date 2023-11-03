const containers = document.querySelectorAll(
    ".report-table-item__inputs-wrapper"
);

containers.forEach((container) => {
    container.addEventListener("scroll", () => {
        const scrollLeftVar = container.scrollLeft;

        containers.forEach((container) => {
            container.scrollLeft = scrollLeftVar;
        });
    });
});
