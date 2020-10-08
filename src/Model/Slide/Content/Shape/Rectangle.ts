class Rectangle extends Shape {
	get bottomRightCoordinate(): Point {
		return this._bottomRightCoordinate;
	}
	
	set bottomRightCoordinate(value: Point) {
		this._bottomRightCoordinate = value;
	}
	
	private _bottomRightCoordinate: Point;
	
	constructor(bottomRightCoordinate: Point, border: Border, background: string, point: Point, layer: number) {
		super(border, background,point, layer);
		this._bottomRightCoordinate = bottomRightCoordinate;
		
	}
}
