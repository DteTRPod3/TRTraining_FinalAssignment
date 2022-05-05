import React, { forwardRef, useImperativeHandle } from "react";
import toast, { Toaster } from "react-hot-toast";
const CustomToaster = forwardRef((prop: any, ref: any) => {
  useImperativeHandle(ref, () => ({
    toasterC() {
      toast((t) => {
        return (
          <div className="toast-signup">
            <span>{prop.message}</span>
            <div className="close-icon" onClick={() => toast.dismiss(t.id)}>
              x
            </div>
          </div>
        );
      });
    },
  }));

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2000,
          position: "top-right",
          className: "toast-main",
        }}
      />
    </>
  );
});

export default CustomToaster;
