function processRawGrocery(rawGrocery){
  var groceries = rawGrocery.split(",");
  console.log(groceries)
  var trimmedGroceries = groceries.map
  
  return groceries.map(function(grocery){
    return grocery.trim().toUpperCase();
  }).sort();
}





$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    clear();
    var rawGrocery = $("textarea").val();
    processRawGrocery(rawGrocery).forEach(function(grocery){
      $("ul").append("<li>"+ grocery +"</li>")
    });
    function clear(){
      $("li").remove();
    }  
  });

  
});