const r = require("raylib");
const geometry = require("./geometry");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const WIDTH = 1000;
const HEIGHT = 800;

const p1X = 400;
const p1Width = 80;

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

function update() {
    d1.velocity = geometry.calcVelocity(d1.x, d1.width, 0, WIDTH, d1.velocity);
    d1.x = geometry.movingDetector(d1.x, d1.velocity);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRange(p1X, 0, p1Width, HEIGHT, r.SKYBLUE);
    drawRange(d1.x, 0, d1.width, HEIGHT, r.WHITE);

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