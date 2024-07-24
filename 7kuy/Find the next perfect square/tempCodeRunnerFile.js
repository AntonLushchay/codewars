unction findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        sqNum = sq;
        while (!Number.isInteger(Math.sqrt(sqNum + 1))) {
            sqNum++;
        }
        return sqNum + 1;
    } else {
        return -1;
    }
}