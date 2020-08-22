function TOH(n, A, B, C) {
    if (n > 0) {
        TOH(n - 1, A, C, B);
        console.log("Move a disk from " + A + " to " + C);
        TOH(n - 1, B, A, C);
    }
}

TOH(3, 'A', 'B', 'C');