import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString: "InstrumentationKey=c9e6b01d-3fc3-42c4-917e-b538d77b946c;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/;LiveEndpoint=https://westus2.livediagnostics.monitor.azure.com/;ApplicationId=aefcb5c2-cf1e-48af-ac6b-6f08d2aa0ad4",
    enableAutoRouteTracking: true
  }
});

appInsights.loadAppInsights();

export default appInsights;