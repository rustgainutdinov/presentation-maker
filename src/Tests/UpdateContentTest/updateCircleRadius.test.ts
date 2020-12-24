import ContentType from "../../const/ContentType";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import instanceOfCircle from "../../methods/addContent/instanceOfCircle";
import {updateCircleRadius} from "../../methods/updateContent/updateCircleRadius";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content"
import Circle from "../../model/slide/content/shape/Circle";

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
