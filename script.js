document.addEventListener("DOMContentLoaded", () => {
    const links = {
        home: "index.html",
        definicions: "definicions.html",
        tutorials: "tutorials.html",
        exercicis: "exercicis.html",
        contacte: "contacte.html",
        mathai: "math-ai.html"
    };

    document.querySelectorAll("[data-link]").forEach(btn => {
        btn.addEventListener("click", () => {
            const page = btn.getAttribute("data-link");
            if (links[page]) {
                window.location.href = links[page];
            }
        });
    });

    // Botons Anterior / Següent
    const prev = document.querySelector("#btn-prev");
    const next = document.querySelector("#btn-next");

    const order = [
        "index.html",
        "definicions.html",
        "tutorials.html",
        "exercicis.html",
        "contacte.html",
        "math-ai.html"
    ];

    const current = window.location.pathname.split("/").pop();
    const index = order.indexOf(current);

    if (prev) {
        prev.addEventListener("click", () => {
            if (index > 0) window.location.href = order[index - 1];
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            if (index < order.length - 1) window.location.href = order[index + 1];
        });
    }
});

