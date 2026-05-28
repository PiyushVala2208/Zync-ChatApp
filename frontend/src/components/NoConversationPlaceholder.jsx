import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center p-4 sm:p-8 w-full select-none overflow-hidden bg-gradient-to-b from-transparent via-slate-900/5 to-slate-900/20">
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72  rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm sm:max-w-md w-full">
        <div className="size-16 sm:size-20 bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent rounded-full flex items-center justify-center mb-5 sm:mb-6 ring-8 ring-cyan-500/5 border border-cyan-500/10 flex-shrink-0">
          <MessageCircleIcon className="size-8 sm:size-10 text-cyan-400 " />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2 tracking-wide">
          Select a conversation
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 px-4 sm:px-6 leading-relaxed max-w-xs sm:max-w-sm">
          Choose a contact from the sidebar to start chatting or continue a
          previous conversation.
        </p>

        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mt-6 sm:mt-8 rounded-full"></div>
      </div>
    </div>
  );
};

export default NoConversationPlaceholder;
