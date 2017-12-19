(function ($) {
    $.fn.initialization = function (options) {
        var selector = this;
        if (selector.attr('multiple') == undefined) {
            selector.data('open', false);
            var applyCSS = $.extend({
                height: "100px"
            }, options);
            var applyAttribute = $.extend({
                size: "5"
            }, options);
            selector.click(function () {
                if (selector.data('open') == false) {
                    selector.data('open', true);
                    if (selector.find('option').length > 6) {
                        selector.css({height: applyCSS});
                        selector.attr("size", applyAttribute.size);
                    }
                    else
                        selector.css({overflow: 'hidden'});

                    $(document).mouseup(function waitForCloseClick() {
                        console.log("hello");
                        $(document).unbind('mouseup');
                        setTimeout(function () {
                            selector.data('open', false);
                        }, 1);
                        selector.removeAttr("size");
                        return false;
                    });
                } else {
                    selector.data('open', false);
                }
            });
        }
    }
}(jQuery));