var app = angular.module('myApp', []);

app.controller('MenuBarController', function(){

	this.dropdown = 0;

	this.setDropdown = function(dropdownArg){
		this.dropdown = dropdownArg;
	}

	this.isDropdown = function(dropdownArg){
		return this.dropdown === dropdownArg;
	}

});


