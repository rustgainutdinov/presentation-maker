import ContentType from "../Const/ContentType";
import generateUuid from "../Methods/generateUuid";
import Action from "./Action";
import Presentation from "./Presentation";
import Content from "./Slide/Content/Content";
import Slide from "./Slide/Slide";

class Editor {
	actionsList: Array<Action>;
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

export default Editor