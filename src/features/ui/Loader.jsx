import { DotLoader } from "react-spinners";

function Loader() {
  return (
    <div className="absolute flex items-center justify-center shadow-lg backdrop-blur-sm bg-slate-200/50 inset-0">
      <DotLoader color="#FFE353" size={80} />
    </div>
  );
}

export default Loader;
