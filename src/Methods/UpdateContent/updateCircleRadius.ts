import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import Circle from "../../Model/Slide/Content/Shape/Circle";
import instanceOfCircle from "../AddContent/instanceOfCircle";

function isCircle(content: Content): content is Circle {
	return 'circle' in content;
}

function updateCircleRadius(editor: Editor, circleRadius: number) {
	if (!isCircle(editor.currentContent)) {
		return
	}
	const circle: Circle = {
		...editor.currentContent,
		radius: circleRadius
	};
	return {
		...editor,
		currentContent: {
			...circle
		}
	};
}

export default updateCircleRadius