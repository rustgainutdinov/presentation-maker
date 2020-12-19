import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import { getDefaultTextContainer } from "../../Methods/AddContent/GetParamsOfContent/getDefaultTextContainer";
import getDefaultEditor from "../../Methods/AddContent/GetParamsOfContent/getDegaultEditor";
import updateTextContainerWidth from "../../Methods/UpdateContent/updateTextContainerWidth";
import Content from "../../Model/Slide/Content/Content"
import TextContainer from "../../Model/Slide/Content/TextContainer";
import throwNewExeption from "../Exeption";

function isTextCntainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}
function checkInstance(content: Content) {
    if (isTextCntainer(content)) {
        return true;
    } else {
        return false
    }
}
const editor = getDefaultEditor();
const textContainer: TextContainer = {
    ...getDefaultShape(ContentType.TextContainer),
    ...getDefaultTextContainer()
};

editor.currentContent = textContainer;
describe('updateTextContainerWidthTest', () => {

    const newEditor = updateTextContainerWidth(editor, 200)

    test('checkNewSize', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        };
        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption
            return;
        }

        expect(newEditor.currentContent.width).toBe(200);

        expect(checkInstance(newEditor.currentContent)).toBe(true)
    });

})