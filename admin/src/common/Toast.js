import {toast} from 'react-toastify';

const Toast = (type, message) => {
  const options = {
    position: "bottom-right",
    autoClose: 2500,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored'
  };

  switch (type) {
    case 'info':
      return toast.info(message, options);
    case 'success':
      return toast.success(message, options);
    case 'warning':
      return toast.warning(message, options);
    case 'error':
      return toast.error(message, options);
    default:
      return toast.default(message, options);
  }
}

export default Toast;

