import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import addContentToEditor from "./addContentToEditor";
import getDefaultShape from "./GetParamsOfContent/getDefaultShape";

function createCircle(editor: Editor): Editor {

	const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
		radius: 100,
	});
	return addContentToEditor(editor, circle);
}

export default createCircle