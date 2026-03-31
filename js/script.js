document.body.addEventListener("htmx:afterSwap", function (event) {

    const btn = document.getElementById("pingBtn");

    if (!btn) return;

    btn.setAttribute("hx-get", `${API_BASE_URL}/api/ping`);
    btn.setAttribute("hx-target", "#result");
    btn.setAttribute("hx-swap", "innerHTML");
    btn.setAttribute("hx-trigger", "click");

    htmx.process(btn);

    console.log("Ping button initialized");
});

document.body.addEventListener("htmx:beforeRequest", function () {
    console.log("Request sent...");
});

document.body.addEventListener("htmx:afterRequest", function (event) {
    console.log("Response received:", event.detail.xhr.response);
});