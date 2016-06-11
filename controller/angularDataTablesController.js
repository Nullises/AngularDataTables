//Module / Módulo
var angularDataTables = angular.module("angularDataTables", ['datatables', 'datatables.buttons']);

//Controller / Controlador
angularDataTables.controller("DTController", DTController);

//Function to build DataTables / Función para construir DataTables
function DTController(DTOptionsBuilder, DTColumnBuilder){

  var vm = this;
  vm.dtOptions = DTOptionsBuilder.fromSource('./model/conexion_basededatos_json.php')
  .withDOM('frtip')
  .withPaginationType('full_numbers')
  .withLanguage({
    "sEmptyTable":     "No hay datos para cargar en la tabla",
    "sInfo":           "Mostrando _START_ de _END_ de _TOTAL_ entradas",
    "sInfoEmpty":      "Mostrando 0 de 0 de 0 entradas",
    "sInfoFiltered":   "(filtradas _MAX_ entradas totales)",
    "sInfoPostFix":    "",
    "sInfoThousands":  ",",
    "sLengthMenu":     "Mostrar _MENU_ entradas",
    "sLoadingRecords": "Cargando...",
    "sProcessing":     "Procesando...",
    "sSearch":         "Buscar:",
    "sZeroRecords":    "No se encontraron registros",
    "oPaginate": {
        "sFirst":    "Primera",
        "sLast":     "Última",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": activar para ordenar de forma ascendente",
        "sSortDescending": ": activar para ordenar de forma descendente"
    },
    "buttons": {
               print: 'Imprimir',
               }
  })
  .withButtons([
        'print',
        'excel',
        'pdfFlash'
  ]);
  vm.dtColumns = [
      DTColumnBuilder.newColumn('nombre').withTitle('NOMBRE'),
      DTColumnBuilder.newColumn('correo').withTitle('CORREO'),
      DTColumnBuilder.newColumn('empleados').withTitle('EMPLEADOS A CARGO'),
      DTColumnBuilder.newColumn('tiempo').withTitle('AÑOS EN LA EMPRESA')
  ];

}
