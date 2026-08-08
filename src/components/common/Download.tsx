import { Download } from "lucide-react";

const Downloadbtn = () => {
  return (
    <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">
      <Download size={14} />
      <span>Download App</span>
    </button>
  );
};

export default Downloadbtn;
