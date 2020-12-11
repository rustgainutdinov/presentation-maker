import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import getDefaultTextContainer from "../../Methods/AddContent/GetParamsOfContent/getDefaultTextContainer";
import instanceOfTextContainer from "../../Methods/AddContent/instanceOfText";
import updateTextContainerWidth from "../../Methods/UpdateContent/updateTextContainerWidth";
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