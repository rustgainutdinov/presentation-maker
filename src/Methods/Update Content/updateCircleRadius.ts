function updateCircleRadius(editor: Editor, circleRadius: number) {
	if (!instanceOfCircle(editor.currentContent)) {
		return;
	}
	const circle: Circle = editor.currentContent;
	circle.radius = circleRadius;
}
