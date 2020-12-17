import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import generateUuid from "../generateUuid";
import getDefaultShape from "./GetParamsOfContent/getDefaultShape";

function getDefaultRadius(): number {
	return 100;
}

function createCircle(editor: Editor): Editor {
	const circle: Circle = {
		...getDefaultShape(ContentType.Circle),
		radius: getDefaultRadius(),
		circle: undefined
	}
	const uuid = generateUuid();
	return {
		...editor,
		currentSlide: {
			...editor.currentSlide,
			contentList: {
				...editor.currentSlide.contentList,
				[uuid]: circle
			}
		}
	}
}

export default createCircle