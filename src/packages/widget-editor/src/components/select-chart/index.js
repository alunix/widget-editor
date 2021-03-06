import { connectState } from "helpers/redux";

import { patchConfiguration } from "modules/configuration/actions";

// Components
import SelectChartComponent from "./component";

export default connectState(
  state => ({
    options: state.configuration.availableCharts,
    value: state.configuration.chartType
  }),
  { patchConfiguration }
)(SelectChartComponent);
