import ContentType from "../../Const/ContentType";
import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import addContentToEditor from "./addContentToEditor";
import getDefaultShape from "./GetParamsOfContent/getDefaultShape";
import getNewEditor from "./getNewEditor"

function createCircle(editor: Editor): string {
	const newEditor = getNewEditor(editor);

	const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
		radius: 100,
	});
	return addContentToEditor(newEditor, circle);
}

export default createCircle