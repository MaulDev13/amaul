const API_BASE_URL = "https://simple-go-production.up.railway.app";

const BASE_URL = location.hostname === "localhost" ||
                 location.hostname === "127.0.0.1"
    ? ""
    : "/amaul";