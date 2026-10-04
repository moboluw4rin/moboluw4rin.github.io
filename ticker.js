document.fonts.ready.then(() => {
    document.querySelectorAll(".wave-ticker").forEach(ticker => {
        const tp = ticker.querySelector("textPath");
        const unit = ticker.dataset.text + "      " + (ticker.dataset.divider || "♡") + "      ";

        tp.textContent = unit;
        const w = tp.parentNode.getComputedTextLength();
        tp.textContent = unit.repeat(Math.ceil(2800 / w) + 2);

        const speed = 80; // pixels per second
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let start = null;

        function tick(t) {
            if (start === null) start = t;
            const x = -(((t - start) / 1000 * speed) % w);
            tp.setAttribute("startOffset", x);
            if (!reduce) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
});
