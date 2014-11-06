(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "Formatters": {
        "RowSpan": RowSpanFormatter
      }
    }
  });

  function RowSpanFormatter(row, cell, value, columnDef, dataContext) {
    columnDef['asyncPostRender'] = asyncFunction;
	columnDef['formatter'] = waitingFormatter;
	console.log('test');
  }
  
  function asyncFunction(cellNode, row, dataContext, colDef){
	$(cellNode).empty().append(dataContext[colDef['id']]+' thru formatter');
  }
  
  function waitingFormatter(value) {
    return "wait...";
  }
})(jQuery);
