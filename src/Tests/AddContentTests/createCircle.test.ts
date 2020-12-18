import ContentType from "../../Const/ContentType";
import instanceOfCircle from "../../Methods/AddContent/instanceOfCircle";
import createCircle from "../../Methods/AddContent/createCircle";

describe('createCircleTest', () => {
	const editor = new Editor();
	const circleType = ContentType.CIRCLE;
	const newEditor = createCircle(editor);
	
	test('addContentToEditor', () => {
		expect(newEditor.currentContent.type).toBe(circleType);
		expect(checkInstance()).toBe(true)
		
		if (!instanceOfCircle(newEditor.currentContent)) {
			return;
		}
		
		expect(newEditor.currentContent.radius).toBe(100);
	});
	
	function checkInstance() {
		if (instanceOfCircle(newEditor.currentContent)) {
			return true;
		} else {
			return false
		}
	}
});
