console.log("over here")

//Draw function to fire when body has loaded on the page
function draw() {
    //Linking the canvas ID from HTML to variable
    var canvas = document.getElementById('canvas');
    //get.Context method is specific for canvas 
    if (canvas.getContext) {
        //2d is required as the argument when using 'getContext'
        var ctx = canvas.getContext('2d');

        //red square
        ctx.fillStyle = 'rgb(900, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);


        //blue square
        ctx.fillStyle = 'rgba(0, 0, 200, 1)';
        ctx.fillRect(10, 70, 100, 100);

        //turquoise square
        ctx.fillStyle = '#358e9ead';
        ctx.fillRect(85, 50, 45, 45);
    }
}