const r = require("raylib");
const geometry = require("./geometry")

const screenWidth = 1000;
const screenHeight = 800;

const scanner1Width = 60;
let scanner1X = 0;

const scanner2Width = 60;
let scanner2X = 500;

const scanner3Height = 60;
let scanner3Y = 0;

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
let speed3 = 3;

function update() {
    const scanner1End = (screenWidth / 2)

    speed1 = geometry.calSpeed(scanner1X, scanner1Width, 0, scanner1End, speed1);
    scanner1X = scanner1X + speed1;

    const scanner2St = (screenWidth / 2);
    const scanner2End = (screenWidth);

    speed2 = geometry.calSpeed(scanner2X, scanner2Width, scanner2St, scanner2End, speed2);
    scanner2X = scanner2X + speed2;

    const scanner3End = screenHeight;

    speed3 = geometry.calSpeed(scanner3Y, scanner3Height, 0, scanner3End, speed3);
    scanner3Y = scanner3Y + speed3;
}

function draw() {
    const particle1Width = 100;
    const particle1Height = 800;
    const particle1X = 300;

    const particle2Width = 30;
    const particle2Height = 800;
    const particle2X = 700;

    const particle3Width = 1000;
    const particle3Height = 80;
    const particle3Y = 300;

    const scanner1Overlap1 = geometry.isOverlap(scanner1X, particle1X, scanner1Width, particle1Width);
    const scanner1Overlap2 = geometry.isOverlap(scanner1X, particle2X, scanner1Width, particle2Width);
    const scanner2Overlap3 = geometry.isOverlap(scanner2X, particle1X, scanner2Width, particle1Width);
    const scanner2Overlap4 = geometry.isOverlap(scanner2X, particle2X, scanner2Width, particle2Width);
    const scanner3Overlap5 = geometry.isOverlap(scanner3Y, particle3Y, scanner3Height, particle3Height);

    const color1 = (scanner1Overlap1 || scanner1Overlap2) ? r.RED : r.WHITE;
    const color2 = (scanner2Overlap3 || scanner2Overlap4) ? r.RED : r.WHITE;
    const color3 = (scanner3Overlap5) ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1X, 0, particle1Width, particle1Height, r.SKYBLUE);
    r.DrawRectangle(particle2X, 0, particle2Width, particle2Height, r.SKYBLUE);
    r.DrawRectangle(0, particle3Y, particle3Width, particle3Height, r.SKYBLUE);

    const scanner1Height = 800;
    const scanner2Height = 800;
    const scanner3Width = 1000;

    r.DrawRectangle(scanner1X, 0, scanner1Width, scanner1Height, color1);
    r.DrawRectangle(scanner2X, 0, scanner2Width, scanner2Height, color2);
    r.DrawRectangle(0, scanner3Y, scanner3Width, scanner3Height, color3);

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