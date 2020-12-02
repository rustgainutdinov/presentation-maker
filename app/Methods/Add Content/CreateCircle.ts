function createCircle(editor: Editor): string {
	const circle: Circle = Object.assign(getDefaultShape(ContentType.CIRCLE), {
		radius: 100,
	});
	return addContentToEditor(editor, circle);
}
