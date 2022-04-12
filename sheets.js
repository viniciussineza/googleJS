function forLoop() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheetsName");

  for (var i = 23; i <= 32; i++) {
    for (var j = 9; j <= 20; j++){
      var r = ss.getRange(i,j);
      r.setValue('=IMPORTRANGE("link from another sheet' + nToL(j) + i + '")');
      // editing multiple lines and columns
    }
  }
}

function nToL(number){
  var s = '', t;

  while (number > 0){
    t = (number - 1) % 26;
    s = String.fromCharCode(65 + t) + s;
    number = (number - t)/ 26 | 0;
  }

  return s || undefined;
}