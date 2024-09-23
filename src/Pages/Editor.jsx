import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  Toolbar,
  RichTextEditorComponent,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import { Header } from "../Components/export";
export default function Editor() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Editor" />
      <RichTextEditorComponent height="650px">
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}
