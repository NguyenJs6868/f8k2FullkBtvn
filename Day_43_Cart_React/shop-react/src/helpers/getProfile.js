import { endpoint } from "../configs/config";
import HttpClient from "../configs/client";
// import getApiKey from "./getApiKey";

const client = new HttpClient();

async function getProfile(apiKey) {


	if (apiKey) {
		const { res, data } = await client.get(endpoint.profile, {}, apiKey);

    if (res.ok) {
      return data.data;
    } else {
      return null;
    }

	}



}

export default getProfile;