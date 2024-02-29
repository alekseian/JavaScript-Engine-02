import {Vec} from './vector.js';

export class Rect {
	constructor(pos, w, h) {
		this.position = pos;
		this.width = w;
		this.height = h;

        this.orientation = 0;

        this.vertices = [new Vec(0,0), new Vec(0,0), new Vec(0,0), new Vec(0,0)]
        this.aab  = new Aabb(new Vec(0,0),new Vec(0,0));
	}

    //0 1
    //3 2

    updateVerticies() {
        this.verticies[0].setX(-this.width/2).setY(-this.height/2).rotate(this.orientation).add(this.position);
        this.verticies[1].setX(this.width/2).setY(-this.height/2).rotate(this.orientation).add(this.position);
        this.verticies[2].setX(this.width/2).setY(this.height/2).rotate(this.orientation).add(this.position);
        this.verticies[3].setX(-this.width/2).setY(this.height/2).rotate(this.orientation).add(this.position);
    }


    updateAabb() {
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        let vertexX;
        let vertexY;

        for (let i=0; i<this.verticies.length; i++) {
            vertexX = this.verticies[i].x;
            vertexY = this.verticies[i].y;

            minX = vertexX < minX ? vertexX : minX;
            //find the min and max and y

        }

        this.aabb.min.x = min;
        //store min and max y in aabb

    }
	draw(ctx, strokeColor, fillColor) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.orientation);
        if (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(
                - this.width/2,
                - this.height/2,
                this.width,
                this.height,
            );
        }
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 3;
       	ctx.strokeRect(
            - this.width/2,
            - this.height/2,
            this.width,
            this.height,
        );
        ctx.restore();
    }

}