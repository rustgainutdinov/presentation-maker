function updateRectangleSiz(editor: Editor, width: number, height: number) {
	if (!instanceOfRectangle(editor.currentContent)) {
		return;
	}
	const rectangle : Rectangle = editor.currentContent;
	rectangle.rectangleSize = {
        width: width,
        height: height
	};
}
