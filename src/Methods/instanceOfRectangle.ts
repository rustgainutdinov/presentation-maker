function instanceOfRectangle(object: any): object is Rectangle {
	return 'bottomRightCoordinate' in object;
}
