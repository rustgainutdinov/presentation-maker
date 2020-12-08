import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import generateUuid from "../generateUuid";
import getNewEditor from "./getNewEditor";

function addContentToEditor(editor: Editor, content: Content): string {
	const uuid: string = generateUuid();
	const newEditor = getNewEditor(editor);
	newEditor.currentContent = content;
	newEditor.currentSlide.contentList[uuid] = content;
	return uuid;
}

export default addContentToEditor
