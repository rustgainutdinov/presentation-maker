import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import generateUuid from "../generateUuid";

function addContentToEditor(editor: Editor, content: Content): string {
	const uuid: string = generateUuid();
	editor.currentContent = content;
	editor.currentSlide.contentList[uuid] = content;
	return uuid;
}

export default addContentToEditor
