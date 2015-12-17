
var connectedLink2 = "http://serket.uk/badges/badgelist"

$.getJSON(connectedLink2, function showData(data){

console.log("Length of data", data.length);

var dispenseDate = [];
  for (var i=0; i<data.length; i++){
    if (data[i].dispenseDate){
      //console.log((data[i].dispenseDate.substr(0,7)));
      dispenseDate.push((data[i].dispenseDate))
    };
  };
  
  console.log('with dispence date', dispenseDate.length);

  var stateTrue = [];
  var stateFalse = [];
    for (var i=0; i<data.length; i++){
      if (data[i].statePattern){
        //console.log(data[i].statePattern);
        stateTrue.push((data[i].statePattern))
      };
      if (data[i].statePattern === false){
        //console.log(data[i].statePattern);
        stateFalse.push((data[i].statePattern))
      };

    };

    function unique(list) {
        var result = [];
        $.each(list, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
        return result;
    }


    console.log(unique(stateFalse));
    console.log(unique(stateTrue));;
    console.log("True", stateTrue.length);
    console.log("False", stateFalse.length);

    var badgeIdArray = [];
      for (var i=0; i<data.length; i++){
        if (data[i].badgeId){
          badgeIdArray.push((data[i].badgeId))
        };
      };

    console.log("ID number", badgeIdArray.length);
    console.log("Unique id numbers", unique(badgeIdArray).length);


    var medicineName = [];
      for (var i=0; i<data.length; i++){
        if (data[i].medicineName){
  //        console.log(data[i].medicineName);
          medicineName.push((data[i].medicineName))
        };
      };

    console.log("Med name length", medicineName.length);
    console.log("Unique med name", unique(medicineName).length);
    console.log("Unique med name", unique(medicineName));


});
