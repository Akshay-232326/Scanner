const r = require("raylib");

function isOverlap(dX, p1X, dWidth, p1Width, p2X, p2Width) {
    isOverlapFirst = dX <= (p1X + p1Width) && (dX + dWidth) >= p1X;
    isOverlapSecond = dX <= (p2X + p2Width) && (dX + dWidth) >= p2X;
    return isOverlapFirst || isOverlapSecond;
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