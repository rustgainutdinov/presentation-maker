import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import generateUuid from "../generateUuid";
import getNewEditor from "./getNewEditor";

function addContentToEditor(editor: Editor, content: Content): Editor {
	const uuid: string = generateUuid();
	const newEditor = getNewEditor(editor);

	newEditor.currentContent = content;
	console.log(content);
	newEditor.currentContent.uuid = uuid;
	console.log(content);
	newEditor.currentSlide.contentList[uuid] = content;

	return newEditor;
}

export default addContentToEditor
