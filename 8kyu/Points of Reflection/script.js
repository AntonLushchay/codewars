function symmetricPoint(p, q) {
    let p1 = [];
    let diffX = Math.abs(q[0] - p[0]);
    let diffY = Math.abs(q[1] - p[1]);

    console.log(diffX);
    console.log(diffY);

    if (q[0] < p[0]) {
        p1[0] = q[0] - diffX;
    } else {
        p1[0] = q[0] + diffX;
    }

    if (q[1] < p[1]) {
        p1[1] = q[1] - diffY;
    } else {
        p1[1] = q[1] + diffY;
    }

    return p1;
}

console.log(symmetricPoint([-3, 4], [-2, -6]));
