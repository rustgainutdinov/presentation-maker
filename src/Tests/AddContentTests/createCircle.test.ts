import ContentType from "../../const/ContentType";
import instanceOfCircle from "../../methods/addContent/instanceOfCircle";
import createCircle from "../../methods/addContent/createCircle";

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
