module("Skeletor main navigation tests", {
	setup: function() {
		S.open("../../public/index.html");
	}
});

test("the link a#show-other points to the correct url", function(){
	ok( S('#show-other').attr('href') === '#other', 'URL ok')
});

test("clicking a#show-other causes browser to navigate to the section Other", function(){
	S("a#show-other").click(function(){
		S('#other-view').visible(function(){
			ok( S('#example-view').css('display') === 'none', 'Section Other visible and section Example invisible');			
		});
	});
});

