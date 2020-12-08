import Editor from "../../Model/Editor";
import instanceOfCircle from "../AddContent/instanceOfCircle";

function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!instanceOfCircle(editor.currentContent)) {
		return;
	}

	editor.currentContent.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
}

export default updateCircleBorder