function isOverlap(scannerX, particleX, scannerWidth, particleWidth) {
    return scannerX <= (particleX + particleWidth) &&
        (scannerX + scannerWidth) >= particleX;
}
function calSpeed(scannerX, scannerWidth, scannerSt, scannerEnd, speed) {
    if (scannerX < scannerSt) {
        return -speed;
    }
    if (scannerX >= (scannerEnd - scannerWidth)) {
        return -speed;
    }
    return speed;
}

module.exports = {
    isOverlap,
    calSpeed,
}