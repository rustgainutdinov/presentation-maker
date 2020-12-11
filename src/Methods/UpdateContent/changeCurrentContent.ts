import Editor from "../../Model/Editor";
import getNewEditor from "../AddContent/getNewEditor";

function changeCurrentContent(editor: Editor, newSlideId: string) {
	const newEditor = getNewEditor(editor);	 
	newEditor.currentContent = newEditor.currentSlide.contentList[newSlideId];

	return newEditor
}

export default changeCurrentContent