class Slide {
	get background(): string {
		return this._background;
	}
	
	set background(value: string) {
		this._background = value;
	}
	
	get contentList(): Array<Content> {
		return this._contentList;
	}
	
	set contentList(value: Array<Content>) {
		this._contentList = value;
	}
	
	get animation(): number {
		return this._animation;
	}
	
	set animation(value: number) {
		this._animation = value;
	}
	private _background: string;
	private _contentList: Array<Content>;
	private _animation: number;
	
	constructor(background: string, contentList: Array<Content>, animation: number) {
		this._background = background;
		this._contentList = contentList;
		this._animation = animation;
		
	}
}
