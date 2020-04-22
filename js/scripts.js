function processRawGrocery(rawGrocery){
  var groceries = rawGrocery.split(",");
  groceries.sort();
  return groceries.map(function(grocery){
    return grocery.toUpperCase();
  })
}





$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    rawGrocery = $("textarea").val();
    processRawGrocery.forEach(function(grocery){
      
    })
      
    });

  });
});