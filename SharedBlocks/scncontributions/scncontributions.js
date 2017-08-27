sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var scncontributions = BlockBase.extend("sap.uxap.sample.SharedBlocks.scncontributions.scncontributions", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.SharedBlocks.goals.scncontributions",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.SharedBlocks.goals.scncontributions",
					type: "XML"
				}
			}
		}
	});
	return scncontributions;
}, true);
