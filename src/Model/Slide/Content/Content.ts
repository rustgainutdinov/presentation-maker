class Content implements IContent {
	get position(): Point {
		return this._position;
	}
	
	set position(value: Point) {
		this._position = value;
	}
	
	get layer(): number {
		return this._layer;
	}
	
	set layer(value: number) {
		this._layer = value;
	}
	
	private _position: Point;
	private _layer: number;
	
	constructor(position: Point, layer: number) {
		this._position = position;
		this._layer = layer;
	}
}
