const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;
const FPS = 60;

const scannerWidth = 60;
const scannerHeight = 800;
let scannerX = 0;

const object1Width = 100;
const object1Height = 800;
const object1X = 300;

let color = r.WHITE;

let speed = -1;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function objectDetector(scannerX, objectX, scannerWidth, objectWidth) {
    if (((scannerX + scannerWidth) >= objectX) && ((scannerX + scannerWidth) <= objectX + (objectWidth + scannerWidth))) {
        color = r.RED;
    } else { color = r.WHITE };
}

function update() {
    if (scannerX === 0) {
        speed = speed * -1;
    }
    scannerX = scannerX + speed;
    if (scannerX === (screenWidth - scannerWidth)) {
        speed = (-1 * speed);
    }
    objectDetector(scannerX, object1X, scannerWidth, object1Width);


}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(object1X, 0, object1Width, object1Height, r.SKYBLUE);

    r.DrawRectangle(scannerX, 0, scannerWidth, scannerHeight, color);


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