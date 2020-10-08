class Circle extends Shape {
	get radius(): number {
		return this._radius;
	}
	
	set radius(value: number) {
		this._radius = value;
	}
	
	private _radius: number;
	
	constructor(radius: number, border: Border, background: string, point: Point, layer: number) {
		super(border, background, point, layer);
		this._radius = radius;
		
	}
}
