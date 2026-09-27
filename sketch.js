const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;

const scanner1Width = 60;
const scanner1Height = 800;
let scanner1X = 0;

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
    if (scanner1X < 0) {
        speed = -speed;
    }
    scanner1X = scanner1X + speed;
    if (scanner1X >= (screenWidth - scanner1Width)) {
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

    const collosion1 = geometry.isCollision(scanner1X, object1X, scanner1Width, object1Width);
    const collosion2 = geometry.isCollision(scanner1X, object2X, scanner1Width, object2Width);

    const color = (collosion1 || collosion2) ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    r.DrawRectangle(object1X, 0, object1Width, object1Height, r.SKYBLUE);
    r.DrawRectangle(object2X, 0, object2Width, object2Height, r.SKYBLUE);

    r.DrawRectangle(scanner1X, 0, scanner1Width, scanner1Height, color);

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