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
    const authOrigins = ['https://limitless-sea-04039.herokuapp.com/https://usersapi.communicate.engageone.co/authenticate']
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

function makeRequest() {
    /*let headers = {}
    if (token) {
        headers = {
            //'Authorization': 'Bearer ' + token,
            'PB-Customer-Id': 'sa42ddf',
            'Content-type': 'application/json'}
    } */
    nonauthHeaders = {
        'PB-Customer-Id': 'sa42ddf',
        'Content-type': 'application/json'
    }

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

//This section does something to get a token and save it in the browser session securely (I SHOULD USE THIS BUT IM TOO DUMB TO UNDERSTAND IT)
/*function authModule() {
    const authOrigins = ["https://tokenstorage.ropnop.dev", "https://localhost:3000"];
    let token = '';

    this.setToken = (value) => {
        token = value
    }

    this.fetch = (resource, options) => {
        let req = new Request(resource, options);
        destOrigin = new URL(req.url).origin;
        if (token && authOrigins.includes(destOrigin)) {
            req.headers.set('Authorization', token);
        }
        return this.fetch(req)
    }
} */


//const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc2MjA2MDkuODEyNDI5NywiaWF0IjoxNjQ3NjE3MDA5LjgxMjQyOTcsIm5iZiI6MTY0NzYxNzAwOS44MTI0Mjk3LCJpc3MiOiJwcm9kdWN0aW9uLS11cy1lYXN0LTEiLCJzdWIiOiJmODFjOTYxYi1kNmJkLTRjNmQtOGU3YS1mNTJmMTVhMjZjYjYiLCJwcm9maWxlIjp7ImlkIjoiZjgxYzk2MWItZDZiZC00YzZkLThlN2EtZjUyZjE1YTI2Y2I2IiwibmFtZSI6IlNhcmFoIiwiZW1haWwiOiJzYTQyZGRmLjRkdGF2ZzFkd3Ewc2FrcnhAY29tbXVuaWNhdGUuZW5nYWdlb25lLmNvIiwic3ViX2lkIjoic2E0MmRkZiIsInN1YnNjcmlwdGlvbl9pZCI6InNhNDJkZGYiLCJzdWJzY3JpcHRpb25faWRzIjpbInNhNDJkZGYiXSwicm9sZXMiOlsiYWRtaW4iXSwiY2NfaWRfdG9rZW4iOiJleUpyYVdRaU9pSkpNMFpXU1hkMFlsUktiVWhpZGxoa2RUUmZaVEJzY0UxSmJrTTBTVmx0WDI5eFlsbHpjVFJoWldkM0lpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKemRXSWlPaUl3TUhVMlpURmtOakJ4Wm1OUGEzSk1kelI0TnlJc0luWmxjaUk2TVN3aWFYTnpJam9pYUhSMGNITTZMeTl6YzI4dWNISmxZMmx6Wld4NUxtTnZiUzl2WVhWMGFESXZZWFZ6WW5KeE5EVmtlblZ5Wm14T05FczBlRFlpTENKaGRXUWlPaUl3YjJGaE1teHFhM016UTI1c1RWUmlhREYwTnlJc0ltbGhkQ0k2TVRZME56WXhOekF3T0N3aVpYaHdJam94TmpRM05qSXdOakE0TENKcWRHa2lPaUpKUkM1cFRYZzBVMUpOY1UxZmVHNDVYelZOUkc5bFptZGtXV3RSWmpWV1JIQTJNRVJ0ZDBWMU1uRkRYek5WSWl3aVlXMXlJanBiSW5CM1pDSmRMQ0pwWkhBaU9pSXdNRzlpYlRCNWFEVlVWMVZ2ZFZKT1NqUjROaUlzSW1GMWRHaGZkR2x0WlNJNk1UWTBOell4TnpBd09Dd2lZWFJmYUdGemFDSTZJa2xsWmtWQlpHbFFUWGRqYTJWelJYWk9Ra1pYV2xFaWZRLmxjbjd0UFR4azYzMk1qTks1ZTJrcndONkhtcUVUN0VZZ3ZpaUlCMktBX21WS01UMVE0M2d4TlZaTUVJSHp3V0xyYVZjSlJMWnlReDZ2VlljeERxOEZrUDZHZlVHVWNOVjV3ZDlPVFFzWXdsc3Zud0lOc2RtSXpXWDhxUE04Qjk3VjFJLVhFaVp5TEVqNUFZdUFMQ3lXNDk5VXhrOWpYbzVJTEg1NGpKNU44NmkxLTFJSHFiRWpORmNwa0w4OGtZRkJ2MVBSSTFUb19nV2dFZ2RabThJQlFWSW96UjVFZWdUZTlwWkh6T2R5YUt2cUk2NkZkSHkwSVFrZEJwa0ZmTm9Ya21NWDc3eFZoSGZIU1dsbjVIWWRqWWFLajJDc3VKbFJNODc5QmxnSUVOYjRid1I5SHhFX294VWYweXp4Z3dOM0RJTklJYV9OUS1odi13dFNsOTh0QSIsImFjY291bnRfaWQiOiJlMS1wcmUtc2FsZXMiLCJhY2NvdW50X3N1YnNjcmlwdGlvbl9pZCI6bnVsbH19.YAQSJq8OHsSRD9nWtba2wNf94e1W7VSw3NgvC7DQngw';

/*fetch('https://api-ui.engageone.video/data/projects/Sarah/communications/VideoEx/videoUrl', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc2MjE4MDYuMDQ4Nzg2LCJpYXQiOjE2NDc2MTgyMDYuMDQ4Nzg2LCJuYmYiOjE2NDc2MTgyMDYuMDQ4Nzg2LCJpc3MiOiJwcm9kdWN0aW9uLS11cy1lYXN0LTEiLCJzdWIiOiJmODFjOTYxYi1kNmJkLTRjNmQtOGU3YS1mNTJmMTVhMjZjYjYiLCJwcm9maWxlIjp7ImlkIjoiZjgxYzk2MWItZDZiZC00YzZkLThlN2EtZjUyZjE1YTI2Y2I2IiwibmFtZSI6IlNhcmFoIiwiZW1haWwiOiJzYTQyZGRmLjRkdGF2ZzFkd3Ewc2FrcnhAY29tbXVuaWNhdGUuZW5nYWdlb25lLmNvIiwic3ViX2lkIjoic2E0MmRkZiIsInN1YnNjcmlwdGlvbl9pZCI6InNhNDJkZGYiLCJzdWJzY3JpcHRpb25faWRzIjpbInNhNDJkZGYiXSwicm9sZXMiOlsiYWRtaW4iXSwiY2NfaWRfdG9rZW4iOiJleUpyYVdRaU9pSkpNMFpXU1hkMFlsUktiVWhpZGxoa2RUUmZaVEJzY0UxSmJrTTBTVmx0WDI5eFlsbHpjVFJoWldkM0lpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKemRXSWlPaUl3TUhVMlpURmtOakJ4Wm1OUGEzSk1kelI0TnlJc0luWmxjaUk2TVN3aWFYTnpJam9pYUhSMGNITTZMeTl6YzI4dWNISmxZMmx6Wld4NUxtTnZiUzl2WVhWMGFESXZZWFZ6WW5KeE5EVmtlblZ5Wm14T05FczBlRFlpTENKaGRXUWlPaUl3YjJGaE1teHFhM016UTI1c1RWUmlhREYwTnlJc0ltbGhkQ0k2TVRZME56WXhPREl3TkN3aVpYaHdJam94TmpRM05qSXhPREEwTENKcWRHa2lPaUpKUkM0MlJrdFRTV1l0Y0d0NU1USmpUM0Z2UTFRMVV6bHRRbVJuUm1OQlpUQjJZV3hZWDJObVVqbEROR2xSSWl3aVlXMXlJanBiSW5CM1pDSmRMQ0pwWkhBaU9pSXdNRzlpYlRCNWFEVlVWMVZ2ZFZKT1NqUjROaUlzSW1GMWRHaGZkR2x0WlNJNk1UWTBOell4T0RJd05Dd2lZWFJmYUdGemFDSTZJbE15TlZOSFRYUkpVVFJ4YVdJdFpXZzVjRmRrZEdjaWZRLnBZN3pvRzZqX3FfNmd0a2dXUmRFT3RScWJVYUd1eHhBSUhvOEhsa1ZoeXFaWTkzVTNXbDRIRUttaVl6Mk9XdGctSDRjSkh3QnJ5Q2ZRb1NHTmh1RlZDNW0tRElLQ3JHbDY1a1NwTVdaTFk3bjhQWXJRYmhjbHpMbDBzcGpHM2lyWm5vdTZnai1pUEVYSk90M2lYVTVCYjhkeDBGWkxRWDJSdTNzNnpEUUtsbUQ0VFd2R3VkcGFVc3czZzdNVm90bVhFb1RnLU5scXc5UkhSc1k0eWd2QmEwSkJRWUxwMUU3MFNYdVdHMWFTX2FYWC1CNGxQdkJMMW5Fb1YxQ1F1X3BLSXlTZWRMNHhDQXZPWXRBT1F4MG4xUjF1dG9rQXNxMUxmMWlZeV9ibFVubDhtQVZLVmhOWWFYajd5VEswMTB6alVGYUplYTdhZXFxZzRqQk1ZalFmdyIsImFjY291bnRfaWQiOiJlMS1wcmUtc2FsZXMiLCJhY2NvdW50X3N1YnNjcmlwdGlvbl9pZCI6bnVsbH19.jh0Oi5kyq7fKW48Sl_sFlzLA9CZmrBiJBIPp7YzAEiI',
            'PB-Customer-Id': 'sa42ddf',
            'Content-type': 'application/json'
        }
    })
   .then(res => {
       return res.json()
   })  
   .then(data => console.log(data))
   .catch(error => console.log('ERROR')) */


//Start of Functions for the buttons actions
function getToken() {
    document.getElementById("generatetoken").innerHTML = "Token generated successfully!";
}

function getGenericURL() {
    document.getElementById("generategeneric").innerHTML = "URL generated successfully!";
}