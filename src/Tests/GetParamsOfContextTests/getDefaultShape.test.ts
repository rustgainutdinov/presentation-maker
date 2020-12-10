import BorderType from "../../Const/BorderType";
import ContentType from "../../Const/ContentType";
import getDefaultShape from "../../Methods/AddContent/GetParamsOfContent/getDefaultShape";

describe('getDefaultShapeTests', () => {
    const type = ContentType.CIRCLE;
    test('getDefaultBorderColor', () => {
        expect(getDefaultShape(type).border).toStrictEqual({
            width: 1,
            color: '#00FF00',
            type: BorderType.SOLID
        });
    });
    test('getDefaultShapeBackground', () => {
        expect(getDefaultShape(type).background).toBe('#0000FF');
    });
})
