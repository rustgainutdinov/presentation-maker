import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
import addContentToEditor from "./addContentToEditor";
import getDefaultPosition from "./Get Params Of Content/getDefaultPosition";
import getDefaultRectangleSize from "./Get Params Of Content/getDefaultRectangleSize";
import getDefaultShape from "./Get Params Of Content/getDefaultShape";

function createRectangle(editor: Editor): string {
	const rectangle: Rectangle = Object.assign(getDefaultShape(ContentType.Rectangle), {
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize()
	});
	return addContentToEditor(editor, rectangle);
}

export default createRectangle