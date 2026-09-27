function isOverlap(scannerX, objectX, scannerWidth, objectWidth) {
    return scannerX <= (objectX + objectWidth) &&
        (scannerX + scannerWidth) >= objectX;
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