sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/SplitContainer"
], function (JSONModel, Controller, Device, SplitContainer) {
	"use strict";
	return Controller.extend("sap.uxap.sample.ObjectPageTabNavigationMode.ObjectPageTabNavigationMode", {
		onInit: function () {

			//by default we always show the master
			if (Device.system.desktop) {
				this._oSplitContainer = sap.ui.getCore().byId("splitApp");
				if (this._oSplitContainer) {
					this._oSplitContainer.backToPage = jQuery.proxy(function () {

						this.setMode("ShowHideMode");
						this.showMaster();

						SplitContainer.prototype.backToPage.apply(this, arguments);

					}, this._oSplitContainer);
				}
			}

			var oJsonModel = new sap.ui.model.json.JSONModel("./test-resources/sap/uxap/demokit/sample/ObjectPageTabNavigationMode/HRData.json");
			this.getView().setModel(oJsonModel, "ObjectPageModel");
		},
		onBeforeRendering: function () {
	//		sap.ui.getCore().byId("__page0-intHeader-BarPH").hide(); 
			if (Device.system.desktop && this._oSplitContainer) {
				this._oSplitContainer.setMode("HideMode");
				this._oSplitContainer.hideMaster();
			}
		},
		onAfterRendering: function () {
//document.getElementById("__page0-intHeader").remove();

		},
		pressLinkedin: function () {
			sap.m.URLHelper.redirect("https://au.linkedin.com/in/virinchy", true);
		},
		pressTwitter: function () {
			sap.m.URLHelper.redirect("https://twitter.com/virinchyp", true);
		},
		pressSCN: function () {
			sap.m.URLHelper.redirect("https://people.sap.com/viru48", true);
		}
	});
}, true);