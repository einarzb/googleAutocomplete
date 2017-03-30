app.factory('factory', function($http){

  var userLocation;
        //this function gets userlocation input and then it easy to mine the data
        var getLocationApi = function(userLocation){
        console.log('im inside service');

         $http({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAp7paCFyg20wtJ0_cMpXW4ybzVbp1rsnY&input=' + userLocation}).then(function (response) {
            //url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA'}).then(function (response) {
                console.log(response);
                console.log(response.data.predictions[0].predictions);
                var userLocation = response.data.predictions[2].description;

                console.log(userLocation);
                return userLocation;

            }, function errorCallback(response) {
                alert("please fill in correct name");
            });
        };//end of getlocation func

        return{
            getLocationApi:getLocationApi,
            userLocation: userLocation
         }




});
