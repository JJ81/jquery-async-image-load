(function ($) {

	$.fn.AsyncImageLoad = function(options) {

		var settings = $.extend({}, $.fn.AsyncImageLoad.defaults, options);

		return this.each(function () {
			var 
				container = $(this),
				btnMore = $("."+settings.btnMoreClass),
				current_pos = 0, // 배열의 포인터
				img_size = settings.data.length,
				load_unit = settings.appendCount, // 한 번에 읽어들이는 갯수
				size=0,i=0; // for문의 변수 초기화

			btnMore.bind('click', function (e) {
				e.preventDefault();

				if(img_size > current_pos ){
					size=current_pos+load_unit;

					if(size > img_size){
						size = img_size;
					}

					for(i=current_pos;i<size;i++){	
						container.append(
							$('<div />')
							.attr('class', settings.imageWrapperClass)
							.append('<img src="'+settings.data[current_pos]+'" alt="" />')
						);
						current_pos++;
					}

					if(img_size === current_pos ){
						$(this).remove();
					}
				}
			}); // end btn event
		}); // end return
	};

	$.fn.AsyncImageLoad.defaults = {
		appendCount : 1,
		btnMoreClass : 'btn_more',
		imageWrapperClass : 'img_wrapper',
		data: []
	};
}(jQuery));