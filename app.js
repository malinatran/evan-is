$(document).ready(function() {

  var descriptions = [
    'super cool',
    'a career coach', 
    'an awesome friend', 
    'a former Googler', 
    'a New Yorker', 
    'kicking ass', 
    'a DJ in the making', 
    'living the life', 
    'a Bruin', 
    'traveling', 
    'all about social impact', 
    'a UX designer'
  ];

  var i = 0;

  function changeWord() {
    if (i < descriptions.length) {
      $('#rotate').text(descriptions[i]);
      i++;
    } else {
      i = 0;
    }
  };

  changeWord();

  window.setInterval(changeWord, 1000);
  

});