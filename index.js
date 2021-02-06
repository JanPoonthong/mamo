function fillCircle(context, x, y, radius, color="red") {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

(() => {
    const canvas = document.getElementById("game");
    const width = canvas.width;
    const height = canvas.height;
    const radius = 69;
    const context = canvas.getContext("2d");

    let start;
    let x = width / 2;
    let y = height / 2;
    const deltaX = 100;
    const deltaY = 100;

    function step(timestamp) {
        if (start === undefined) {
            start = timestamp;
        }
        const deltaT= (timestamp - start) / 1000.0;

        x += deltaX * deltaT
        y += deltaY * deltaT
        fillCircle(context, x, y, radius, "purple");

        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
})();
