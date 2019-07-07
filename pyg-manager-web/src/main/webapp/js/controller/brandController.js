app.controller('brandController',function($scope,$controller,brandService){
    $controller('baseController',{$scope:$scope});
    $scope.findAll = function(){
        brandService.fieldAccess().success(
            function(response){
                $scope.list=response;
            }
        )
    }
    $scope.findPage = function(page,size){
        brandService.findPage(page,size).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        )
    }





    $scope.save=function(){
        if($scope.entity.id !=null){
            brandService.update($scope.entity).success(
                function(response){
                    if(response.success){
                        $scope.reloadList();
                    }else{
                        alert(response.message);
                    }
                }
            )
        }else{
            brandService.add($scope.entity).success(
                function(response){
                    if(response.success){
                        $scope.reloadList();
                    }else{
                        alert(response.message);
                    }
                }
            )
        }

    }

    $scope.findOne=function(id){
        brandService.findOne(id).success(
            function(response){
                $scope.entity=response;
            }
        )
    }


    $scope.dele=function(){
        brandService.dele($scope.selectIds).success(
            function(response){
                if(response.success){
                    $scope.reloadList();
                }
            }
        )
    }

    $scope.searchEntity={};
    $scope.search=function(page,size){
        brandService.search(page,size,$scope.searchEntity).success(
            function(response){
                $scope.paginationConf.totalItems=response.total;
                $scope.list=response.rows;
            }
        )
    }
})