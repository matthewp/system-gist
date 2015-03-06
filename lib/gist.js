export function fetch(load) {
	var loader = this;

	var id = load.metadata.pluginArgument;
	var url = "https://api.github.com/gists/" + id;
	return loader.fetch({
		name: load.name,
		address: url,
		metadata: {}
	}).then(function(json){
		var result = JSON.parse(json);
		var files = result.files;
		var data = files[Object.keys(files)[0]];
		var source = data.content;
		return source;
	});
}
