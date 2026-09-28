const r = require("raylib");
const detector = require("./detector.js");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const WIDTH = 1000;
const HEIGHT = 800;

const p1X = 300;
const p1Width = 80;
const p2X = 600;
const p2Width = 80;

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

function changeColour(dX, p1X, dWidth, p1Width, p2X, p2Width) {
    return detector.isOverlap(dX, p1X, dWidth, p1Width, p2X, p2Width) ? r.RED : r.WHITE;
}

function update() {
    d1.velocity = detector.calcVelocity(d1.x, d1.width, 0, WIDTH, d1.velocity);
    d1.x = detector.movingDetector(d1.x, d1.velocity);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRange(p1X, 0, p1Width, HEIGHT, r.SKYBLUE);
    drawRange(p2X, 0, p2Width, HEIGHT, r.SKYBLUE);
    drawRange(d1.x, 0, d1.width, HEIGHT, changeColour(d1.x, p1X, d1.width, p1Width, p2X, p2Width));

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

}