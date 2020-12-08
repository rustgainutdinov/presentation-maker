import instanceOfRectangle from "../AddContent/instanceOfRectangle";
import Editor from "../../Model/Editor";
import getNewEditor from "../AddContent/getNewEditor";

function updateRectangleSiz(editor: Editor, width: number, height: number) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfRectangle(newEditor.currentContent)) {
		return;
	}
	
	const newRectangle =  newEditor.currentContent;
	newRectangle.rectangleSize = {
        width: width,
        height: height
	};

	newEditor.currentContent = newRectangle;
	return newEditor;
}

export default updateRectangleSiz