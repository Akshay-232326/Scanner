function isCollision(scannerX, objectX, scannerWidth, objectWidth) {
    return scannerX <= (objectX + objectWidth) &&
        (scannerX + scannerWidth) >= objectX;
}

module.exports = {
    isCollision,

}