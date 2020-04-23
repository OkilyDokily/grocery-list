function processRawGrocery(rawGrocery){
  var groceries = rawGrocery.split(",");
  
  return groceries.map(function(grocery){
    return grocery.trim().toUpperCase();
  }).sort();
}





$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    clear();
    hide();
    var rawGrocery = $("textarea").val();
    processRawGrocery(rawGrocery).forEach(function(grocery){
      $("ul").append("<li>"+ grocery +"</li>")
    });
    function clear(){
      $("li").remove();
    }  
    function hide(){
      $("form").hide();
    }
  });

  
});