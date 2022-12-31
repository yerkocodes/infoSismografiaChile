let app = angular.module('sismoApp', []);
app
  .controller('SismoAppController', function($scope, $http) {
    $scope.dataCurrentSismos = [];

    $scope.init = function() {
      $scope.dataCurrentSismos = $scope.getUltimosSismos();
    }

    $scope.getUltimosSismos = function() {
      $http({
        method: 'GET',
        url: 'https://api.gael.cloud/general/public/sismos'
      })
        .then(function successCallback(response) {

          if(response.status == 200) {
            $scope.dataCurrentSismos = response.data.map(e => {
              let date = new Date(e.Fecha);
              let dateFormated = date.toLocaleDateString('es-es', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

              let actualizacion = new Date(e.FechaUpdate);
              let actualizacionFormated = actualizacion.toLocaleDateString('es-es', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
              return {
                fecha: dateFormated.charAt(0).toUpperCase() + dateFormated.slice(1),
                hora: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} hrs.`,
                fechaUpdate: `${actualizacionFormated} - ${actualizacion.getHours()}:${actualizacion.getMinutes()}:${actualizacion.getSeconds()} hrs.`,
                magnitud: e.Magnitud,
                profundidad: e.Profundidad + " km",
                refGeografica: e.RefGeografica
              }
            })
          }
        }, function errorCallback(error) {
          console.log(error);
        });
    }

  });
