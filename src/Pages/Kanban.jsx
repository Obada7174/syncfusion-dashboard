import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanGrid, kanbanData } from "./../data/dummy";
import { Header } from "../Components/export";
export default function Kanban() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Kanban" />
      <KanbanComponent
        keyField="Status"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        dataSource={kanbanData}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}
