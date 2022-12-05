import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../assets/css/cookiemodal.scss";
const style = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function CookieModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    localStorage.setItem("acceptCookies", JSON.stringify("accepted"));
    setOpen(false);
  };

  if (!localStorage.getItem("acceptCookies"))
    setTimeout(() => {
      setOpen(true);
    }, 1000);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="row d-flex justify-content-between" sx={style}>
          <Typography
            className="modal__h2"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            our cookie policy
          </Typography>
          <Typography
            className="col-7 under__text"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            we use cookies to give you the best experience. By using our website
            you agree to these cookies
          </Typography>
          <div className="button__close col-5 d-flex justify-content-end">
            <button onClick={() => handleClose()}>accept cookies</button>
          </div>{" "}
        </Box>
      </Modal>
    </div>
  );
}
