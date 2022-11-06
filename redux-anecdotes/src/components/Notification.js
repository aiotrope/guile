import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectNotification } from "../reducers/notificationReducer";

export const Notification = () => {
  const [notification, setNotification] = useState("");
  const [show, setShow] = useState(false);

  const alert = useSelector(selectNotification);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  useEffect(() => {
    if (alert.length > 0) {
      const newAlert = [...alert];
      // get the last element in array
      const _alert = newAlert.at(-1);
      setNotification(_alert);
      setShow(true);
      let timer;
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [alert]);

  return show ? <div style={style}>{notification.message}</div> : null;
};
