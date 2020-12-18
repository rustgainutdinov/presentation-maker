import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";
import generateUuid from "../generateUuid";

function createRectangle(editor: Editor): Editor {
	//TODO: ✅ попробовать деструктуризацию вместо object.assign
	//TODO: ГЛЕБ, сделай создание всех контентов по образу и подобию этого
	const rectangle: Rectangle = {
		...getDefaultShape(ContentType.Rectangle),
		bottomRightCoordinate: getDefaultPosition(),
		rectangleSize: getDefaultRectangleSize(),
		rectangle: undefined
	};
	const uuid = generateUuid();
	return {
		...editor,
		currentSlide: {
			...editor.currentSlide,
			contentList: {
				...editor.currentSlide.contentList,
				[uuid]: rectangle
			}
		}
	};
}

export default createRectangle
