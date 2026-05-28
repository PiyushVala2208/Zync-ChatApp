function MessagesLoadingSkeleton() {
  const widths = [
    "w-[65%]",
    "w-[45%]",
    "w-[75%]",
    "w-[50%]",
    "w-[60%]",
    "w-[40%]",
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 w-full">
      {[...Array(6)].map((_, index) => {
        const isEnd = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`chat ${isEnd ? "chat-end" : "chat-start"} animate-pulse`}
          >
            <div
              className={`chat-bubble bg-slate-800/60 relative p-3.5 sm:p-4 rounded-2xl max-w-[85%] min-w-[140px] flex flex-col gap-2 ${
                widths[index % widths.length]
              }`}
            >
              <div className="h-2 bg-slate-700/60 rounded-full w-full"></div>

              {index % 2 === 0 && (
                <div className="h-2 bg-slate-700/40 rounded-full w-[70%]"></div>
              )}

              <div className="h-1.5 bg-slate-700/30 rounded-full w-8 mt-1 self-end" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesLoadingSkeleton;
