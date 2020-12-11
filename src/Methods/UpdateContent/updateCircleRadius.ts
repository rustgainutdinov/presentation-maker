import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import getNewEditor from "../AddContent/getNewEditor";
import instanceOfCircle from "../AddContent/instanceOfCircle";

function updateCircleRadius(editor: Editor, circleRadius: number) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfCircle(newEditor.currentContent)) {
		return;
	}

	const newCircle: Circle = newEditor.currentContent;
	newCircle.radius = circleRadius;
	newEditor.currentContent = newCircle

	return newEditor;
}

export default updateCircleRadius