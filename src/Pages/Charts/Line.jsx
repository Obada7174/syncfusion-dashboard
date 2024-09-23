import { ChartsHeader, LineChart } from "../../Components/export";
import { Header } from "../../Components/export";
export default function Line() {
  return (
    <div className="m-4 mt-24 md:m-10  p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Chart" title="Line" />
      <ChartsHeader title="Inflation Rate" />
      <div className="">
        <LineChart />
      </div>
    </div>
  );
}
