import Editor from "../../Model/Editor";
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
import instanceOfRectangle from "../AddContent/instanceOfRectangle";

function updateRectangleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!instanceOfRectangle(editor.currentContent)) {
		return;
	}
	editor.currentContent.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
}

export default updateCircleBorder