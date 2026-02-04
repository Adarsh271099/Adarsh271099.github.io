// Valentine Page Logic (SAFE-GUARDED)
document.addEventListener("DOMContentLoaded", function () {

    const wrapper = document.querySelector(".valentine-wrap");
    if (!wrapper) return; // do nothing on other pages

    const noBtn = wrapper.querySelector("#noBtn");
    const yesBtn = wrapper.querySelector("#yesBtn");
    const tryAgainBox = wrapper.querySelector("#tryAgainBox");

    if (!noBtn || !yesBtn) return;

    // Optional: stable initial position
    noBtn.style.left = "calc(50% - 50px)";
    noBtn.style.top = "20px";


    // inches → px (CSS standard)
    const INCH = 96;
    const MIN_DIST = 1 * INCH;   // 1 inch
    const MAX_DIST = 10 * INCH;   // 6 inches

    function escapeButton(multiplier = 1) {
        const container = noBtn.parentElement;
        const containerRect = container.getBoundingClientRect();

        const btnW = noBtn.offsetWidth;
        const btnH = noBtn.offsetHeight;

        const currentX = noBtn.offsetLeft;
        const currentY = noBtn.offsetTop;

        const angle = Math.random() * Math.PI * 2;

        let distance =
            MIN_DIST + Math.random() * (MAX_DIST - MIN_DIST);
        distance *= multiplier;

        let x = currentX + Math.cos(angle) * distance;
        let y = currentY + Math.sin(angle) * distance;

        const maxX = containerRect.width - btnW;
        const maxY = containerRect.height - btnH;

        // Clamp inside container
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        noBtn.style.transition =
            "left 0.2s ease-out, top 0.2s ease-out";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Hover → playful escape
    noBtn.addEventListener("mouseenter", () => {
        escapeButton(1);
    });

    // Click → panic escape + message
    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        escapeButton(1.4);

        if (tryAgainBox) {
            tryAgainBox.classList.add("show");
            setTimeout(() => {
                tryAgainBox.classList.remove("show");
            }, 1200);
        }
    });

    // Mobile tap
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        escapeButton(1.4);

        if (tryAgainBox) {
            tryAgainBox.classList.add("show");
            setTimeout(() => {
                tryAgainBox.classList.remove("show");
            }, 1200);
        }
    });

    // Yes button
    yesBtn.addEventListener("click", () => {
        window.location.href = "yes.html";
    });


});