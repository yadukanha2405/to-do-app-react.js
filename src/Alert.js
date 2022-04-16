import { useEffect } from "react";

export default function Alert({ msg, type, removeAlert, list }) {
  useEffect(() => {
    const setTimer = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(setTimer);
  }, [list]);
  return <div className={`alert alert-${type}`}>{msg} </div>;
}
