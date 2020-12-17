import Editor from "../../Model/Editor";
import TextContainer from "../../Model/Slide/Content/TextContainer";
import instanceOfTextContainer from "../AddContent/instanceOfText";
function isRectangle(content: Content): content is TextContainer {
	return 'RichText' in content;
}


function updateRichTextColor(editor: Editor, color: string) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfTextContainer(newEditor.currentContent)) {
		return;
	}

	const newTextContainer: TextContainer = newEditor.currentContent;
	newTextContainer.richText.color = color;
	newEditor.currentContent = newTextContainer;

	newEditor.currentContent = newTextContainer;
	return newEditor;
}

function updateRichTextFont(editor: Editor, font: number) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfTextContainer(newEditor.currentContent)) {
		return;
	}

	const newTextContainer: TextContainer = newEditor.currentContent;
	newTextContainer.richText.font = font;
	newEditor.currentContent = newTextContainer;

	newEditor.currentContent = newTextContainer;
	return newEditor;
}

function updateRichTextValue(editor: Editor, char: string) {
	const newEditor = getNewEditor(editor);
	if (!instanceOfTextContainer(newEditor.currentContent)) {
		return;
	}

	const newTextContainer: TextContainer = newEditor.currentContent;
	newTextContainer.richText.value = char;
	newEditor.currentContent = newTextContainer;

	newEditor.currentContent = newTextContainer;
	return newEditor;
}

export {
	updateRichTextValue,
	updateRichTextFont,
	updateRichTextColor
}