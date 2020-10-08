class PictureContainer extends Content {
	get width(): number {
		return this._width;
	}
	
	set width(value: number) {
		this._width = value;
	}
	
	get height(): number {
		return this._height;
	}
	
	set height(value: number) {
		this._height = value;
	}
	
	get image(): Image {
		return this._image;
	}
	
	set image(value: Image) {
		this._image = value;
	}
	
	private _width: number;
	private _height: number;
	private _image: Image;
	
	constructor(width: number, height: number, image: Image, position: Point, layer: number) {
		super(position, layer);
		this._width = width;
		this._height = height;
		this._image = image;
	}
}
