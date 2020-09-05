let man_vel = 0;
let rain_vel = 0;
let relRain_vel = 0;



function setup() {
    createCanvas(1520, 730);
}

function draw() {
    background(200);
    //rain falls at vertical direction
    // strokeWeight(4);
    // stroke(255, 0, 0);
    // line(mouseX, 200, mouseX, 500);
    // rain_vel = len(mouseX, 200, mouseX, 500);
    // stroke(0, 200, 0);
    // line(100, 500, mouseX, 500);
    // man_vel = len(100, 500, mouseX, 500);
    // stroke(0, 0, 200);
    // line(mouseX, 200, 100, 500);
    // relRain_vel = len(mouseX, 200, 100, 500);




    //1st prb
    strokeWeight(4);

    // rain
    stroke(255, 0, 0);
    line(mouseX - 50, 200, mouseX, 500);
    rain_vel = len(mouseX - 50, 200, mouseX, 500);
    stroke(100);
    line(mouseX - 50, 200, mouseX - 50, 500);

    // man
    stroke(0, 200, 0);
    line(100, 500, mouseX, 500);
    man_vel = len(100, 500, mouseX, 500);

    // relative rain
    stroke(0, 0, 200);
    line(mouseX - 50, 200, 100, 500);
    relRain_vel = len(mouseX - 50, 200, 100, 500);







    // text
    strokeWeight(1);
    textSize(20);
    stroke(0, 200, 0);
    text('Velocity of the person (with respect to earth) = ', 50, 50);
    text(man_vel, 600, 50);

    stroke(255, 0, 0);
    text('Velocity of rain (with respect to earth)',50, 100);
    text(rain_vel, 600, 100);

    stroke(0, 0, 200);
    text('Relative Velocity of rain (with respect to the person)', 50, 150);
    text(relRain_vel, 600, 150);
}

function len(x1, y1, x2, y2) {
    let l = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    // console.log(x1, x2, y1, y2);
    // console.log(l);
    return map(l, 0, width - 120, 0, 50);
}
