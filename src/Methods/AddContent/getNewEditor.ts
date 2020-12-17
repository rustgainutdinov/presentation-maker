import Editor from "../../Model/Editor";

function getNewEditor(editor: Editor) {
    //TODO: ГЛЕБ, этот метод теперь не нужен

    newEditor.actionsList = editor.actionsList;
    newEditor.currentContent = editor.currentContent;
    newEditor.currentPresentation = editor.currentPresentation;
    newEditor.currentSlide = editor.currentSlide

    return newEditor
}

export default getNewEditor
