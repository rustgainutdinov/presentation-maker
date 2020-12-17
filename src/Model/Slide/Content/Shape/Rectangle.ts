import Point from "../Point"
import RectangleSize from "../RectangleSize"
import Shape from "../Shape"

type Rectangle = Shape & {
	//readonly fileds
	bottomRightCoordinate: Point;
	rectangleSize: RectangleSize;
}

export default Rectangle