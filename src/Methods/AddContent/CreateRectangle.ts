import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
import getDefaultPosition from "./GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./GetParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "./GetParamsOfContent/getDefaultShape";
import generateUuid from "../generateUuid";

function createRectangle(editor: Editor): Editor {
	//TODO: ✅ попробовать деструктуризацию вместо object.assign
	//TODO: ГЛЕБ, сделай создание всех контентов по образу и подобию этого
	const rectangle: Rectangle = {
		...getDefaultShape(ContentType.Rectangle),
		bottomRightCoordinate: getDefaultPosition(),
		rectangleSize: getDefaultRectangleSize()
	};
	const uuid = generateUuid();
	let contentList = {
		[uuid]: rectangle,
		...editor.currentSlide.contentList
	};
	return {
		...contentList,
		...editor,
	};
}

export default createRectangle
