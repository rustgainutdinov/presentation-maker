import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import getDefaultTextContainer from "../../Methods/AddContent/GetParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../Methods/AddContent/instanceOfText";
import updateTextContainerBackground from "../../Methods/UpdateContent/updateTextContainerBackground";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content"
import TextContainer from "../../Model/Slide/Content/TextContainer";

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