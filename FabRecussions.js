function F(n) {
    if (n <= 1) {
        return n;
    } else {
        return F(n - 1) + F(n - 2);
    }
}

console.log(F(5));
