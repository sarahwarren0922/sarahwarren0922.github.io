/*const data = {
        client_id: "sa42ddf.4DtaVG1dWQ0sakRx@communicate.engageone.co",
        secret: "dB0NfHR32Sc28U48",
        customer_id: "sa42ddf"
};*/

fetch('https://api-ui.engageone.video/data/projects/Sarah/communications/VideoEx/videoUrl', {
        method: 'GET',
        headers: {
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