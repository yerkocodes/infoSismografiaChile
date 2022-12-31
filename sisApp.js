let app = angular.module('sismoApp', []);

app
  .controller('SismoAppController', function($scope, $http) {
    $scope.dataCurrentSismos = [];

    $http({
      method: 'GET',
      url: 'https://api.gael.cloud/general/public/sismos'
    })
      .then(function successCallback(response) {

        response.data.slice(0, 3).forEach((e) => {
          let date = new Date(e.Fecha);

          $scope.dataCurrentSismos.push({
            fecha: date.toLocaleDateString('es-es', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }),
            hora: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} hrs.`,
            fechaUpdate: e.FechaUpdate,
            magnitud: e.Magnitud,
            profundidad: e.Profundidad,
            refGeografica: e.RefGeografica
          })
        })

      }, function errorCallback(error) {
        console.log(error);
      });
  });
