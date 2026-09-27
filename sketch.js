const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;

const scanner1Width = 60;
let scanner1X = 0;

const scanner2Width = 60;
let scanner2X = 500;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

let speed1 = 3;
let speed2 = 2;

function update() {
    const scanner1End = (screenWidth / 2)

    speed1 = geometry.calSpeed(scanner1X, scanner1Width, 0, scanner1End, speed1);
    scanner1X = scanner1X + speed1;

    const scanner2St = (screenWidth / 2);
    const scanner2End = (screenWidth);

    speed2 = geometry.calSpeed(scanner2X, scanner2Width, scanner2St, scanner2End, speed2);
    scanner2X = scanner2X + speed2;
}

function draw() {
    const object1Width = 100;
    const object1Height = 800;
    const object1X = 300;

    const object2Width = 30;
    const object2Height = 800;
    const object2X = 700;

    const overlap1 = geometry.isOverlap(scanner1X, object1X, scanner1Width, object1Width);
    const overlap2 = geometry.isOverlap(scanner1X, object2X, scanner1Width, object2Width);
    const overlap3 = geometry.isOverlap(scanner2X, object1X, scanner2Width, object1Width);
    const overlap4 = geometry.isOverlap(scanner2X, object2X, scanner2Width, object2Width);

    const color1 = (overlap1 || overlap2) ? r.RED : r.WHITE;
    const color2 = (overlap3 || overlap4) ? r.RED : r.WHITE;


    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    r.DrawRectangle(object1X, 0, object1Width, object1Height, r.SKYBLUE);
    r.DrawRectangle(object2X, 0, object2Width, object2Height, r.SKYBLUE);

    const scanner1Height = 800;
    const scanner2Height = 800;

    r.DrawRectangle(scanner1X, 0, scanner1Width, scanner1Height, color1);
    r.DrawRectangle(scanner2X, 0, scanner2Width, scanner2Height, color2)

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