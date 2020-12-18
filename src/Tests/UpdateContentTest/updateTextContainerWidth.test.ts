import ContentType from "../../const/ContentType";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import getDefaultTextContainer from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../methods/addContent/instanceOfText";
import updateTextContainerWidth from "../../methods/updateContent/updateTextContainerWidth";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import TextContainer from "../../model/slide/content/TextContainer";

function checkInstance(content: Content | undefined) {
    if (instanceOfTextContainer(content)) {
        return true;
    } else {
        return false
    }
}

let editor = new Editor();
const textContainer: TextContainer = Object.assign(getDefaultShape(ContentType.TextContainer),
    Object.assign(getDefaultTextContainer()));

editor.currentContent = textContainer;

describe('updateTextContainerWidthTest', () => {

    const newEditor = updateTextContainerWidth(editor, 200)

    test('checkNewSize', () => {
        if (!instanceOfTextContainer(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.width).toBe(200);

        expect(checkInstance(newEditor?.currentContent)).toBe(true)
    });

})
