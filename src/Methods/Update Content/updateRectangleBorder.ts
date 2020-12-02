function updateRectangleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!instanceOfRectangle(editor.currentContent)) {
		return;
	}
	const rectangle : Rectangle = editor.currentContent;
	rectangle.border = {
		width: borderWidth,
		color: borderColor,
		type: borderType,
	};
}
