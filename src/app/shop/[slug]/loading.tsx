import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fcf9f4] bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-[#B68C5A] animate-spin" />
        <p className="mt-4 text-lg font-semibold text-[#4D4D4D]">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
