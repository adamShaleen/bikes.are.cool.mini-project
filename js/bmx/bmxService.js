angular.module('selfLearning').service('bmxService', function() {

var bmxData = [{name: 'Scott', frame: 'United TRU', img: 'img/scott.bmx.png'}, {name: 'Adam', frame: 'Deluxe PA', img: 'img/adam.bmx.jpeg'}, {name:'Eric', frame: 'Terrible1 Ruben', img: 'img/eric.bmx.png'}];

this.getBmxData = function() {
    return bmxData;
};

});
