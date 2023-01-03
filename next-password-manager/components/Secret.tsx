import { ISecret } from "../types";

function Secret({secret}:{secret:ISecret}) {
    return (
        <>
            <p>{secret.webSite.name}:{secret.userInfo.login}:{secret.userInfo.password}</p>
        </>
    )
}

export default Secret;