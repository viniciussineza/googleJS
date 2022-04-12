function scheduleShifts() {
  var spreadsheet = SpreadsheetApp.getActiveSheet();
      var eventCal = CalendarApp.getCalendarById("calendarID");
  var signups = spreadsheet.getRange("A2047:AB2054").getValues();
  for (x = 0; x < signups.length; x++) {
      var shift = signups[x];
      var startTime = shift[9];
      var endTime = addMinutes(startTime, 15);
      var name = shift[0]+ " " + shift[7] + " " + shift[27];
      var text = shift[22];
      // Evento Cloud
      //eventCal.createEvent(name, startTime, endTime, {description: text})
      // Evento time Winthor
      eventCal.createEvent(name, startTime, endTime, {description: text}).setColor(CalendarApp.EventColor.YELLOW);
  }
  console.log(signups);
}

function addMinutes(n, m) {
  return new Date(n.getTime() + m*60000);
}