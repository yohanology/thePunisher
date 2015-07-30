$(document).ready(function(){

  var punishments = ["Buy coffee for everyone !", "Write a killer blog post !", "Jog to Ferry Pier and take a selfie", "Suit up !", "End conversation with: Winter is coming !", "Sing in front of the class !", "Stand in the corner for 1 hour !", "Bow to everyone !", "Push up x2 for every minute late !"]

  var punish = function() {
    return punishments[Math.floor(Math.random() * punishments.length)];
  }

  $(document).on("click", "#punisher", function() {
      $('#punishment').removeClass('animated rotateIn')
      setTimeout(function(){
        $('#punishment').addClass('animated rotateIn').html(punish());
      },1)
  });

});
