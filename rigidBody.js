import {Vec} from './vector.js';
import {Rect} from './rect.js';

export class RigidBody {
	constructor(shape) {
		this.shape = shape;   
		this.velocity = new Vec(0, 0);

		this.angularVelocity = 10;
	}	

	updateShape(dt) {
		const ds = this.velocity.clone().multiply(dt);  //multiply v * dt = giving you displacement per frame
		this.shape.position.add(ds);

		this.shape.orientation += this.angularVelocity * dt;

		//update verticies and aabb of shape if it is rectagle
		if (this.shape instanceof Rect) {
				this.shape.updateVerticies();
		}
		//ubdate aabb
		this.shape.updateAabb();
    } 

}