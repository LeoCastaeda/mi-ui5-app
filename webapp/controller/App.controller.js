sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("mi.ui5.app.controller.App", {
    onInit: function () {
      // Diagnóstico: loguea cuántos items ve la tabla cuando el metadata esté listo
      const oTable = this.byId("productsTable");
      const oModel = this.getView().getModel(); // ODataModel por defecto
      const logCount = () => {
        const b = oTable.getBinding("items");
        console.log("👉 Items cargados:", b ? b.getLength() : "(sin binding)");
      };
      if (oModel && oModel.metadataLoaded) {
        oModel.metadataLoaded().then(logCount);
      } else {
        setTimeout(logCount, 500);
      }
    },

    onSearch: function (oEvent) {
      const s = (oEvent.getParameter("query") || "").trim();
      this._applyFilter(s);
    },

    onLiveChange: function (oEvent) {
      const s = (oEvent.getParameter("newValue") || "").trim();
      this._applyFilter(s);
    },

    onClear: function () {
      const oB = this.byId("productsTable").getBinding("items");
      oB.filter([]);
      MessageToast.show("Filtro limpio");
    },

    _applyFilter: function (s) {
      const oB = this.byId("productsTable").getBinding("items");
      if (!s) { oB.filter([]); return; }
      const n = Number(s);
      const a = Number.isNaN(n)
        ? [ new Filter("Name", FilterOperator.Contains, s) ]
        : [ new Filter("ID",   FilterOperator.EQ,       n) ];
      oB.filter(a);
    },

     fmtPrice: function (v) {
  if (v === null || v === undefined) return null;
  let s = String(v).trim().replace(",", ".");  // acepta "199,90" o 199.9
  const n = Number(s);
  if (Number.isNaN(n)) return null;
  return n.toFixed(2); // "199.90"
}
  });
});