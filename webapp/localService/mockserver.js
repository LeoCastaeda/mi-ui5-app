sap.ui.define(["sap/ui/core/util/MockServer"], function (MockServer) {
  "use strict";
  return {
    init: function () {
      var oMockServer = new MockServer({ rootUri: "/odata/" }); // <— igual a manifest.json

      MockServer.config({ autoRespond: true, autoRespondAfter: 200 });

      // Este path depende del ID de la app: "mi.ui5.app"
      var sPath = sap.ui.require.toUrl("mi/ui5/app/localService");

      oMockServer.simulate(sPath + "/metadata.xml", {
        sMockdataBaseUrl: sPath + "/mockdata",
        bGenerateMissingMockData: true
      });

      oMockServer.start();
      /* eslint-disable no-console */
      console.log("⚡ MockServer iniciado en /odata/");
    }
  };
});
