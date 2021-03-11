$(document).ready(function(){
    $('#file').change(function(e) {
        var filename = e.target.files[0].name
        $('.filetext').html(filename);
      });
});

