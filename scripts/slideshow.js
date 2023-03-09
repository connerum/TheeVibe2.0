$(function() {
    var $previewImages = $('.preview-image');
    var $mainImage = $('.main-image img');

    $previewImages.on('click', function() {
        var $this = $(this);
        var $selected = $previewImages.filter('.selected');
        var $newImage = $this.find('img');
        var newSrc = $newImage.attr('src');
        var oldSrc = $mainImage.attr('src');

        $selected.removeClass('selected');
        $this.addClass('selected');
        $mainImage.fadeOut(200, function() {
            $mainImage.attr('src', newSrc).fadeIn(200);
            $newImage.attr('src', oldSrc);
        });
    });
});