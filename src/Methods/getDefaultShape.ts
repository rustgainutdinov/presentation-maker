function getDefaultShape(contentType: number): Shape {
	return Object.assign(getDefaultContent(contentType), {
		border: getDefaultBorder(),
		background: '#0000FF',
	});
}
