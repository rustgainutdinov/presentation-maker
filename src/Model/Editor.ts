class Editor {
	private actionsList: Array<Action>;
	currentPresentation: Presentation;
	currentSlide: Slide;
	currentContent: Content;
	
	constructor() {
		this.actionsList = [];
		this.currentContent = {
			position: {
				x: 0,
				y: 0
			},
			layer: 0,
			type: ContentType.DEFAULT
		};
		this.currentSlide = {
			background: "#FFFFFF",
			animation: 0,
			contentList: {
				[generateUuid()]: this.currentContent
			}
		};
		this.currentPresentation = {
			name: 'name',
			date: new Date(),
			author: 'author',
			sliderList: []
		};
		
	}
	
	add(action: Action) {
		this.actionsList.push(action);
	}
	
	delete(action: Action) {
		this.actionsList.push(action);
	}
}
