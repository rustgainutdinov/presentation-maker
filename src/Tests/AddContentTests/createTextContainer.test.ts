import ContentType from "../../Const/ContentType";
import createTextContainer from "../../Methods/AddContent/createTextContainer";
import getDefaultTextContainer from "../../Methods/AddContent/GetParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../Methods/AddContent/instanceOfText";
import Editor from "../../Model/Editor";

describe('createTextContainerTest', () => {
    const editor = new Editor();
    const textContainerType = ContentType.TextContainer;
    const newEditor = createTextContainer(editor);
    const textContainer = getDefaultTextContainer();

    test('addContentToEditor', () => {
        expect(newEditor.currentContent.type).toBe(textContainerType);
        expect(checkInstance()).toBe(true)

        if (!instanceOfTextContainer(newEditor.currentContent)) {
            return;
        }

        expect(newEditor.currentContent.richText).toStrictEqual(textContainer.richText);
        expect(newEditor.currentContent.background).toBe(textContainer.background);
        expect(newEditor.currentContent.width).toBe(textContainer.width);
    });

    function checkInstance() {
        if (instanceOfTextContainer(newEditor.currentContent)) {
            return true;
        } else {
            return false
        }
    }
})