import getDefaultTextContainer from "../../Methods/AddContent/GetParamsOfContent/getDefaultTextContainer";

describe('getDefaultContentTests', () => {
    test('getDefaultContentPositionTest', () => {
        expect(getDefaultTextContainer().width).toBe(100);
    });
    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultTextContainer().background).toBe('#ffffff');
    });
    //Одновременно тест на функцию getDefaultRichText
    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultTextContainer().richText).toStrictEqual({
            color: '#ffffff',
            font: 12,
            value: ''
        });
    });
})