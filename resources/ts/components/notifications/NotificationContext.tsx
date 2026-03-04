import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { NotificationContainer } from "./NotificationContainer";

export type NotificationType = "success" | "error" | "info" | "warning";

type Notification = {
  id: number;
  message: string;
  type: NotificationType;
};

type NotificationContextType = {
  notify: (message: string, type?: NotificationType) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (
    message: string,
    type: NotificationType = "info"
  ) => {
    const id = Date.now();

    setNotifications((prev) => [
      ...prev,
      { id, message, type },
    ]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== id)
      );
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <NotificationContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }
  return context;
};
