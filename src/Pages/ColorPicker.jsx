import { Header } from "../Components/export";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
export default function ColorPicker() {
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
      <Header category="Page" title="Orders" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Inline Pallete</p>
            <ColorPickerComponent
              inline
              id="inline-pallete"
              showButtons={false}
              mode="Palette"
              modeSwitcher={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Inline Pallete</p>
            <ColorPickerComponent
              inline
              id="inline-pallete"
              showButtons={false}
              mode="picker"
              modeSwitcher={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
