var x = 0, y = 0;
var left = false, right = false, tp = false, bottom = false;
var sp = 1;
var rgb_bckgrnd = { r: 0, g: 0, b: 0 };
var rgb_ball = { r: 255, g: 255, b: 255 }
// var rd = false, gren = false, blu = false;

function setup() {
    createCanvas(700, 400);
}

function draw() {
    bckgrnd_clr();
    background(rgb_bckgrnd.r, rgb_bckgrnd.g, rgb_bckgrnd.b);
    noStroke();
    ball_clr();
    fill(rgb_ball.r, rgb_ball.g, rgb_ball.b);

    if (x <= 12) left = true, right = false;
    if (x >= 687) right = true, left = false;
    if (y <= 12) tp = true, bottom = false;
    if (y >= 387) bottom = true, tp = false;
    if (tp) y += sp;
    if (bottom) y -= sp;
    if (left) x += sp;
    if (right) x -= sp;

    if (x < 14 || x > 686)
        ellipse(x, y, 25, 30);
    else if (y < 14 || y > 386)
        ellipse(x, y, 30, 25);
    else
        ellipse(x, y, 25, 25);
}

function bckgrnd_clr() {
    if (rgb_bckgrnd.r < 255 && rgb_bckgrnd.g == 0 && rgb_bckgrnd.b == 0) rgb_bckgrnd.r++;
    if (rgb_bckgrnd.r == 255 && rgb_bckgrnd.g < 255 && rgb_bckgrnd.b == 0) rgb_bckgrnd.g++;
    if (rgb_bckgrnd.r == 255 && rgb_bckgrnd.g == 255 && rgb_bckgrnd.b < 255) rgb_bckgrnd.b++;

    if (rgb_bckgrnd.r > 0 && rgb_bckgrnd.g == 255 && rgb_bckgrnd.b == 255) rgb_bckgrnd.r--;
    if (rgb_bckgrnd.r == 0 && rgb_bckgrnd.g > 0 && rgb_bckgrnd.b == 255) rgb_bckgrnd.g--;
    if (rgb_bckgrnd.r == 0 && rgb_bckgrnd.g == 0 && rgb_bckgrnd.b > 0) rgb_bckgrnd.b--;
}

function ball_clr() {
    if (rgb_ball.r > 0 && rgb_ball.g == 255 && rgb_ball.b == 255) rgb_ball.r--;
    if (rgb_ball.r == 0 && rgb_ball.g > 0 && rgb_ball.b == 255) rgb_ball.g--;
    if (rgb_ball.r == 0 && rgb_ball.g == 0 && rgb_ball.b > 0) rgb_ball.b--;

    if (rgb_ball.r < 255 && rgb_ball.g == 0 && rgb_ball.b == 0) rgb_ball.r++;
    if (rgb_ball.r == 255 && rgb_ball.g < 255 && rgb_ball.b == 0) rgb_ball.g++;
    if (rgb_ball.r == 255 && rgb_ball.g == 255 && rgb_ball.b < 255) rgb_ball.b++;
}