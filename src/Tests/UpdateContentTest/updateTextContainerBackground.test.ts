import ContentType from "../../const/ContentType";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import getDefaultTextContainer from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../methods/addContent/instanceOfText";
import updateTextContainerBackground from "../../methods/updateContent/updateTextContainerBackground";
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

describe('updateTextContainerBackgroundTest', () => {

    const newEditor = updateTextContainerBackground(editor, "red")

    test('checkNewBackground', () => {
        if (!instanceOfTextContainer(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.background).toBe("red");

        expect(checkInstance(newEditor?.currentContent)).toBe(true)
    });

})
