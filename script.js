$(document).ready(function() {
  $("#search").on("click", function(e) {
    e.preventDefault();
    var q = $("#keyword").val();
    var startDate = $("#start-date").val() || 1900;
    var endDate = $("#end-date").val() || 2017;

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var limit = $("#number-results").val() || 10;
    url += '?' + $.param({
      'api-key': "1af98907c2b740aa9312782a9e1ecc31",
      'q': q,
      'begin_date': startDate + 01 + 01,
      'end_date': endDate + 12 + 31
    });
    console.log(q, startDate, endDate, limit);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      var articles = result.response.docs.slice(0,limit)

      console.log(articles)
      for (var i = 0; i < articles.length; i++){
        var current = articles[i]
        //get headline
        var headline = current.headline.main
        //get sections
        var section = current.section_name
        //get time
        var time = current.pub_date
        //get full link
        var link = current.web_url
      }

    }).fail(function(err) {
      throw err;
    });
  });

});