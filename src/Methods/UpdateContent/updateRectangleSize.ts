import instanceOfRectangle from "../AddContent/instanceOfRectangle";
import Editor from "../../Model/Editor";
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";

function updateRectangleSiz(editor: Editor, width: number, height: number) {
	if (!instanceOfRectangle(editor.currentContent)) {
		return;
	}
	editor.currentContent.rectangleSize = {
        width: width,
        height: height
	};
}

export default updateRectangleSiz