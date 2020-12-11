import BorderType from "../../Const/BorderType";
import getDefaultBorder from "../../Methods/AddContent/GetParamsOfContent/getDefaultBorder"

describe('getDefaultBorderTests', () => {

    test('getDefaultBorderColor', () => {
        expect(getDefaultBorder().color).toBe('#00FF00');
    });
    test('getDefaultBorderWidth', () => {
        expect(getDefaultBorder().width).toBe(1);
    });
    test('getDefaultBorderType', () => {
        expect(getDefaultBorder().type).toBe(BorderType.SOLID);
    })
})
