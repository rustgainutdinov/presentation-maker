import ContentType from "../../const/ContentType";
import createTextContainer from "../../methods/addContent/createTextContainer";
import getDefaultTextContainer from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../methods/addContent/instanceOfText";
import Editor from "../../model/Editor";

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
