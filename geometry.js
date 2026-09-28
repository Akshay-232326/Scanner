// function isOverlap(scannerX, particleX, scannerWidth, particleWidth) {
//     return scannerX <= (particleX + particleWidth) &&
//         (scannerX + scannerWidth) >= particleX;
// }
// function calSpeed(scannerX, scannerWidth, scannerSt, scannerEnd, speed) {
//     if (scannerX < scannerSt) {
//         return -speed;
//     }
//     if (scannerX >= (scannerEnd - scannerWidth)) {
//         return -speed;
//     }
//     return speed;

// const { width, velocity } = require("./d1");

// }
function isDOutOfBound(x, width, start, end) {
    return (x + width) > end || x < start;
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

}