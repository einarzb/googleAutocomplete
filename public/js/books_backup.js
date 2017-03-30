var titles = []; //storage
    //this function gets userlocation input and then it easy to mine the data
    var getLocationApi = function(location){
    console.log('im inside service');

     $http({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle' + location}).then(function (response) {

          titles.length = 0;

      if (response.data.totalItems > 0){
          for (var i = 0; i < (response.data.items.length > 10 ? 10 : response.data.items.length); i++) {
            titles.push(response.data.items[i].volumeInfo.title);
          };
        }
          return titles;

        }, function errorCallback(response) {
            alert("yo yo error");
        });
    };//end of getlocation func

    return{
        getLocationApi:getLocationApi,
        titles: titles
     }
