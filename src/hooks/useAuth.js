import { useEffect } from "react";
import { isAuthenticated } from "firebaseConfig";

type Props = {
  /** Function to be called if the user is not authenticated */
  callback: Function,
};

export default (callback): Props =>
  useEffect(() => {
    if (!isAuthenticated()) callback();
  }, [callback]);
