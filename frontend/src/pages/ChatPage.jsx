import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatPage() {
  const { logout } = useAuthStore();

  return (
    <div className="z-10">
      <div>Chatpage</div>

      <button className="btn btn-warning" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default ChatPage;
