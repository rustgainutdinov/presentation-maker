import Editor from "../../Model/Editor";
import TextContainer from "../../Model/Slide/Content/TextContainer";
import getNewEditor from "../AddContent/getNewEditor";
import instanceOfTextContainer from "../AddContent/instanceOfText";

function updateTextContainerBackground(editor: Editor, background: string) {
    const newEditor = getNewEditor(editor);
    
	if (!instanceOfTextContainer(newEditor.currentContent)) {
		return;
    }
    
	const newTextContainer: TextContainer = newEditor.currentContent;
	newTextContainer.background = background;
	newEditor.currentContent = newTextContainer;

	return newEditor;
}

export default updateTextContainerWidth