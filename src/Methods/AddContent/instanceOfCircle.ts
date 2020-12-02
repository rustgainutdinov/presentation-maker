import Circle from "../../Model/Slide/Content/Shape/Circle";

function instanceOfCircle(object: any): object is Circle {
	return 'radius' in object;
}

export default instanceOfCircle