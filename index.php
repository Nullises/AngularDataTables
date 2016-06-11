<!DOCTYPE html>
<html ng-app="angularDataTables">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Angular Datatables</title>
    <!--SCRIPTS-->
    <script src="assets/jquery/dist/jquery.min.js"></script>
    <script src="assets/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="assets/angular/angular.min.js"></script>
    <script src="assets/angular-datatables/dist/angular-datatables.min.js"></script>
    <!--ESTILO ANGULAR DATATABLES-->
    <link rel="stylesheet" href="assets/angular-datatables/dist/css/angular-datatables.min.css">
    <!--ESTILO BOTON EXPORTAR-->
    <link rel="stylesheet" href="assets/angular-datatables/vendor/datatables-buttons/css/buttons.dataTables.css">
    <!--SCRIPT DEL CONTROLADOR-->
    <script src="controller/angularDataTablesController.js"></script>
  </head>
  <body>
    <div ng-controller="DTController as showCase">
      <table datatable="" dt-options="showCase.dtOptions" dt-columns="showCase.dtColumns" class="row-border hover"></table>
    </div>
    <!--SCRIPTS BOTON EXPORTAR-->
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/dataTables.buttons.js"></script>
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/buttons.colVis.js"></script>
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/buttons.flash.js"></script>
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/buttons.html5.js"></script>
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/buttons.jqueryui.js"></script>
    <script src="assets/angular-datatables/vendor/datatables-buttons/js/buttons.print.js"></script>

    <script src="assets/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js"></script>
  </body>
</html>
