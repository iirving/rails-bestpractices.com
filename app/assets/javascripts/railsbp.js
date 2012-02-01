$(function() {
  // tag list auto complete
  if (typeof tags != 'undefined') {
    $('#post_tag_list, #question_tag_list, #answer_tag_list').autocomplete(tags, {
      multiple: true,
      matchContains: true,
      autoFill: true
    });
  }
  // remove the beginning spaces in <pre><code> </code></pre>
  $.each($('pre code'), function(i, element) {
    $(element).addClass('prettyprint');
  });
  // pretty print the wikistyle pre code
  prettyPrint();
  // time ago
  $("abbr.timeago").timeago();

  $(window).scroll(function() {
    $votes = $('.post .vote-info >div');
    if ($(this).scrollTop() > 230) {
      $votes.css('margin-top', $(this).scrollTop() - 230);
    } else {
      $votes.css('margin-top', 0);
    }
  });

  $('.collapse').click(function() {
    $(this).parents('h3').next().hide();
    $(this).hide();
    $(this).next().show().css('display', 'inline-block');
    return false;
  });
  $('.expand').click(function() {
    $(this).parents('h3').next().show();
    $(this).hide();
    $(this).prev().show();
    return false;
  });

  $('.leave-comment').click(function() {
    var $form = $(this).parent().next();
    if ($form.hasClass('hide')) {
      $form.removeClass('hide');
    } else {
      $form.addClass('hide');
    }
    return false;
  });

  if ($('#post_post_body_attributes_body').length > 0) {
    $('#post_post_body_attributes_body').before("<div id='wmd-button-bar'></div>");
    $('#post_post_body_attributes_body').after("<div id='wmd-preview' class='wikistyle'></div>");
    setup_wmd({
      input: "post_post_body_attributes_body",
      button_bar: "wmd-button-bar",
      preview: "wmd-preview"
    });
  }
  if ($('#question_question_body_attributes_body').length > 0) {
    $('#question_question_body_attributes_body').before("<div id='wmd-button-bar'></div>");
    $('#question_question_body_attributes_body').after("<div id='wmd-preview' class='wikistyle'></div>");
    setup_wmd({
      input: "question_question_body_attributes_body",
      button_bar: "wmd-button-bar",
      preview: "wmd-preview"
    });
  }
  if ($('#answer_answer_body_attributes_body').length > 0) {
    $('#answer_answer_body_attributes_body').before("<div id='wmd-button-bar'></div>");
    $('#answer_answer_body_attributes_body').after("<div id='wmd-preview' class='wikistyle'></div>");
    setup_wmd({
      input: "answer_answer_body_attributes_body",
      button_bar: "wmd-button-bar",
      preview: "wmd-preview"
    });
  }

  var addthis_config = {
    /* your GA property ID goes here: */
    data_ga_property: 'UA-17454114-1',
    /* set to true to enable social tracking */
    data_ga_social : true
  };
});
