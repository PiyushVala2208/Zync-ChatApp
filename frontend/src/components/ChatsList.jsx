import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const {
    getMyChatPartners,
    chats,
    isUsersLoading,
    setSelectedUser,
    selectedUser,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => {
        const isSelected = selectedUser?._id === chat._id;

        return (
          <div
            key={chat._id}
            onClick={() => setSelectedUser(chat)}
            className={`p-4 rounded-lg cursor-pointer transition-colors w-full ${
              isSelected
                ? "bg-cyan-500/25 ring-1 ring-cyan-500/40"
                : "bg-cyan-500/10 hover:bg-cyan-500/20"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`avatar flex-shrink-0 ${
                  onlineUsers.includes(chat._id) ? "online" : "offline"
                }`}
              >
                <div className="size-12 rounded-full">
                  <img
                    src={chat.profilePic || "/avatar.png"}
                    alt={chat.fullName}
                    className="object-cover size-full"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h4
                  className={`font-medium truncate ${
                    isSelected ? "text-cyan-400" : "text-slate-200"
                  }`}
                >
                  {chat.fullName}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ChatsList;
