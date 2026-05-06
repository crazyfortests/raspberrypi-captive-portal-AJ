function showReauthModal() {
  const modalHTML = `
    <div id="reauthModal" style="
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-family: Arial, sans-serif;
    ">
      <div style="
        background: white;
        width: 350px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      ">
        <div style="
          background: #007BFF;
          color: white;
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
        ">
          Security Notice
        </div>

        <div style="padding: 20px; color: #333; font-size: 14px;">
          For security reasons, it is recommended to authenticate again.<br><br>
          Please log in using your password.
        </div>

        <div style="padding: 10px; text-align: right;">
          <button id="reauthOkBtn" style="
            background: #007BFF;
            color: white;
            border: none;
            padding: 6px 14px;
            border-radius: 4px;
            cursor: pointer;
          ">
            OK
          </button>
        </div>
      </div>
    </div>
  `;

  // Add to page
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Attach event
  document.getElementById("reauthOkBtn").onclick = () => {
    document.getElementById("reauthModal").remove();
  };
}