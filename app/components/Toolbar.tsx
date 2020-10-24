import React from 'react';
import styled from 'styled-components';

const ToolBarStyle = styled.div`
  display: block;
  position: fixed;
  top:0;
  background: #252526;
  height: 32px;
  width: calc(100% - 2px); /*Compensate for body 1px border*/
  padding: 4px;
  .draggable {
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
  .toolbar {
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%
  }
  .windows-title {
    align-items: center;
    margin-left: 8px;
    overflow: hidden;
    font-family: "Segoe UI", sans-serif;
    font-size: 12px;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .windows-controls {
    -webkit-app-region: no-drag;
    display: flex;
  }
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: -webkit-fill-available;
    padding: 0 20px;
  }

  .windows-controls .button {
    user-select: none;
  }
  .windows-controls .button:hover {
    background: rgba(255,255,255,0.1);
  }
  .windows-controls .button:active {
    background: rgba(255,255,255,0.2);
  }

  #close-button:hover {
    background: #E81123 !important;
  }
  #close-button:active {
    background: #F1707A !important;
  }
  #close-button:active .icon {
    filter: invert(1);
  }

  .hidden {
    display: none !important;
  }



  @media (-webkit-device-pixel-ratio: 1.5), (device-pixel-ratio: 1.5),
  (-webkit-device-pixel-ratio: 2), (device-pixel-ratio: 2),
  (-webkit-device-pixel-ratio: 3), (device-pixel-ratio: 3) {
    .draggable .icon {
      width: 10px;
      height: 10px;
    }
  }
`;

function ToolBar() {


  const remote = require('electron').remote;

const win = remote.getCurrentWindow(); /* Note this is different to the
html global `window` variable */

// When document has loaded, initialise
document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

window.onbeforeunload = () => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", () => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", () => {
        win.maximize();
        document.getElementById("max-button").classList.toggle('hidden');
        document.getElementById("restore-button").classList.toggle('hidden');
    });

    document.getElementById('restore-button').addEventListener("click", () => {
        win.unmaximize();
        document.getElementById("restore-button").classList.toggle('hidden');
        document.getElementById("max-button").classList.toggle('hidden');
    });

    document.getElementById('close-button').addEventListener("click", () => {
        win.close();
    });

    // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}


  return (
      <ToolBarStyle>
          <div className="draggable">
            <div className="toolbar">
              <div className="windows-title">
                <span>Project Spawn</span>
              </div>
              <div className="windows-controls">
                <div className="button" id="min-button">
                  <img className="icon" srcSet="icons/min-w-10.png 1x, icons/min-w-12.png 1.25x, icons/min-w-15.png 1.5x, icons/min-w-15.png 1.75x, icons/min-w-20.png 2x, icons/min-w-20.png 2.25x, icons/min-w-24.png 2.5x, icons/min-w-30.png 3x, icons/min-w-30.png 3.5x" draggable="false" />
                </div>
                <div className="button show" id="max-button">
                  <img className="icon" srcSet="icons/max-w-10.png 1x, icons/max-w-12.png 1.25x, icons/max-w-15.png 1.5x, icons/max-w-15.png 1.75x, icons/max-w-20.png 2x, icons/max-w-20.png 2.25x, icons/max-w-24.png 2.5x, icons/max-w-30.png 3x, icons/max-w-30.png 3.5x" draggable="false" />
                </div>
                <div className="button hidden" id="restore-button">
                  <img className="icon" srcSet="icons/restore-w-10.png 1x, icons/restore-w-12.png 1.25x, icons/restore-w-15.png 1.5x, icons/restore-w-15.png 1.75x, icons/restore-w-20.png 2x, icons/restore-w-20.png 2.25x, icons/restore-w-24.png 2.5x, icons/restore-w-30.png 3x, icons/restore-w-30.png 3.5x" draggable="false" />
                </div>
                <div className="button" id="close-button">
                  <img className="icon" srcSet="icons/close-w-10.png 1x, icons/close-w-12.png 1.25x, icons/close-w-15.png 1.5x, icons/close-w-15.png 1.75x, icons/close-w-20.png 2x, icons/close-w-20.png 2.25x, icons/close-w-24.png 2.5x, icons/close-w-30.png 3x, icons/close-w-30.png 3.5x" draggable="false" />
                </div>
              </div>
            </div>
          </div>
      </ToolBarStyle>
  );
}

export default ToolBar;
