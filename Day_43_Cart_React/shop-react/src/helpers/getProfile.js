import { endpoint } from "../configs/config";
import HttpClient from "../configs/client";
// import getApiKey from "./getApiKey";

const client = new HttpClient();

async function getProfile() {
	// [GET : /users/profile] Dùng để lấy ra thông tin user
	const apiKeyLocal = localStorage.getItem("apiKey");
	if (apiKeyLocal) {
		const { res, data } = await client.get(endpoint.profile, {}, apiKeyLocal);

    if (res.ok) {
      return data.data;
    } else {
      return null;
    }

	}



}

export default getProfile;