//filter
$(document).ready(function() {
    $('.tag').on('click', function() {
        if ($(this).attr('id') === 'all') {
            $('.tag').removeClass('active');
            $(this).addClass('active');
            $('.item').show();
            $('.item-tag').removeClass('active');
        } else if ($(this).attr('id') === 'clear') {
            $('.tag').removeClass('active');
            $('.item').hide();
            $('.item-tag').removeClass('active');
        } else {
            $('#all').removeClass('active');
            $(this).toggleClass('active');
            filterItems();
        }
    });

    function filterItems() {
        var selectedTags = $('.tag.active').map(function() {
            return $(this).data('tag');
        }).get();

        if (selectedTags.length === 0) {
            $('.item').show();
            $('.item-tag').removeClass('active');
        } else {
            $('.item').hide().filter(function() {
                var itemTags = $(this).data('tags').split(' ');
                var match = selectedTags.some(tag => itemTags.includes(tag));
                if (match) {
                    var $item = $(this);
                    $item.show();
                    $item.find('.item-tag').each(function() {
                        var tag = $(this).text();
                        if (selectedTags.includes(tag)) {
                            $(this).addClass('active');
                        } else {
                            $(this).removeClass('active');
                        }
                    });
                }
                return match;
            });
        }
    }
    $('#all').click();
});