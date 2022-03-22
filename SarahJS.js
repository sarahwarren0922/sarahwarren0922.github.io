const tokenBody = {
        client_id: "sa42ddf.4DtaVG1dWQ0sakRx@communicate.engageone.co",
        secret: "dB0NfHR32Sc28U48",
        customer_id: "sa42ddf"
};

//defining a helper function that will log out responses
function logResponse(codeblock, text) {
    document.getElementById(codeblock).innerText = text;
}

function authModule() {
    const authOrigins = ['https://limitless-sea-04039.herokuapp.com/https://usersapi.communicate.engageone.co/authenticate', 'https://limitless-sea-04039.herokuapp.com/https://api-ui.engageone.video/data/projects/Sarah/communications/VideoEx/videoUrl']
    let token = '';

    this.setToken = (value) => {
        token = value
    }

    this.fetch = (resource, options) => {
        let req = new Request(resource, options);
        destOrigin = new URL(req.url).origin;
        if (token && authOrigins.includes(destOrigin)) {
            req.headers.set('Authorization', 'Bearer ' + token);
        }
        return fetch(req)
    }
}

//var token; //global variable
const auth = new authModule();

function login() {
    fetch("https://limitless-sea-04039.herokuapp.com/https://usersapi.communicate.engageone.co/authenticate", {
        method: 'POST',
        body: JSON.stringify(tokenBody),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => {
            if (response.status == 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
        })
        .then(data => {
            token = data;
            auth.setToken(token)
            //localStorage.setItem("token", token);
            logResponse("loginResponse", 'Token generated successfully!')
        })
        .catch(error => console.error(error))
}

const nonauthHeaders = {
    'PB-Customer-Id': 'sa42ddf',
    'Content-type': 'application/json'
};

function makeRequest() {
    /*let headers = {}
    if (token) {
        headers = {
            //'Authorization': 'Bearer ' + token,
            'PB-Customer-Id': 'sa42ddf',
            'Content-type': 'application/json'}
    } */

    auth.fetch("https://limitless-sea-04039.herokuapp.com/https://api-ui.engageone.video/data/projects/Sarah/communications/VideoEx/videoUrl", {headers: nonauthHeaders})
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        })
        .then((responseText) => {
            parsedResponse = JSON.stringify(responseText.videoUrl);
            logResponse("requestResponse", JSON.parse(parsedResponse))
            genericUrl = JSON.parse(parsedResponse)
        })
        .catch(console.error)
}

//Start of Functions for the buttons actions
function getToken() {
    document.getElementById("generatetoken").innerHTML = "Token generated successfully!";
}

function getGenericURL() {
    document.getElementById("generategeneric").innerHTML = "URL generated successfully!";
}