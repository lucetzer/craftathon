var connectedLink2 = "http://serket.uk/badges/badgelist"

function unique(list) {
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}

$.getJSON(connectedLink2, function showData(data){

  console.log("Length of data: ", data.length);

  // throw out everything without a date

  dataWithDate = data.filter(datum => datum.dispenseDate);
  console.log("Length of WithDate data: ", dataWithDate.length);

  data = dataWithDate;

  function happyMedName(name) {
    if (!name) return false;
    var words = [];
    words = name.split(" ").map(word => word.toLowerCase());
    var hasMG = words.reduce(((acc, word) => (acc || word.match(/mc?g/g))), false);
    return (words.length > 2) && hasMG;
  }

  dataHappyName = data.filter(datum => happyMedName(datum.medicineName));
  console.log("Length of HappyName data: ", dataHappyName.length);

  dataFalse = dataHappyName.filter(datum => !datum.statePattern);
  console.log("Length of False and HappyName data: ", dataFalse.length);

  dataFalse.forEach(datum => console.log(datum));

});
