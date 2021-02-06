function fillCircle(context, x, y, radius, color="red") {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

(() => {
    const canvas = document.getElementById("game");
    const radius = 69;
    const context = canvas.getContext("2d");

    let start;
    let x = radius + 10;
    let y = radius + 10;
    let deltaX = 100;
    let deltaY = 100;

    function step(timestamp) {
        if (start === undefined) {
            start = timestamp;
        }
        const deltaT= (timestamp - start) / 1000.0;
        start = timestamp;

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        if (x + radius >= width  || x - radius <= 0) deltaX = -deltaX;
        if (y + radius >= height || y - radius <= 0) deltaY = -deltaY;

        x += deltaX * deltaT;
        y += deltaY * deltaT;

        context.clearRect(0, 0, width, height);
        fillCircle(context, x, y, radius, "purple");

        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
})();
