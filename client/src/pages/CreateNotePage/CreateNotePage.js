import Footer from "../../Components/Footer/Footer";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import NewNote from "../../Components/NewNote/NewNote";

function CreateNotePage(){
    return <div>
        <HomePageHeader />
        <NewNote />
        {/* <footer className="footer vw-100 border vh-20">
            <Footer/>
        </footer> */}
    </div>
}

export default CreateNotePage;