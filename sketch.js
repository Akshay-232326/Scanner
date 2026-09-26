const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;
const FPS = 60;

const scannerWidth = 60;
const scannerHeight = 800;
let scannerX = 0;

const objectWidth = 100;
const objectHeight = 800;
const objectX = 300;


let speed = -1;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    if (scannerX === 0) {
        speed = speed * -1;
    }
    scannerX = scannerX + speed;
    if (scannerX === (screenWidth - scannerWidth)) {
        speed = (-1 * speed);
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(objectX, 0, objectWidth, objectHeight, r.SKYBLUE);

    r.DrawRectangle(scannerX, 0, scannerWidth, scannerHeight, r.WHITE);


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