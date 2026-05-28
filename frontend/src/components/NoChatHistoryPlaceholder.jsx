import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6 w-full select-none">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
        <MessageCircleIcon className="size-6 sm:size-8 text-cyan-400" />
      </div>

      <h3 className="text-base sm:text-lg font-medium text-slate-200 mb-2 sm:mb-3 max-w-full px-2 break-words">
        Start your conversation with {name}
      </h3>

      <div className="flex flex-col space-y-2 sm:space-y-3 max-w-xs sm:max-w-md mb-4 sm:mb-5">
        <p className="text-slate-400 text-xs sm:text-sm px-2 leading-relaxed">
          This is the beginning of your conversation. Send a message to start
          chatting!
        </p>

        <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center max-w-xs sm:max-w-md px-1">
        <button className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full hover:bg-cyan-500/20 active:scale-95 transition-all duration-150">
          👋 Say Hello
        </button>
        <button className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full hover:bg-cyan-500/20 active:scale-95 transition-all duration-150">
          🤝 How are you?
        </button>
        <button className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full hover:bg-cyan-500/20 active:scale-95 transition-all duration-150">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
