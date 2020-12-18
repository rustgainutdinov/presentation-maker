import addContentToEditor from "../../methods/addContent/addContentToEditor";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

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
