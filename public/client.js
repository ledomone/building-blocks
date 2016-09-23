$(function() {

	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		var list = [];
		for (var i in blocks) {
			list.push($('<li>', { text: blocks[i] }));
		}
		$('.block-list').append(list);
	}

	$('form').on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		var blockData = form.serialize();

		$.ajax({
			type: 'POST', url: '/blocks', data: blockData
		}).done(function(blockName){

		});
	});
});
