import addContentToEditor from "../../Methods/AddContent/addContentToEditor";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";

describe('addContentToEditorTest', () => {
    const editor = new Editor();
    const content: Content = {
        position: getDefaultPosition(),
        layer: 1,
        type: 2
    };

    test('addContentToEditor', () => {
        const uuid = addContentToEditor(editor, content);
        expect(editor.currentContent).toBe(content);
        expect(editor.currentSlide.contentList[uuid]).toBe(content)
    });
})