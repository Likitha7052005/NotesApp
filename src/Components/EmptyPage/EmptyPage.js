import { Face } from "@moj-ui/fun-ui";
import "./EmptyPage.css";

function EmptyPage() {
  return (
    <div className="w-100 empty-page d-flex justify-content-center align-items-center flex-column">
      <Face style={{ fontSize: "4rem" }} />
      <h4>No Note Found</h4>
    </div>
  );
}

export default EmptyPage;
