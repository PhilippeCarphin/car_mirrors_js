function drawLine(x1,y1,x2,y2){
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function draw_line_2(point_a, point_b){
    drawLine(point_a.x, point_a.y, point_b.x, point_b.y);
}

function draw_line_3(the_line){
    draw_line_2(the_line.point_a, the_line.point_b);
}

function dot(u, v){
    return u.x * v.x + u.y * v.y;
}

function proj(dir, vect){
    r = dot(vect,dir)/dot(dir,dir);
    return {x:r*dir.x, y:r*dir.y};
}

function reflect(point, line){
    point_on_line = line.point_a;

    vect = {x:point.x - point_on_line.x, y:point.y - point_on_line.y};
    dir = {x:line.point_a.x - line.point_b.x, y:line.point_a.y - line.point_b.y};

}

function draw_particular_line(){
    var line_1 = { point_a:{x:20,y:20}, point_b : {x:100, y:100}};
    draw_line_2({x:0,y:0},{x:100,y:50});
    draw_line_3(line_1);
}

function on_start(){
    draw_the_line();
}
