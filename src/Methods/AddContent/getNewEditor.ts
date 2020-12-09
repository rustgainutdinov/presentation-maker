import Action from "../../Model/Action";
import Editor from "../../Model/Editor";

function getNewEditor(editor: Editor) {
    const newEditor: Editor = new Editor();
    newEditor.actionsList = editor.actionsList;
    newEditor.currentContent = editor.currentContent;
    newEditor.currentPresentation = editor.currentPresentation;
    newEditor.currentSlide = editor.currentSlide

    return newEditor
}

export default getNewEditor