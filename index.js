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

    fillCircle(context, width / 2, height / 2, radius);

})();
