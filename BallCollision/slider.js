function Box(parentElement) {
    this.x = 10;
    this.y = 10;
    this.speed = 8;
    this.width = getRandomArbitary(50,15);
    this.height = this.width;
    this.parentElement = parentElement;
    this.element = null;
    var that = this;


    this.init = function () {
        var box = document.createElement('div');
        box.style.height = this.height + 'px';
        box.style.width = this.width + 'px';
        box.classList.add('box');
        this.parentElement.appendChild(box);
        this.element = box;
        console.log("adsds")
      //  this.element.onclick = this.boxClicked.bind(this);
        this.draw();
        return this;
    }
    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
    this.draw = function () {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
    this.checkborderCollision=function(h,w){
        if(this.y>h-this.height)
        { this.speed=-this.speed;
        }
        if(this.x>w-this.width){
            this.speed=-this.speed;
        }
        if(this.y<0+this.height)
        {
            this.speed=-this.speed;
        }
        if(this.x<0+this.width)
        {
            this.speed=-this.speed;
        }
    }
    this.move = function (h,w) {
        this.checkborderCollision(h,w);
        this.x = this.x + this.speed;
        this.y= this.y + this.speed;
        this.draw();
    }
    
}

function getRandomArbitary(max, min) {
    return Math.random() * (max - min) + min;
}

function Game(parentElement, boxCount) {
    var boxes = [];
    var MAX_WIDTH = 800;
    var MAX_HEIGHT = 500;
    this.parentElement = parentElement;
    this.boxCount = boxCount || 10;

    this.startGame = function () {
        console.log("fdg")
        for (var i = 0; i < this.boxCount; i++) {
            var box = new Box(this.parentElement).init();
            console.log("box>>",box);
            box.setPosition(
                getRandomArbitary(0, MAX_WIDTH),
                getRandomArbitary(0, MAX_HEIGHT)
            );
            box.draw();
            boxes.push(box);
        }
        console.log(boxes);
        setInterval(this.moveBoxes.bind(this), 100);
    }
    this.moveBoxes = function () {
        for (var i = 0; i < this.boxCount; i++) {
            boxes[i].move(MAX_HEIGHT,MAX_WIDTH);
        }
    }

}
var mainDiv = document.getElementById('app');
var game = new Game(mainDiv, 10).startGame();