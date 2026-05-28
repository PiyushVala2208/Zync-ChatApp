import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSelectedUser(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // remove function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="w-full flex justify-between items-center bg-slate-800/50 border-b border-slate-700/50 py-3 sm:py-4 px-4 sm:px-6 min-h-[64px] sm:min-h-[84px]">
      <div className="flex items-center space-x-3 min-w-0">
        <div
          className={`avatar flex-shrink-0 ${onlineUsers.includes(selectedUser._id) ? "online" : "offline"}`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="object-cover size-full"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-slate-200 font-medium text-sm sm:text-base truncate">
            {selectedUser.fullName}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="flex-shrink-0 p-1"
      >
        <XIcon className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
      </button>
    </div>
  );
}

export default ChatHeader;
