    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    canvas.style.backgroundColor = "#a4a396";

    class Circle {
        constructor(xpos, ypos, radius, color){
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.color = color;
        };

        draw(context){
            context.beginPath();
            context.lineWidth = 8;
            context.strokeStyle = this.color;
            context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            context.stroke();
            context.closePath();
        }
    };

    let allCircles = [];
    console.log(allCircles);

    
    let createCircle = function(cricle){
        cricle.draw(context);
    };

    console.log(createCircle);
    

    for (var number = 0; number < 10; number++ ){

        let randomX = Math.random() * windowWidth;
        let randomY = Math.random() * windowHeight;

        let myCircle = new Circle(randomX, randomY, 50, "blue");
        allCircles.push(myCircle);
        createCircle(allCircles[number]);
    
    };
