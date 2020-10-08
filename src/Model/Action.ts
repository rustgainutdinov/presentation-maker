class Action {
	get after(): Presentation {
		return this._after;
	}
	
	get before(): Presentation {
		return this._before;
	}
	
	private _before: Presentation;
	private _after: Presentation;
	
	constructor(before: Presentation, after: Presentation) {
		this._before = before;
		this._after = after;
		
	}
}
