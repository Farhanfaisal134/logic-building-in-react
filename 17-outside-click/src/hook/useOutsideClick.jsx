import { useEffect } from 'react';

const useOutsideClick = (ref, handler = () => { }) => {
  useEffect(() => {
    function listener(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler()
      };
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

  }, [ref, handler])
}

export default useOutsideClick;