class Image {
	get name(): string {
		return this._name;
	}
	
	set name(value: string) {
		this._name = value;
	}
	
	get path(): string {
		return this._path;
	}
	
	set path(value: string) {
		this._path = value;
	}
	private _name: string;
	private _path: string;
	
	constructor(name: string, path: string) {
		this._name = name;
		this._path = path;
	}
}
