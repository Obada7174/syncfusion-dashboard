import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Filter,
  Edit,
  Sort,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { customersData, contextMenuItems, customersGrid } from "../data/dummy";
import { Header } from "../Components/export";

export default function Customers() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowSelection
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Filter, Edit, Sort, Toolbar]} />
      </GridComponent>
    </div>
  );
}
