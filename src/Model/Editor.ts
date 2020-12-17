import ContentType from "../Const/ContentType";
import generateUuid from "../Methods/generateUuid";
import Action from "./Action";
import Presentation from "./Presentation";
import Content from "./Slide/Content/Content";
import Slide from "./Slide/Slide";

class Editor {
	//TODO: Массив состояний с указателями! Харнить Editor 
	//TODO: ActionList -> вынести из Editor
	//TODO: Class Editor - > JSObject (чтобы проще создавать новый едитор)
	//TODO: Персисцентная структура данных должна быть
	//TODO: Сразу редакс реакт dispatch() -> меняет стейт -> стор знает о новом стейте -> ...
	//JSPDF


	actionsList: Array<Action>;
	currentPresentation: Presentation;
	currentSlide: Slide;
	currentContent: Content;
	// selection:  {
	// currentSlide: Slide;
	// currentContent: Content;
	// }

	constructor() {
		this.actionsList = [];
		this.currentContent = {
			position: {
				x: 0,
				y: 0
			},
			layer: 0,
			type: ContentType.DEFAULT,
			uuid: ""
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