import Editor from "../../Model/Editor";

function changeCurrentContent(editor: Editor, newSlideId: string) {
	editor.currentContent = editor.currentSlide.contentList[newSlideId];
}

export default changeCurrentContent