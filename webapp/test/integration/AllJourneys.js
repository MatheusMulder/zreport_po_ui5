/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"POReport/POReport/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"POReport/POReport/test/integration/pages/View1",
	"POReport/POReport/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "POReport.POReport.view.",
		autoWait: true
	});
});