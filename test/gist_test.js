import QUnit from "steal-qunit";

QUnit.module("system-gist");

var assert = QUnit.ok;

QUnit.asyncTest("basics", function(){
	var done = QUnit.start;
	System.import("8175510!system-gist").then(function(is) {
		assert(is(NaN, NaN), "It's correct!");
	}).then(done, done);
});
