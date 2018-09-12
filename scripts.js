function checkInputValue() {
  var inputValue = $("#inputVal").val();

  if ((inputValue) === '') {
    $(".keyword").html("<p>Please enter your response</p>");
    $(".result-list").empty();

  } else {
    searchWord(inputValue);
  }
}

$("#searchBtn").on('click', checkInputValue);

$(document).on('keyup', function(e) {
  if (e.keyCode == '13') {
    var inputValue = $("#inputVal").val();

    if ((inputValue) === '') {
      $(".keyword").html("<p>Please enter your response</p>");
      $(".result-list").empty();
    } else {
      searchWord(inputValue);
    }
  }
});

function searchWord(keyword) {

  $.ajax({
    url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + keyword,
    headers: {
      'X-Mashape-Key': 'Zj2tZbiNANmshAv8pMXpGmeyZoTop1PfA7LjsnP0pvzGPGiq7F',
      'Accept': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      // console.log(keyword);
      var noResultVal = data.result_type;
      if (noResultVal === "no_results") {
        $(".keyword").html("No result found");
      } else {
        $(".keyword").html(keyword);
      }
      $(".result-list").empty();
      $(".result-list").append('<p> ' + 'is not a life, you stupid.' + '</p>');
      $(".result-list").append('<p> It is: </p>');
      for (i = 0; i < data.list.length; i++) {
        $(".result-list").append('<p>'+ '- ' + data.list[i].definition + '</p>');
      }
    }
  });
}