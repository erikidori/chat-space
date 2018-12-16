$(function(){
  function buildHTML(message){
  	 ( message.image ) ? message.image : "";

  	  var html =
  	  `<div class="main__message__box">
  <div class="main__message__box__top">
    <div class="main__message__box__top__name">
      ${message.user_name}
    </div>
    <div class="main__message__box__top__time">
      ${message.date}
    </div>
  </div>
  <div class="main__message__box__text">
      <p class="lower-message__content">
        ${message.content}
      </p>
  </div>
  <asset_path src=${message.image} >
</div>`
return html;
}


  $('#new_message').on('submit',function() {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      tipe: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
      	var html = buildHTML(data);
      	$('.messages').append(html);
      	$('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      	$('form')[0].reset();
      })
        .fail(function(){
        	alert('error');
        });
      });
});