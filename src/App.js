import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="login-container">
      <nav>
        <h1>Task Manager</h1>
      </nav>
      <div className="login-items">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleEmail}
        />
        <span className="span"></span>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handlePassword}
        />
        <span className="span"></span>
        <div className="login-buttons">
          <Button
            variant="contained"
            onClick={() => {
              console.log(email);
              console.log(password);
            }}
          >
            Login
          </Button>
          <Button variant="contained" onClick={() => handleOpen()}>
            Register
          </Button>
          <Modal classNmae="modal" open={openModal} onClose={handleClose}>
            <Box className="modal-box">
              <p>whaddip</p>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
