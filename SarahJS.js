/*const data = {
        client_id: "sa42ddf.4DtaVG1dWQ0sakRx@communicate.engageone.co",
        secret: "dB0NfHR32Sc28U48",
        customer_id: "sa42ddf"
};*/

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc2MjA2MDkuODEyNDI5NywiaWF0IjoxNjQ3NjE3MDA5LjgxMjQyOTcsIm5iZiI6MTY0NzYxNzAwOS44MTI0Mjk3LCJpc3MiOiJwcm9kdWN0aW9uLS11cy1lYXN0LTEiLCJzdWIiOiJmODFjOTYxYi1kNmJkLTRjNmQtOGU3YS1mNTJmMTVhMjZjYjYiLCJwcm9maWxlIjp7ImlkIjoiZjgxYzk2MWItZDZiZC00YzZkLThlN2EtZjUyZjE1YTI2Y2I2IiwibmFtZSI6IlNhcmFoIiwiZW1haWwiOiJzYTQyZGRmLjRkdGF2ZzFkd3Ewc2FrcnhAY29tbXVuaWNhdGUuZW5nYWdlb25lLmNvIiwic3ViX2lkIjoic2E0MmRkZiIsInN1YnNjcmlwdGlvbl9pZCI6InNhNDJkZGYiLCJzdWJzY3JpcHRpb25faWRzIjpbInNhNDJkZGYiXSwicm9sZXMiOlsiYWRtaW4iXSwiY2NfaWRfdG9rZW4iOiJleUpyYVdRaU9pSkpNMFpXU1hkMFlsUktiVWhpZGxoa2RUUmZaVEJzY0UxSmJrTTBTVmx0WDI5eFlsbHpjVFJoWldkM0lpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKemRXSWlPaUl3TUhVMlpURmtOakJ4Wm1OUGEzSk1kelI0TnlJc0luWmxjaUk2TVN3aWFYTnpJam9pYUhSMGNITTZMeTl6YzI4dWNISmxZMmx6Wld4NUxtTnZiUzl2WVhWMGFESXZZWFZ6WW5KeE5EVmtlblZ5Wm14T05FczBlRFlpTENKaGRXUWlPaUl3YjJGaE1teHFhM016UTI1c1RWUmlhREYwTnlJc0ltbGhkQ0k2TVRZME56WXhOekF3T0N3aVpYaHdJam94TmpRM05qSXdOakE0TENKcWRHa2lPaUpKUkM1cFRYZzBVMUpOY1UxZmVHNDVYelZOUkc5bFptZGtXV3RSWmpWV1JIQTJNRVJ0ZDBWMU1uRkRYek5WSWl3aVlXMXlJanBiSW5CM1pDSmRMQ0pwWkhBaU9pSXdNRzlpYlRCNWFEVlVWMVZ2ZFZKT1NqUjROaUlzSW1GMWRHaGZkR2x0WlNJNk1UWTBOell4TnpBd09Dd2lZWFJmYUdGemFDSTZJa2xsWmtWQlpHbFFUWGRqYTJWelJYWk9Ra1pYV2xFaWZRLmxjbjd0UFR4azYzMk1qTks1ZTJrcndONkhtcUVUN0VZZ3ZpaUlCMktBX21WS01UMVE0M2d4TlZaTUVJSHp3V0xyYVZjSlJMWnlReDZ2VlljeERxOEZrUDZHZlVHVWNOVjV3ZDlPVFFzWXdsc3Zud0lOc2RtSXpXWDhxUE04Qjk3VjFJLVhFaVp5TEVqNUFZdUFMQ3lXNDk5VXhrOWpYbzVJTEg1NGpKNU44NmkxLTFJSHFiRWpORmNwa0w4OGtZRkJ2MVBSSTFUb19nV2dFZ2RabThJQlFWSW96UjVFZWdUZTlwWkh6T2R5YUt2cUk2NkZkSHkwSVFrZEJwa0ZmTm9Ya21NWDc3eFZoSGZIU1dsbjVIWWRqWWFLajJDc3VKbFJNODc5QmxnSUVOYjRid1I5SHhFX294VWYweXp4Z3dOM0RJTklJYV9OUS1odi13dFNsOTh0QSIsImFjY291bnRfaWQiOiJlMS1wcmUtc2FsZXMiLCJhY2NvdW50X3N1YnNjcmlwdGlvbl9pZCI6bnVsbH19.YAQSJq8OHsSRD9nWtba2wNf94e1W7VSw3NgvC7DQngw';

fetch('https://api-ui.engageone.video/data/projects/Sarah/communications/VideoEx/videoUrl', {
        method: 'GET',
        headers: {
            'Authorization': 'token ${token}',
            'PB-Customer-Id': 'sa42ddf',
            'Content-type': 'application/json',
            //'Access-Control-Allow-Origin': 'file:///C:/Users/sa023wa/OneDrive%20-%20Precisely%20Inc/Learning/EO%20Communicate%20Video%20APIs/index.html'
        },
        //mode: 'no-cors'
    })
   .then(res => {
       return res.json()
   })  
   .then(data => console.log(data))
   .catch(error => console.log('ERROR'))


//Start of Functions for the buttons actions
function getToken() {
    document.getElementById("generatetoken").innerHTML = "Token generated successfully!";
}

function getGenericURL() {
    document.getElementById("generategeneric").innerHTML = "URL generated successfully!";
}