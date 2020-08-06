class Bar {
    constructor() {
        this.length = 150;
        this.thickness = 8;
        this.clearance = 4;
        this.x;
        this.y = height - (this.thickness + this.clearance);
        this.mid;
    }

    show(xpos) {
        this.x = xpos - this.length / 2;
        fill(255, 100, 0);
        if (this.x <= 0) {
            rect(0, this.y, this.length, this.thickness, 20); //edge condition
            this.mid = this.length / 2;
        }
        else if (this.x + this.length >= width) {
            rect(width - this.length, this.y, this.length, this.thickness, 20); //edge condition
            this.mid = width - this.length / 2;
        }
        else {
            rect(this.x, this.y, this.length, this.thickness, 20); //normal condition
            this.mid = xpos;
        }
    }
}

class Ball {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.radius = 8;
        this.sp_x = 10;
        this.sp_y = 10;
    }

    move() {
        this.x += this.sp_x;
        this.y += this.sp_y;
        if (this.x < this.radius || this.x > width - this.radius) this.sp_x *= -1;
        if (this.y < this.radius) this.sp_y *= -1;
        // drop
        if ((this.x + this.radius > bar.mid - bar.length / 2) && (this.x - this.radius < bar.mid + bar.length / 2)) {
            if (this.y + this.radius > bar.y) {
                this.y = bar.y - this.radius;
                this.sp_y *= -1;
                // console.log('drop');
            }
        }
    }

    reset() {
        // console.log('reset');
        this.x = bar.mid;
        this.y = bar.y - this.radius;
        if(this.sp_y > 0) this.sp_y *= -1;
    }

    show() {
        fill(0, 255, 0);
        ellipse(this.x, this.y, this.radius * 2);
    }
}
