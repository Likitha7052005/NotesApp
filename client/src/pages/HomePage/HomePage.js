import AddBtn from "../../Components/AddBtn/AddBtn";
import Footer from "../../Components/Footer/Footer";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import Notes from "../../Components/Notes/Notes";
import SearchBar from "../../features/searchBar/SearchBar";
import "./HomePage.css"

function HomePage(){
    return <div>
        <HomePageHeader />
        <SearchBar />
        <Notes />
        <AddBtn />
        {/* <footer className="footer">
            <Footer/>
        </footer> */}
    </div>
}

export default HomePage;

