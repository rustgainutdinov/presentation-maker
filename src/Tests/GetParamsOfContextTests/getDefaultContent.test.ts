import ContentType from "../../Const/ContentType";
import getDefaultContent from "../../Methods/AddContent/GetParamsOfContent/getDefaultContent"

describe('getDefaultContentTests', () => {
    const type = ContentType.CIRCLE;
    test('getDefaultContentPositionTest', () => {
        //Однвременно тест на функцию GetDefaultPosition
        expect(getDefaultContent(type).position).toStrictEqual({
            x: 100,
            y: 100
        });
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultContent(type).layer).toBe(0);
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultContent(type).type).toBe(1);
    });
})

