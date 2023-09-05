document.querySelectorAll(".footer__contacts__social").forEach((item) => {
    item.innerHTML += `
    <a
    href="#"
    class="footer__contacts__social__item"
>
    <img
        src="icons/facebook.svg"
        alt="facebook"
        class="footer__contacts__social__item-img"
    />
</a>

<a
    href="#"
    class="footer__contacts__social__item"
>
    <img
        src="icons/twitter.svg"
        alt="twitter"
        class="footer__contacts__social__item-img"
    />
</a>

<a
    href="#"
    class="footer__contacts__social__item"
>
    <img
        src="icons/vk.svg"
        alt="vk"
        class="footer__contacts__social__item-img"
    />
</a>
<a
    href="#"
    class="footer__contacts__social__item"
>
    <img
        src="icons/telegram.svg"
        alt="telegram"
        class="footer__contacts__social__item-img"
    />
</a>
    `;
});
