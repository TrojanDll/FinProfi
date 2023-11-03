document.querySelectorAll(".divider-line").forEach((item) => {
    item.innerHTML += `
    <div class="divider-line__triangle-right"></div>
                            <div class="divider-line__stright"></div>
                            <div class="divider-line__triangle-left"></div>
    `;
});
