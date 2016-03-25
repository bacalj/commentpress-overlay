jQuery( document ).ready(function() {

    //take out the unwanted menu items
    jQuery('#header').css('background', '#3A81A8');
    jQuery('.sidebar_contents_wrapper, #sidebar_tabs, .sidebar_header, #footer, #footer_inner, h3.activity_heading, #toc_list').css('background', 'white');
    jQuery('h1, h2, h3').css('text-transform', 'none');
    jQuery('a.comment_block_permalink').css('background', '#9FE0F4');
    jQuery('h3.no_comments a.comment_block_permalink').css('background', 'white');
    jQuery('a.comment_block_permalink').css('font-weight', '400');
    jQuery('a.comment_block_permalink').css('text-transform', 'lowercase');
    jQuery('a.comment_block_permalink').css('padding-left', '8px');

    //styling
    jQuery('.special_pages_wrapper a#btn_blog').closest('li').remove();
    jQuery('.special_pages_wrapper a#btn_archive').closest('li').remove();
    jQuery('.special_pages_wrapper a#btn_cover').closest('li').remove();
    jQuery('.special_pages_wrapper a#btn_home').closest('li').remove();
    jQuery('.special_pages_wrapper a#btn_logout').closest('li').remove();
    jQuery('ul#sidebar_tabs li a').css('background', 'white');

    //styling for resulting stuff
    jQuery('a.comment_block_permalink').click(function(){
      jQuery('#respond').children('h4').css('text-transform', 'none');
      jQuery('#respond p.author_is_logged_in').css('text-transform', 'none');
      jQuery('cite a, a.comment-reply-link').css('text-transform', 'none');
    });

    jQuery('').click(function(){

    });
});

/*
 rich bright blue 4CA8DB
 darker blue 3B505C

B4DADB
389EA1
5C8D8F
3B5B5C
*/
