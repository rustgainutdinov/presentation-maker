import Rectangle from "../../Model/Slide/Content/Shape/Rectangle";
	
function instanceOfRectangle(object: any): object is Rectangle {
	return 'bottomRightCoordinate' in object;
}

export default instanceOfRectangle