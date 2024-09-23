import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { ChartsHeader } from "../../Components/export";
import { useStateContext } from "../../Contexts/ContextProvider";

import { Header } from "../../Components/export";
export default function Bar() {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 mt-24 md:m-10  p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
      <Header category="Chart" title="Bar" />
      <ChartsHeader title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject
          services={[Category, Tooltip, ColumnSeries, DataLabel, Legend]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}></SeriesDirective>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
