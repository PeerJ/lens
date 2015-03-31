$(document).one("click", ".lens-article", function(event) {
	event.preventDefault();
	var app = new window.Lens({ document_url: this.href });
	app.start();
	window.app = app;
});

var articles = document.createElement("ul");
articles.style.margin = "20px";
document.body.appendChild(articles);

$.getJSON("https://peerj.com/articles/index.json?limit=20", function(data) {
	$.each(data._items, function(key, item) {
		var article = $("<a/>", { text: item.title, href: item._links.alternate.xml.href });
		article.addClass("lens-article");
		$("<li/>").append(article).appendTo(articles);
	});
});
