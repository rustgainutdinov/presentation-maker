import addContentToEditor from "../../Methods/AddContent/addContentToEditor";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";

describe('changeCurrentContentTest', () => {
    const editor = new Editor();
    const content: Content = {
        position: getDefaultPosition(),
        layer: 1,
        type: 2,
        uuid: ""
    };

    const firstEditor = addContentToEditor(editor, content);
    const firstId = firstEditor.currentContent.uuid;
    const secondEditor = addContentToEditor(editor, content);
    const secondId = secondEditor.currentContent.uuid;

    test('addContentToEditor', () => {
        expect(firstId).not.toBe(secondId);
    });
})