const r = require("raylib");
const detector = require("./detector.js");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const WIDTH = 1000;
const HEIGHT = 800;

function drawRange(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Partical-detector");
    r.SetTargetFPS(60);
}

function changeColour(dX, dWidth, p1X, p1Width, p2X, p2Width) {
    return detector.isOverlap(dX, dWidth, p1X, p1Width, p2X, p2Width)
        ? r.RED
        : r.WHITE;
}

function update() {
    d1.velocity = detector.calcVelocity(
        d1.x,
        d1.width,
        0,
        WIDTH / 2,
        d1.velocity,
    );
    d1.x = detector.move(d1.x, d1.velocity);

    d2.velocity = detector.calcVelocity(
        d2.x,
        d2.width,
        WIDTH / 2,
        WIDTH,
        d2.velocity,
    );
    d2.x = detector.move(d2.x, d2.velocity);

    d3.velocity = detector.calcVelocity(
        d3.y,
        d3.height,
        0,
        HEIGHT,
        d3.velocity,
    );
    d3.y = detector.move(d3.y, d3.velocity);
}

function draw() {
    const p1X = 300;
    const p1Width = 80;

    const p2X = 600;
    const p2Width = 80;

    const p3Y = 500;
    const p3Hieght = 80;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRange(p1X, 0, p1Width, HEIGHT, r.SKYBLUE);
    drawRange(p2X, 0, p2Width, HEIGHT, r.SKYBLUE);
    drawRange(0, p3Y, WIDTH, p3Hieght, r.SKYBLUE);

    drawRange(
        d1.x,
        0,
        d1.width,
        HEIGHT,
        changeColour(d1.x, d1.width, p1X, p1Width, p2X, p2Width),
    );
    drawRange(
        d2.x,
        0,
        d2.width,
        HEIGHT,
        changeColour(d2.x, d2.width, p1X, p1Width, p2X, p2Width),
    );
    drawRange(
        0,
        d3.y,
        WIDTH,
        d3.height,
        changeColour(d3.y, d3.height, p3Y, p3Hieght),
    );

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
