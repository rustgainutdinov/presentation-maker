class Font {
	get size(): number {
		return this._size;
	}
	
	set size(value: number) {
		this._size = value;
	}
	
	get weight(): number {
		return this._weight;
	}
	
	set weight(value: number) {
		this._weight = value;
	}
	
	get family(): string {
		return this._family;
	}
	
	set family(value: string) {
		this._family = value;
	}
	
	get lineHeight(): number {
		return this._lineHeight;
	}
	
	set lineHeight(value: number) {
		this._lineHeight = value;
	}
	
	get style(): string {
		return this._style;
	}
	
	set style(value: string) {
		this._style = value;
	}
	
	private _size: number;
	private _weight: number;
	private _family: string;
	private _lineHeight: number;
	private _style: string;
	
	constructor(size: number, weight: number, family: string, lineHeight: number, style: string) {
		this._size = size;
		this._weight = weight;
		this._family = family;
		this._lineHeight = lineHeight;
		this._style = style;
	}
}
