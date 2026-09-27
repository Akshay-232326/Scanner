const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;

const scannerWidth = 60;
const scannerHeight = 800;
let scannerX = 0;

let speed = 3;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;

    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    if (scannerX < 0) {
        speed = -speed;
    }
    scannerX = scannerX + speed;
    if (scannerX >= (screenWidth - scannerWidth)) {
        speed = -speed;
    }
}

function draw() {
    const object1Width = 100;
    const object1Height = 800;
    const object1X = 300;

    const object2Width = 30;
    const object2Height = 800;
    const object2X = 700;

    const collosion1 = geometry.isCollision(scannerX, object1X, scannerWidth, object1Width);
    const collosion2 = geometry.isCollision(scannerX, object2X, scannerWidth, object2Width);

    const color = (collosion1 || collosion2) ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    r.DrawRectangle(object1X, 0, object1Width, object1Height, r.SKYBLUE);
    r.DrawRectangle(object2X, 0, object2Width, object2Height, r.SKYBLUE);

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