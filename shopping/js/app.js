$(document).ready(
  function(){
    // when the form submit button is clicked
    $('form').submit(function(event){
      // prevent page refresh
      event.preventDefault();

      // retrieve form values
      var item = $("input[type=text]").val();
      var amount = $('input[type=number]').val();
      
      // determine if there is an input value
      if (item === '') {
        alert('Your item is empty');
      } else if (amount === '') {
        alert('You need an amount')
      } else {
        // append to <ul> using class called items
        $('ul.items').append('<li>' + item + ' (' + amount + ') ' +

          '<a href="#" value="mark as bought">mark as bought</a> ' + 
          '| <a href="#" value="delete">delete</a>' +

          '</li>');

          // find the clicked link's parent (li), and remove
          $('li a[value="delete"]').on('click', function(){
            $(this).parent().remove();
          });

          // find the clicked link's parent (li), and add class
          $('li a[value="mark as bought"]').on('click', function(){
            $(this).parent().addClass('strike');
          });

        // clear input boxes
        $('input').val('');
      }
    });
  }
);