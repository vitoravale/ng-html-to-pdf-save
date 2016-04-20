(function(angular , window) {

angular.module('htmlToPdfSave')
.directive('pdfSaveButton' , function($rootScope , $pdfStorage) {
	
	return {
		restrict: 'A',
		link : function(scope , element , attrs ) {
			$pdfStorage.pdfSaveButtons.push(element) ;

			scope.buttonText = "Button";
			element.on('click' , function() {
				var activePdfSaveId = attrs.pdfSaveButton ;
				$rootScope.$broadcast('savePdfEvent' , {activePdfSaveId : activePdfSaveId}) ;

			 
			})
		}


	}

}) ;

});