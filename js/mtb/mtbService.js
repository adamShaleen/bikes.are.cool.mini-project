angular.module('selfLearning').service('mtbService', function() {

var mtbData = [{name: 'David', frame: 'Banshee Rune', img: 'img/dave.mtb.jpg'}, {name: 'John', frame: 'Turner Burner', img: 'img/john.mtb.jpg'}, {name: 'Adam', frame: 'Kona Process 134DL', img: 'img/adam.mtb.JPG'}];

this.getMtbData = function() {
    return mtbData;
};


});
