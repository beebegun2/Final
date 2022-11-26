const HOUSES_ENDPOINT = 'https://636abe97c07d8f936da65e1e.mockapi.io/houses';

class HousesApi {
    get = async () => {
        try {   
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
            }catch (e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
    });
    return await resp.json();
        }catch(e) {
            console.log('Oops, looks like updating houses had an issue', e);
        }
    }

}

export const housesApi = new HousesApi();