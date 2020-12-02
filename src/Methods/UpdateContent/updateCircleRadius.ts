import Editor from "../../Model/Editor";
import instanceOfCircle from "../AddContent/instanceOfCircle";

function updateCircleRadius(editor: Editor, circleRadius: number) {
	if (!instanceOfCircle(editor.currentContent)) {
		return;
	}
	editor.currentContent.radius = circleRadius;
}

export default updateCircleRadius