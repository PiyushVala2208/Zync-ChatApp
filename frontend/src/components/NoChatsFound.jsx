import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center space-y-4 w-full px-4 select-none">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
        <MessageCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
      </div>

      <div className="max-w-xs sm:max-w-sm mx-auto">
        <h4 className="text-slate-200 text-base sm:text-lg font-medium mb-1">
          No conversations yet
        </h4>
        <p className="text-slate-400 text-xs sm:text-sm px-2 sm:px-4 leading-relaxed">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-xs sm:text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 active:scale-95 transition-all flex-shrink-0"
      >
        Find contacts
      </button>
    </div>
  );
}

export default NoChatsFound;
