(() => {
    const canvas = document.getElementById("game");
    const width = canvas.width;
    const height = canvas.height;
    const radius = 69;
    const context = canvas.getContext("2d");

    context.beginPath();
    context.arc(width / 2, width / 2, radius, 0, 0, false);
    context.fillStyle = "red";
    context.fill();

    // context.moveTo(0, 0);
    // context.lineTo(width, height);
    // context.stroke();
})();
