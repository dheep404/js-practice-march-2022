console.log("over here")


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(900, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(10, 70, 100, 100);

        ctx.fillStyle = 'rgba(0, 0, 100, 0.5)';
        ctx.fillRect(85, 50, 45, 45);
    }
}