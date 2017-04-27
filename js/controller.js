'use strict';

$(document).ready(function() {
    $('select').material_select();
});

angular.module("Runoppa", [])
.controller("ProducerController", function($scope){
    $scope.preidentifier = '';
    $scope.identifierTitle= '';
    $scope.identifierOwner= '';
    $scope.identifier= '';
    $scope.firstname= '';
    $scope.block= false;
    $scope.naturalBlock= false;
    $scope.hasAdicionalOwner= false;
    $scope.legalBlock= false;
    $scope.selectedNetwork= null;
    $scope.selectedServices= null;
    $scope.selectedTransport= null;
    $scope.selectedMachine= null;
    $scope.selectedTroubles= null;
    $scope.selectedWater= null;
    $scope.selectedVia= null;
    $scope.selectedDestiny= null;
    $scope.selectedBuilding= null;
    $scope.selectedAgeclass= null;
    $scope.selectedAgeclassb= null;
    $scope.selectedAgeclassc= null;
    $scope.selectedAgeclasso= null;
    $scope.selectedSow= null;
    $scope.selectedPiglet= null;
    $scope.selectedboar= null;
    $scope.selectedExploitation= null;
    $scope.selectedCommercialization= null;
    $scope.selectedFacilities= null;
    $scope.selectedEquipment= null;
    $scope.selectedSanitary= null;
    $scope.selectedSanitaryplan= null;
    $scope.selectedProduction= null;
    $scope.selectedMonths= null;
    $scope.selectedRaces= null;
    $scope.selectedCapacity= null;
    $scope.selectedModality= null;
    $scope.selectedGenetics= null;
    $scope.selectedEggs= null;
    $scope.selectedIrrigation= null;
    $scope.cycle= '';
    $scope.vegetalBlock= false;
    $scope.vegetalShortCycle= false;
    $scope.vegetalLongCycle= false;
    $scope.pecuarioBlock= false;
    $scope.agroIndustriaBlock= false;
    $scope.sectorVegetal= false;
    $scope.sectorPecuario= false;
    $scope.sectorAgroIndustria= false;
    $scope.subsectorRumiante= false;
    $scope.bovino= false;
    $scope.bufalino= false;
    $scope.caprino= false;
    $scope.ovino= false;
    $scope.subsectorPorcino= false;
    $scope.subsectorAvicola= false;
    $scope.subsectorApicola= false;
    $scope.subsectorCunicola= false;
    $scope.hembra= false;
    $scope.hembraporcino= false;
    $scope.codorniz= false;
    $scope.patos= false;
    $scope.gansos= false;
    $scope.gallinastraspatio= false;
    $scope.avestruz= false;
    $scope.huevos= false;

       
    $scope.selected = {};
  
    $scope.data =  [
    {"id":"N",
      "name":"Natural",
      "values":
          [{"id":"V","name":"Venezolano"},
           {"id":"E","name":"Extranjero"}]
    },
    {"id":"J",
      "name":"Jurídica",
      "values":
          [{"id":"J","name":"J"},
           {"id":"G","name":"G"},
           {"id":"EPS","name":"E.P.S"}]
    }
    ];
  
    $scope.$watch('selected.id', function(id){
  
        angular.forEach($scope.data, function(attr){
            if(attr.id === id){
                $scope.selectedAttr = attr;
            }
             if(attr.id === 'N'){
                $scope.selectedAttrOwner = attr;
            }
        });
        $('select').material_select();
        
        switch(id) {
            case 'N':
            $scope.preidentifier = 'Nacionalidad';
            $scope.identifierTitle = 'Cédula o Nro.Pasaporte';
            $scope.naturalBlock = true;
            $scope.hasAdicionalOwner = true;
            $scope.legalBlock = false;
            $scope.block = true;
            break;

            case 'J':
            $scope.preidentifier = 'Código';
            $scope.identifierTitle = 'RIF';
            $scope.block = true;
            $scope.naturalBlock = false;
            $scope.hasAdicionalOwner = true;                    
            $scope.legalBlock = true;
            break;
        } 
    });

    $scope.$watch('selected.value', function(combo){
        switch(combo.id) {
            case 'V':
                $scope.identifierTitle = 'Cédula';
                break;
            case 'E':
                $scope.identifierTitle = 'Pasaporte';
                break;
            default:
                $scope.identifierTitle = 'RIF';
        }
    });

    $scope.$watch('selected.valueOwner', function(combo){
        switch(combo.id) {
            case 'V':
                $scope.identifierTitleOwner = 'Cédula';
                break;
            case 'E':
                $scope.identifierTitleOwner = 'Pasaporte';
                break;
           
        }
    });

    $scope.$watch('nationalityowner', function(){
        switch(combo.id) {
            case 'V':
                $scope.identifierTitle = 'Cédula';
                break;
            case 'E':
                $scope.identifierTitle = 'Pasaporte';
                break;
            default:
                $scope.identifierTitle = 'RIF';
        }
    });

    $scope.estados =  [
    {"id":"1",
      "name":"Amazonas",
      "values":
          [{"id":"1","name":"Puerto Ayacucho"}]
    },
    {"id":"2",
      "name":"Anzoátegui",
      "values":
          [ {"id":"1","name":"Anaco"},
            {"id":"2","name":"Barcelona"},
            {"id":"3","name":"El Tigre"},
            {"id":"4","name":"Puerto La Cruz"}]
    },
    {"id":"3",
      "name":"Apure",
      "values":
          [{"id":"1","name":"Guasdualito"},
            {"id":"2","name":"San Fernando de Apure"}]
    },
    {"id":"3",
      "name":"Aragua",
      "values":
          [{"id":"1","name":"Cagua"},
            {"id":"2","name":"El Limón"},
            {"id":"3","name":"La Victoria"},
            {"id":"4","name":"Santa Rita"},
            {"id":"5","name":"Turmero"},
            {"id":"6","name":"Villa de Cura"},
            {"id":"7","name":"Maracay"}]
    },    
    {"id":"4",
      "name":"Barinas",
      "values":
          [{"id":"1","name":"Barinas"}]
    },    
    {"id":"5",
      "name":"Bolívar",
      "values":
          [{"id":"1","name":"Caicara del Orinoco"},
            {"id":"2","name":"Ciudad Bolívar"},
            {"id":"3","name":"Ciudad Guayana"},
            {"id":"4","name":"Upata"}]
    },    
    {"id":"6",
      "name":"Carabobo",
      "values":
          [{"id":"1","name":"Guacara"},
            {"id":"2","name":"Güigüe"},
            {"id":"3","name":"Los Guayos"},
            {"id":"4","name":"Mariara"},
            {"id":"5","name":"Naguanagua"},
            {"id":"6","name":"Puerto Cabello"},
            {"id":"7","name":"Tocuyito"},
            {"id":"8","name":"Valencia"}]
    },    
    {"id":"7",
      "name":"Cojedes",
      "values":
          [{"id":"1","name":"San Carlos"},
            {"id":"2","name":"Tinaquillo"}]
    },    
    {"id":"8",
      "name":"Delta Amacuro",
      "values":
          [{"id":"1","name":"Tucupita"}
           ]
    },    
    {"id":"9",
      "name":"Distrito Capital",
      "values":
          [{"id":"1","name":"Caracas"}]
    },    
    {"id":"10",
      "name":"Falcón",
      "values":
          [{"id":"1","name":"Coro"},
            {"id":"2","name":"Punto Fijo"}]
    },    
    {"id":"11",
      "name":"Lara",
      "values":
          [{"id":"1","name":"Barquisimeto"},
          {"id":"2","name":"Cabudare"},
            {"id":"3","name":"Carora"},
            {"id":"4","name":"El Tocuyo"},
            {"id":"5","name":"Quíbor"}]
    }    

    ];





    $('input.autocomplete').autocomplete({
    data: {
   "Amazonas": null,
"Anzoátegui": null,
"Apure": null,
"Aragua": null,
"Barinas": null,
"Bolívar": null,
"Carabobo": null,
"Cojedes": null,
"Delta Amacuro": null,
"Distrito Capital": null,
"Falcón": null,
"Guárico": null,
"Lara": null,
"Mérida": null,
"Miranda": null,
"Monagas": null,
"Nueva Esparta": null,
"Portuguesa": null,
"Sucre": null,
"Táchira": null,
"Trujillo": null,
"Vargas": null,
"Yaracuy": null,
"Zulia": null,
"Dependencias Federales": null

    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

    



    $scope.vegetalSelected = function () {
        if ($scope.sectorVegetal) {
            $scope.vegetalBlock = false;
        }
        else {
            $scope.vegetalBlock = true;
        }
    };

    $scope.cycleSelected = function () {
        if ($scope.cycle === "short") {
            $scope.vegetalShortCycle = true;
            $scope.vegetalLongCycle = false;
        }
        else {
            $scope.vegetalShortCycle = false;
            $scope.vegetalLongCycle = true;
        }      
    };
   
    $scope.pecuarioSelected = function () {
        if ($scope.sectorPecuario) {
            $scope.pecuarioBlock = false;
        }
        else {
            $scope.pecuarioBlock = true;
        }
    };
   
   $scope.agroIndustriaSelected = function () {
        if ($scope.sectorAgroIndustria) {
            $scope.agroIndustriaBlock = false;
        }
        else {
            $scope.agroIndustriaBlock = true;
        }
    };
    
    $scope.preIdentifierSelected = function () {
        if ($scope.preidentifierlist === "V") {
            $scope.identifier = 'Cédula';
        }
        
        else if ($scope.preidentifierlist === "E"){
            $scope.identifier = 'Pasaporte';
        }
    };  

    $('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});

function checkDate() {
    if ($('#buildDate').val() == '') {
    $('#buildDate').addClass('invalid')
  } else {
    $('#buildDate').removeClass('invalid')
  }
}

$('form').submit(function() {
  checkDate();
  return false;
});

$('#buildDate').change(function() {
  checkDate();
});
 
/**subsectorrumiante*/

$scope.rumianteSelected = function () {
        if ($scope.subsectorRumiante) {
            $scope.rumianteBlock = false;
        }
        else {
            $scope.rumianteBlock = true;
        }
    };

$scope.bovinoSelected = function () {
    if ($scope.bovino) {
        $scope.bovinoBlock = false;
    }
    else{
        $scope.bovinoBlock = true;
    }
};

$scope.bufalinoSelected = function () {
    if ($scope.bufalino) {
        $scope.bufalinoBlock = false;
    }
    else{
        $scope.bufalinoBlock = true;
    }
};

$scope.caprinoSelected = function () {
    if ($scope.caprino) {
        $scope.caprinoBlock = false;
    }
    else{
        $scope.caprinoBlock = true;
    }
}; 

$scope.ovinoSelected = function () {
    if ($scope.ovino) {
        $scope.ovinoBlock = false;
    }
    else{
        $scope.ovinoBlock = true;
    }
};

/**subsectorporcino*/

$scope.porcinoSelected = function () {
        if ($scope.subsectorPorcino) {
            $scope.porcinoBlock = false;
        }
        else {
            $scope.porcinoBlock = true;
        }
    };   

$scope.cerdamadreSelected = function () {
        if ($scope.subsectorCerdamadre) {
            $scope.cerdamadreBlock = false;
        }
        else {
            $scope.cerdamadreBlock = true;
        }
    };



/**subsectoravicola*/

$scope.avicolaSelected = function () {
        if ($scope.subsectorAvicola) {
            $scope.avicolaBlock = false;
        }
        else {
            $scope.avicolaBlock = true;
        }
    };

$scope.codornizSelected = function(){
    if ($scope.codorniz) {
        $scope.codornizBlock = false;
    }
    else{

        $scope.codornizBlock = true;
    }
};


$scope.patosSelected = function(){
    if ($scope.patos) {
        $scope.patosBlock = false;
    }
    else{

        $scope.patosBlock = true;
    }
};


$scope.gansosSelected = function(){
    if ($scope.gansos) {
        $scope.gansosBlock = false;
    }
    else{

        $scope.gansosBlock = true;
    }
};


$scope.gallinastraspatioSelected = function(){
    if ($scope.gallinastraspatio) {
        $scope.gallinastraspatioBlock = false;
    }
    else{

        $scope.gallinastraspatioBlock = true;
    }
};

$scope.avestruzSelected = function(){
    if ($scope.avestruz) {
        $scope.avestruzBlock = false;
    }
    else{

        $scope.avestruzBlock = true;
    }
};

$scope.huevosSelected = function(){
    if ($scope.huevos) {
        $scope.huevosBlock = false;
    }
    else{

        $scope.huevosBlock = true;
    }
};

/**subsectorapicola*/

$scope.apicolaSelected = function () {
        if ($scope.subsectorApicola) {
            $scope.apicolaBlock = false;
        }
        else {
            $scope.apicolaBlock = true;
        }
    };



/**subsectorcunicola*/

$scope.cunicolaSelected = function () {
        if ($scope.subsectorCunicola) {
            $scope.cunicolaBlock = false;
        }
        else {
            $scope.cunicolaBlock = true;
        }
    };

 /**sexo*/

 $scope.hembraSelected = function () {
if ($scope.hembra) {
            $scope.hembraBlock = false;
        }
        else {
            $scope.hembraBlock = true;
        }
    };

 $scope.hembraporcinoSelected = function () {
if ($scope.hembraporcino) {
            $scope.hembraporcinoBlock = false;
        }
        else {
            $scope.hembraporcinoBlock = true;
        }
    };












	
})