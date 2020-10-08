class RichText {
	get color(): string {
		return this._color;
	}
	
	set color(value: string) {
		this._color = value;
	}
	
	get font(): Font {
		return this._font;
	}
	
	set font(value: Font) {
		this._font = value;
	}
	
	get value(): string {
		return this._value;
	}
	
	set value(value: string) {
		this._value = value;
	}
	
	private _color: string;
	private _font: Font;
	private _value: string;
	
	constructor(color: string, font: Font, value: string) {
		this._color = color;
		this._font = font;
		this._value = value;
	}
}
