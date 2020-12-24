import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import {isCircle} from "../typeGuardMethods/isCircle";


function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!isCircle(editor.currentContent)) {
		return
	}
	const circle: Circle = {
		...editor.currentContent,
		border: {
			width: borderWidth,
			color: borderColor,
			type: borderType
		}
	};
	return {
		...editor,
		currentContent: {
			...circle
		}
	};
}

export default updateCircleBorder
