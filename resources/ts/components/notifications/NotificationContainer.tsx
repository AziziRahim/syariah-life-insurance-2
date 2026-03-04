import React from "react";
import { NotificationType } from "./NotificationContext";

type Notification = {
  id: number;
  message: string;
  type: NotificationType;
};

type Props = {
  notifications: Notification[];
};

// emoji per type
const typeEmoji: Record<NotificationType, string> = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
  warning: "⚠️",
};

export const NotificationContainer = ({ notifications }: Props) => {
  return (
    <div style={containerStyle}>
      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            ...itemStyle,
            ...typeStyle[n.type],
          }}
        >
          <span style={emojiStyle}>{typeEmoji[n.type]}</span>
          <span>{n.message}</span>
        </div>
      ))}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 9999,
};

const itemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  padding: "14px 18px",
  borderRadius: 8,
  marginBottom: 10,
  color: "#fff",
  minWidth: 260,
  textAlign: "center",
  boxShadow: "0 6px 20px rgba(0,0,0,.15)",
  fontWeight: 500,
};

const emojiStyle: React.CSSProperties = {
  fontSize: 20,
  lineHeight: 1,
};

const typeStyle: Record<NotificationType, React.CSSProperties> = {
  success: { backgroundColor: "#22c55e" },
  error: { backgroundColor: "#ef4444" },
  info: { backgroundColor: "#3b82f6" },
  warning: { backgroundColor: "#f59e0b" },
};
