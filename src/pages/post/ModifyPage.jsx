import ModifyComponent from "@components/post/ModifyComponent";
import {useParams} from "react-router-dom";

function ModifyPage() {
    const { aid } = useParams();
    console.log("aid:", aid);

    return (
        <div>
            <ModifyComponent aid={aid} />
        </div>
    );
}

export default ModifyPage;