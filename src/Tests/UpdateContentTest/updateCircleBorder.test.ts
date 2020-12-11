import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import instanceOfCircle from "../../Methods/AddContent/instanceOfCircle";
import updateCircleBorder from "../../Methods/UpdateContent/updateCircleBorder";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content"
import Circle from "../../Model/Slide/Content/Shape/Circle";

describe('updateCircleBorderTest', () => {
    let editor = new Editor();
    const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
        radius: 100
    });
    editor.currentContent = circle;
    const newEditor = updateCircleBorder(editor, 2, "red", 1);

    test('checkNewBorder', () => {
        if (!instanceOfCircle(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.border.color).toBe("red");
        expect(newEditor?.currentContent.border.width).toBe(2);
        expect(newEditor?.currentContent.border.type).toBe(1);

        expect(checkInstance(newEditor?.currentContent)).toBe(true)
    });

    function checkInstance(content: Content | undefined) {
        if (instanceOfCircle(content)) {
            return true;
        } else {
            return false
        }
    }
})