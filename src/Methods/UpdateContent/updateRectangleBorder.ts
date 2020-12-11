import Editor from "../../Model/Editor";
import getNewEditor from "../AddContent/getNewEditor";
import instanceOfRectangle from "../AddContent/instanceOfRectangle";

function updateRectangleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfRectangle(newEditor.currentContent)) {
		return;
	}

	const newRectangle = newEditor.currentContent;
	newRectangle.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	}

	newEditor.currentContent = newRectangle;
	return newEditor;
}

export default updateRectangleBorder