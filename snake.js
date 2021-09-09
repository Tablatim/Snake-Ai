function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        this.goTo(food.x,food.y)
        for(var i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = createVector(this.x, this.y)

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
    }

    this.show = function() {
        if(this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
            gameOver()
        }
        for(var i=0; i<this.tail.length; i++) {
            if(this.x == this.tail[i].x && this.y == this.tail[i].y) {
                gameOver()
            }
        }
        fill(220,220,220)
        for(var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
            
        }
        fill(107,142,35)
        rect(this.x, this.y, scl, scl)
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y)
        if (d<1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.goTo = function(x, y) {
        if(this.x == x) {
            if(this.y > y) {
                this.up();
            } else if(this.y < y) {
                this.down()
            }
            
        } else {
            if(this.x < x) {
                this.right()
            } else if(this.x > x) {
                this.left()
            }
        }
        if(this.y == y && this.x == x) {
            this.stop()
        }
    }

    this.right = function() {
        this.xspeed = 1;
        this.yspeed = 0;
    }
    this.left = function() {
        this.xspeed = -1;
        this.yspeed = 0;
    }
    this.up = function() {
        this.xspeed = 0;
        this.yspeed = -1;
    }
    this.down = function() {
        this.xspeed = 0;
        this.yspeed = 1;
    }
    this.stop = function() {
        this.xspeed = 0;
        this.yspeed = 0;
    }
}

function keyPressed() {
    if(keyCode == 13){
        document.location.reload()
    }
}