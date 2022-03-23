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
    const fetch = window.fetch; // added statement for XSS overwrite
    const authOrigins = ["https://limitless-sea-04039.herokuapp.com"];
    let token = '';

    this.setToken = (value) => {
        token = value
    }

    this.fetch = (resource, options) => {
        let req = new Request(resource, options);
        destOrigin = new URL(req.url).origin;
        if (token && authOrigins.includes(destOrigin)) {
            req.headers.set('Authorization', 'Bearer ' + token);
        } else {
            console.log("oh no")
        }
        return fetch(req)
    }
}

//var token; //global variable
const auth = new authModule();

//Step 1 button function
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

//Step 2 button  function
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

//Step 3 button function
//Note that this function works upon button click and will allow you to see the data sources and associated Id's in the selected environment, 
//but for ease purposes is hard coded from this point forward as "Id":"fb76389f-dea6-4f65-8d80-04cb54688df6"
function dataIdRequest() {
    auth.fetch("https://limitless-sea-04039.herokuapp.com/https://api.us-east-1.communicate.engageone.co/data", {headers: nonauthHeaders})
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        })
        .then((responseText) => {
            parsedResponse = JSON.stringify(responseText);
            //logResponse("dataIdResponse", parsedResponse);
            const dataSourceId = 'fb76389f-dea6-4f65-8d80-04cb54688df6';
            logResponse("dataIdResponse", "Data Source Id: " + dataSourceId + " obtained successfully!")
        })
        .catch(console.error)
}

//Step 4 button function
const dataSourceId = 'fb76389f-dea6-4f65-8d80-04cb54688df6'; 

function recordIdRequest() {
    auth.fetch("https://limitless-sea-04039.herokuapp.com/https://api.us-east-1.communicate.engageone.co/data/" + dataSourceId, {headers: nonauthHeaders})
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        })
        .then((responseText) => {
            parsedResponse = JSON.stringify(responseText.data);
            //logResponse("recordIdResponse", parsedResponse);
            gotoResponse = JSON.parse(parsedResponse)
            uuidArray = [];
            for(let i = 0; i < gotoResponse.length; i++) {
                var uuids = gotoResponse[i].uuid;
                uuidArray.push(uuids);
            logResponse("recordIdResponse", uuidArray.join('\n'))
}
        })
        .catch(console.error)
}

//Seperate function notes to make urls clickable (hyperlinked)
/*var a = document.createElement('a');
var linkText = document.createTextNode("hello");
a.appendChild(linkText);
//a.title = "yamma";
a.href = "http://www.google.com";
document.body.appendChild(a);
//logResponse('appendIdFinal', document.body.appendChild(a));
*/

//Step 5 button function
function appendIds() {
    purlsArray = [];
    for (let i = 0; i <uuidArray.length; i++) {
        var a = document.createElement('a');
        var purls = document.createTextNode(genericUrl + uuidArray[i]);
        a.appendChild(purls);
        a.href = "http://www.google.com";
        document.body.appendChild(a[i]);
        purlsArray.push(purls);
        //logResponse("appendIdFinal", purlsArray.join('\n'))
    }
    purlsArraywName = [];
    for (let i = 0; i < purlsArray.length; i++) {
        var wname = gotoResponse[i].NAME + " - " + purlsArray[i];
        purlsArraywName.push(wname);
        //logResponse("appendIdFinal", purlsArraywName.join('\n'))
    }
}

//Start of Functions for the buttons actions
function getToken() {
    document.getElementById("generatetoken").innerHTML = "Token generated successfully!";
}

function getGenericURL() {
    document.getElementById("generategeneric").innerHTML = "URL generated successfully!";
}