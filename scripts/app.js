var app = angular.module('myApp', []);

var menubarPosition = false;

app.controller('MenuBarController', function(){

	this.dropdown = 0;

	this.setDropdown = function(dropdownArg){
		this.dropdown = dropdownArg;
	}

	this.isDropdown = function(dropdownArg){
		return this.dropdown === dropdownArg;
	}

	this.menuPosition = menubarPosition;

});


