import "./WelcomePanel.css";
import WelcomeNote from "../WelcomeNote/WelcomeNote";

function WelcomePanel(){
    return <div className="welcome-panel-main-div d-flex flex-column">
        <header className="header border bg-black text-white justify-content-start align-items-center p-2">
            <div className="welcome-panel-header">
                <h1>Notes app</h1>
            </div>
        </header>
        <div className="lower-section h-100 w-100 d-flex justify-content-center align-items-center">
        <WelcomeNote />
        </div>

    </div>
}

export default WelcomePanel;