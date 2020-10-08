class Border {
	get width(): number {
		return this._width;
	}
	
	set width(value: number) {
		this._width = value;
	}
	
	get color(): string {
		return this._color;
	}
	
	set color(value: string) {
		this._color = value;
	}
	
	get type(): number {
		return this._type;
	}
	
	set type(value: number) {
		this._type = value;
	}
	
	private _width: number;
	private _color: string;
	private _type: number;
	
	constructor(width: number, color: string, type: number) {
		this._width = width;
		this._color = color;
		this._type = type;
	}
}
