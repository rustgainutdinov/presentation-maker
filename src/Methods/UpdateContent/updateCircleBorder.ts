import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import getNewEditor from "../AddContent/getNewEditor";
import instanceOfCircle from "../AddContent/instanceOfCircle";

function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfCircle(newEditor.currentContent)) {
		return;
	}

	const newCircle: Circle = newEditor.currentContent;
	newCircle.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
	newEditor.currentContent = newCircle;
	
	return newEditor;
}

export default updateCircleBorder