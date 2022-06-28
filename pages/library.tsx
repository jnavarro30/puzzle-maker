import LibraryList from "../components/LibraryList";
import LibrarySettings from "../components/LibrarySettings";

const PuzzleLibrary = () => {
    return (
      <div className="library">
        <h1 className="title">Library</h1>
        <div className="body">
            <LibraryList />
            <LibrarySettings />
        </div>
      </div>
    )
  }
  
  export default PuzzleLibrary;