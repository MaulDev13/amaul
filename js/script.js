document.body.addEventListener("htmx:afterSwap", function (event) {
    if (event.target.id !== "content") return;

    const currentPath = event.detail?.requestConfig?.path;

    if (!currentPath) return; // ⛑️ penting banget

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {
        const path = btn.getAttribute("data-path");

        btn.classList.remove("text-gray-600", "font-semibold");

        if (currentPath.endsWith(path)) {
            btn.classList.add("text-gray-600", "font-semibold");
        }
    });
});

document.body.addEventListener("htmx:beforeRequest", function (event) {
    const currentPath = event.detail.path;

    if (!currentPath) return; // ⛑️ penting banget

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {
        const path = btn.getAttribute("data-path");

        btn.classList.remove("text-blue-600", "font-semibold");

        if (currentPath.endsWith(path)) {
            btn.classList.add("text-blue-600", "font-semibold");
        }
    });
});