import axios from 'axios';

const getInTouch = async ({
                              name,
                              email,
                              message,
                              captcha,
                          }) => {

    const   utcSeconds = Date.now() / 1000;
    const timestamp = new Date(0).setUTCSeconds(utcSeconds);

    try {
        const response = await axios.post('https://api.markearlam.com/get-in-touch', {
            name,
            email,
            message,
            source: window.location.pathname,
            optTimestamp: timestamp.toString(),
            captcha,
        });

        return response.status === 200 && response.data.statusCode === 200;
    }catch (e) {
        console.log(e);
        return false;
    }
};

export {
    getInTouch,
}

