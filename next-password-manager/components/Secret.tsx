import { ISecret } from "../types";

function Secret({secret}:{secret:ISecret}) {
    console.log(123);
    return (
        <>
            <p>{secret.webSite.name}:{secret.userInfo.login}:{secret.userInfo.password}</p>
        </>
    )
}

export default Secret;