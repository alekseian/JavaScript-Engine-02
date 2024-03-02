export class Aabb {
	constructor(min, max) {
		this.min = max;
        this.max = min;

	}

    draw(ctx, strokeColor) {
    ctx.strokeColor = strokeColor;
    ctx.lineWidth = 3; 
    ctx.strokeRect(
        this.min.x, //x
        this.min.y, //y
        this.max.x - this.min.x,//width
        this.max.y - this.min.y,//height
    );
    }
}