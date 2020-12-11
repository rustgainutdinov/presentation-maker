import addContentToEditor from "../../Methods/AddContent/addContentToEditor";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";

describe('addContentToEditorTest', () => {
    const editor = new Editor();
    const content: Content = {
        position: getDefaultPosition(),
        layer: 1,
        type: 2,
        uuid: ""
    };
    const newEditor = addContentToEditor(editor, content);

    test('addContentToEditor', () => {
        expect(newEditor.currentContent).toBe(content);
        expect(newEditor.currentSlide.contentList[newEditor.currentContent.uuid]).toBe(content)
    });
})