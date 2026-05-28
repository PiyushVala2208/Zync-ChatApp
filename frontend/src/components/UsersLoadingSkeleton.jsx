function UsersLoadingSkeleton() {
  const nameWidths = ["w-[45%]", "w-[25%]", "w-[35%]", "w-[30%]", "w-[40%]"];

  return (
    <div className="space-y-3 w-full px-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-slate-800/40 border border-slate-700/30 p-4 rounded-xl animate-pulse flex items-center gap-4 w-full"
        >
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 bg-slate-700/80 rounded-full"></div>

            <div className="absolute top-0 right-0 w-3 h-3 bg-slate-700/60 rounded-full ring-2 ring-slate-900" />
          </div>

          <div className="flex-1 min-w-0">
            <div
              className={`h-4 bg-slate-700/80 rounded ${
                nameWidths[index % nameWidths.length]
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersLoadingSkeleton;
