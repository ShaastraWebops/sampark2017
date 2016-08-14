var app = angular.module('myApp', []);

app.controller('MenuBarController', function(){

	this.select = 1;

	this.setSelect = function(selectArg){
		this.select = selectArg;
	}

	this.isSelect = function(selectArg){
		return this.select === selectArg;
	}

	this.dropdown = 0;

	this.setDropdown = function(dropdownArg){
		this.dropdown = dropdownArg;
	}

	this.isDropdown = function(dropdownArg){
		return this.dropdown === dropdownArg;
	}

});