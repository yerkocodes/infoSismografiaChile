let app = angular.module('sismoApp', []);
app
  .controller('SismoAppController', function($scope, $http) {
    $scope.dataCurrentSismos = [];
    $scope.currentDate = new Date();
    $scope.jsonComunas = JSON.stringify({
      "regiones": [
        {
          "region": "Arica y Parinacota",
          "comunasYLugares": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
          "region": "Tarapacá",
          "comunasYLugares": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
          "region": "Antofagasta",
          "comunasYLugares": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena", "Socaire"]
        },
        {
          "region": "Atacama",
          "comunasYLugares": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
          "region": "Coquimbo",
          "comunasYLugares": ["La Serena", "Coquimbo", "Tongoy", "Andacollo", "La Higuera", "Paiguano", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
          "region": "Valparaíso",
          "comunasYLugares": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
          "region": "Región del Libertador Gral. Bernardo O’Higgins",
          "comunasYLugares": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
          "region": "Región del Maule",
          "comunasYLugares": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
          "region": "Región de Ñuble",
          "comunasYLugares": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
        },
        {
          "region": "Región del Biobío",
          "comunasYLugares": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
        {
          "region": "Región de la Araucanía",
          "comunasYLugares": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
        },
        {
          "region": "Región de Los Ríos",
          "comunasYLugares": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
          "region": "Región de Los Lagos",
          "comunasYLugares": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
          "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
          "comunasYLugares": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
          "region": "Región de Magallanes y de la Antártica Chilena",
          "comunasYLugares": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
          "region": "Región Metropolitana de Santiago",
          "comunasYLugares": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }
      ]
    });
    $scope.regionesParse = JSON.parse($scope.jsonComunas);

    $scope.init = function() {
      $scope.dataCurrentSismos = $scope.getUltimosSismos();
      $scope.returnCompleteAddress("Paiguano", $scope.regionesParse.regiones)
    }

    $scope.returnCompleteAddress = function(localidad, regionesArr) {
      let result = null;

      for(i = 0; i < regionesArr.length; i++) {
        for (let f = 0; f < regionesArr[i].comunasYLugares.length; f++) {
          if( regionesArr[i].comunasYLugares[f].toLowerCase() == localidad.toLowerCase() ) {
            result = `${regionesArr[i].comunasYLugares[f]}, ${regionesArr[i].region}`;
            break;
          }
        }

      }
      return result != null ? result : localidad;
    }

    $scope.extractPlace = function(string) {
      let result = string.split(" de ");
      return result[result.length - 1];
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
                magnitud: parseFloat(e.Magnitud),
                profundidad: e.Profundidad + " km",
                refGeografica: e.RefGeografica,
                lugar: $scope.returnCompleteAddress($scope.extractPlace(e.RefGeografica), $scope.regionesParse.regiones),
                hoy: $scope.compareTwoDates(date, $scope.currentDate)
              }
            })
          }
        }, function errorCallback(error) {
          console.log(error);
        });
    }

    $scope.compareTwoDates = function(date1, date2) {
      let fullDate1 = date1.getDate() + (date1.getMonth() + 1) + date1.getFullYear();
      let fullDate2 = date2.getDate() + (date2.getMonth() + 1) + date2.getFullYear();
      let result = false;
      if(fullDate1 == fullDate2) {
        result = true
      }
      return result;
    }

  });
