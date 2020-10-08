class TextContainer extends Content {
	get width(): string {
		return this._width;
	}
	
	set width(value: string) {
		this._width = value;
	}
	
	get background(): string {
		return this._background;
	}
	
	set background(value: string) {
		this._background = value;
	}
	
	get richText(): RichText {
		return this._richText;
	}
	
	set richText(value: RichText) {
		this._richText = value;
	}
	
	private _width: string;
	private _background: string;
	private _richText: RichText;
	
	constructor(width: string, background: string, richText: RichText, position: Point, layer: number) {
		super(position, layer);
		this._width = width;
		this._background = background;
		this._richText = richText;
	}
}
