// Simulates server calls
 
import * as restful from "../../core/restful"
//application config /config/development.json or production.json
import config from "config";

//create new
export function login(user) {
        return restful.postJson(config.authEndPoint,
            user)
}
