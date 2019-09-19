$(function() {
  // checkboxes
  $('.checkbox-1').change(function(){
    let x = this.checked;
    $('.checkbox-2').prop('checked', x)
  })
  $('.checkbox-2').change(function () {
    let x = this.checked;
    $('.checkbox-1').prop('checked', x)
  })

  // countdown
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Thursday";
  //     break;
  //   case 1:
  //     day = "Friday";
  //     break;
  //   case 2:
  //     day = "Saturday";
  //     break;
  //   case 3:
  //     day = "Sunday";
  //     break;
  //   case 4:
  //     day = "Monday";
  //     break;
  //   case 5:
  //     day = "Tuesday";
  //     break;
  //   case 6:
  //     day = "Wednesday";
  // }
  // $('.countdown').text(day)

  // $('.register').click(function() {
  //   if ($('.checkbox-1') || $('.checkbox-2')) {

  //   }
  // })
})