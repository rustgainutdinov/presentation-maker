import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
import addContentToEditor from "./addContentToEditor";
import getNewEditor from "./getNewEditor";
import getDefaultPosition from "./GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./GetParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "./GetParamsOfContent/getDefaultShape";

function createRectangle(editor: Editor): string {
	const newEditor = getNewEditor(editor);

	const rectangle: Rectangle = Object.assign(getDefaultShape(ContentType.Rectangle), {
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize()
	});
	return addContentToEditor(newEditor, rectangle);
}

export default createRectangle