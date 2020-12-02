function createRectangle(editor: Editor): string {
	const rectangle: Rectangle = Object.assign(getDefaultShape(ContentType.Rectangle), {
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize()
	});
	return addContentToEditor(editor, rectangle);
}