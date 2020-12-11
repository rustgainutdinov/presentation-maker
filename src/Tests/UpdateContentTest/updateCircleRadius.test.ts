import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";
import instanceOfCircle from "../../Methods/AddContent/instanceOfCircle";
import updateCircleBorder from "../../Methods/UpdateContent/updateCircleBorder";
import updateCircleRadius from "../../Methods/UpdateContent/updateCircleRadius";
import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content"
import Circle from "../../Model/Slide/Content/Shape/Circle";

describe('updateCircleRadiusTest', () => {
    let editor = new Editor();
    const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
        radius: 100
    });
    editor.currentContent = circle;
    const newEditor = updateCircleRadius(editor, 200);

    test('checkNewRadius', () => {
        if (!instanceOfCircle(newEditor?.currentContent)) {
            return;
        }

        expect(newEditor?.currentContent.radius).toBe(200);
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