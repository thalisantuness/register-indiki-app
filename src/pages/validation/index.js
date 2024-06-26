import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import IndikiLogo from "../../assets/Indikilogo.png"; // Assuming it's in the same folder
import YoungImage from "../../assets/young.jpg"; // Assuming it's in the same folder
import AppStoreImage from "../../assets/appstore.png"; // Assuming it's in the same folder

export default function Validation() {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Placeholder for handling download logic
    alert("Redirecting to App Store!"); // Replace with actual logic
  };

  return (
    <div className="container">
      <img src={YoungImage} alt="Imagem Young" className="young-img" />
      <div className="text-wrapper">
        <div className="text-content">
          <p>
            Cadastro concluído!<br />
            Para começar usar Indiki,<br />
            baixe o App pela:
          </p>
          <img
            src={AppStoreImage}
            alt="App Store"
            className="appstore-img"
            onClick={handleDownload} // Handle download click event
          />
        </div>
      </div>
      <a href="/">
        <img src={IndikiLogo} alt="Indiki Logo" className="logo" />
      </a>
    </div>
  );
}
