import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import Axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const style = {
    bgcolor: "purple",
    color: "black",
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const register = () => {
    if ((name === "") | (password === "") | (email === "")) {
      alert("Please complete all fields.");
    } else {
      Axios.post("http://localhost:3030/register", {
        name: name,
        password: password,
        email: email,
      }).then((response) => {
        alert(response.data);
        console.log(response);
      });
    }
  };

  return (
    <>
      <nav>
        <h1>Task Manager</h1>
      </nav>
      <div className="login-container">
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
            type="password"
            onChange={handlePassword}
          />
          <span className="span"></span>
          <div className="login-buttons">
            <Button
              sx={style}
              variant="contained"
              onClick={() => {
                console.log(email);
                console.log(password);
              }}
            >
              Login
            </Button>
            <Button sx={style} variant="contained" onClick={() => handleOpen()}>
              Register
            </Button>
            <Dialog open={openModal} onClose={handleClose}>
              <form className="modal-box">
                <div className="register-items">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onChange={handleName}
                  />
                </div>
                <div className="register-items">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={handleEmail}
                  />
                </div>
                <div className="register-items">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={handlePassword}
                  />
                </div>
                <div className="login-buttons">
                  <Button
                    sx={style}
                    variant="contained"
                    onClick={() => {
                      register();
                      console.log(name);
                      console.log(email);
                      console.log(password);
                    }}
                  >
                    Register
                  </Button>
                </div>
              </form>
            </Dialog>
            {/* <Modal className="modal" open={openModal} onClose={handleClose}>
              <Box>
                <form className="modal-box">
                  <div className="register-items">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      onChange={handleName}
                    />
                  </div>
                  <div className="register-items">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="register-items">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      onChange={handlePassword}
                    />
                  </div>
                  <div className="login-buttons">
                    <Button
                      sx={style}
                      variant="contained"
                      onClick={() => {
                        register();
                        console.log(name);
                        console.log(email);
                        console.log(password);
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </form>
              </Box>
            </Modal> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
