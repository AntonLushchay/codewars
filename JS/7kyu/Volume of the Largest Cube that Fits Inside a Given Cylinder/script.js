// Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

// Don't round your result. The result needs to be within 0.01 error margin of the expected result.

function cubeVolume1(h, r) {
    let sideOfCube = Math.sqrt((2 * r) ** 2 / 2);
    if (h <= sideOfCube) {
        return h ** 3;
    } else {
        return sideOfCube ** 3;
    }
}
console.log(cubeVolume1(72, 41));
