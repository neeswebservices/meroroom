import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import http from "http";
import morgan from "morgan";
const app = express();
const PORT = process.env?.PORT || 5000;
const server = http.createServer(app);

export const logger = console.log.bind(console);

app.use(morgan("combined", { stream: winston.stream }));

app.post("/payment", () => {
    axios.post("https://khalti.com/api/v2/payment/verify/", {
        Authorization: "",
        token: "",
        amount: "",
    });
});

server.listen(PORT, () => {
    logger(` Server listening on port ${PORT} `);
});

server.on("error", (err) => {
    console.log(err.message);
    console.log(err?.stack);
    process.exit(1);
});
