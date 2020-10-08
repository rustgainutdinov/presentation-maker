class Shape extends Content implements IShape {
	get border(): Border {
		return this._border;
	}
	
	set border(value: Border) {
		this._border = value;
	}
	
	get background(): string {
		return this._background;
	}
	
	set background(value: string) {
		this._background = value;
	}
	
	private _border: Border;
	private _background: string;
	
	constructor(border: Border, background: string, point: Point, layer: number) {
		super(point, layer);
		this._border = border;
		this._background = background;
		
	}
}
