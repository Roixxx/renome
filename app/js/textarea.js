

(function($){


    $.fn.extend({ 

        autoresize: function() {
            return this.each(function() {
                let hiddenDiv;
                let content;
                hiddenDiv = $(document.createElement('div'));
                content = null;
                $(this).addClass('txtstuff');
                hiddenDiv.addClass('hiddendiv common-texta');
                $('body').append(hiddenDiv);
                $(this).on('keyup', function() {
                    content = $(this).val();
                    content = content.replace(/\n/g, '<br>');
                    hiddenDiv.html(content + "<br class='lbr'>");
                    $(this).css('height', hiddenDiv.height());
                });
            });
        }
    });
})(jQuery);

//apply the autoresize feature
$('.texta').autoresize();