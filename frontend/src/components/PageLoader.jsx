import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-slate-950 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />

      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />

      <div className="relative flex flex-col items-center justify-center z-10">
        <div className="absolute size-16 sm:size-20 border border-cyan-500/20 rounded-full animate-ping opacity-25 pointer-events-none [animation-duration:2s]" />

        <div className="relative flex items-center justify-center">
          <LoaderIcon className="size-8 sm:size-10 text-cyan-400 animate-spin drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] [animation-duration:1.2s]" />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
