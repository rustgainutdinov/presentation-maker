import Shape from "../../../Model/Slide/Content/Shape";
import getDefaultBorder from "./getDefaultBorder";
import getDefaultContent from "./getDefaultContent";

function getDefaultShape(contentType: number): Shape {
	return Object.assign(getDefaultContent(contentType), {
		border: getDefaultBorder(),
		background: '#0000FF',
	});
}

export default getDefaultShape