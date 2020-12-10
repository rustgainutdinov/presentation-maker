import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import generateUuid from "../generateUuid";
import getNewEditor from "./getNewEditor";

function addContentToEditor(editor: Editor, content: Content): string {
	const uuid: string = generateUuid();
	const newEditor = getNewEditor(editor);
	editor.currentContent = content;
	editor.currentSlide.contentList[uuid] = content;
	//Сделать так что бы создавался новый едитор и возвращать его
	return uuid;
}

export default addContentToEditor
