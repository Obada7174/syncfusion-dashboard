import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";
import { ChartsHeader } from "../../Components/export";
import { Header } from "../../Components/export";
export default function Area() {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 mt-24 md:m-10  p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
      <Header category="Chart" title="Area" />
      <ChartsHeader title="Inflation Rate in Percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
        legendSettings={
          currentMode === "Dark" ? { background: "white" } : { background: "" }
        }
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}></SeriesDirective>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
