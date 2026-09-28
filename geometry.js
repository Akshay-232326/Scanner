const r = require("raylib");

function isOverlap(dX, pX, dWidth, pWidth) {
    return dX <= (pX + pWidth) &&
        (dX + dWidth) >= pX;
}

function isDOutOfBound(x, width, start, end) {
    return (x + width) >= end || x < start;
}
function calcVelocity(x, width, start, end, velocity) {
    return isDOutOfBound(x, width, start, end) ? -velocity : velocity;
}

function movingDetector(x, velocity) {
    return x + velocity;
}

module.exports = {
    calcVelocity,
    movingDetector,
    isOverlap,


}