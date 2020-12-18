import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Circle from "../../model/slide/content/shape/Circle";

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
