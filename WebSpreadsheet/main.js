angular.module('500lines',[]).controller('Spreadsheet',function($scope, $timeout){
  $scope.Cols = [], $scope.Rows = [];
  for(col of range('A','H')){ $scope.Cols.push(col);}
  for(row of range(1,20)){ $scope.Rows.push(row);}
  function* range(cur,end){
    while (cur<=end){
      yield cur;
      //If it's a number, increase it by one; otherwise move to next letter
      curr = (isNaN(cur) ? String.fromCodePoint(cur.codePointAt()+1):cur+1);
    }
  }
  
});