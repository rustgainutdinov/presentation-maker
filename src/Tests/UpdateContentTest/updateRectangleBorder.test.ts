import ContentType from "../../Const/ContentType";
import getDefaultPosition from "../../Methods/AddContent/GetParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/GetParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import getDefaultEditor from "../../Methods/AddContent/GetParamsOfContent/getDegaultEditor";
import updateRectangleBorder from "../../Methods/UpdateContent/updateRectangleBorder";
import Content from "../../Model/Slide/Content/Content"
import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
import throwNewExeption from "../Exeption";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
const editor = getDefaultEditor();

describe('updateRectangleBorderTest', () => {
    const rectangle: Rectangle = {
        ...getDefaultShape(ContentType.Rectangle),
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize(),
        rectangle: undefined
    };
    editor.currentContent = rectangle;
    const newEditor = updateRectangleBorder(editor, 2, "red", 1)

    test('checkNewBorder', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        }
        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        expect(newEditor.currentContent.border.color).toBe("red");
        expect(newEditor.currentContent.border.width).toBe(2);
        expect(newEditor.currentContent.border.type).toBe(1);

        expect(checkInstance(newEditor.currentContent)).toBe(true)
    });

    function checkInstance(content: Content) {
        if (isRectangle(content)) {
            return true;
        } else {
            return false
        }
    }
})