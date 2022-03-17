/*const data = {
        client_id: "sa42ddf.4DtaVG1dWQ0sakRx@communicate.engageone.co",
        secret: "dB0NfHR32Sc28U48",
        customer_id: "sa42ddf"
};*/

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc1Mjk0NTguNzA4MjM1MywiaWF0IjoxNjQ3NTI1ODU4LjcwODIzNTMsIm5iZiI6MTY0NzUyNTg1OC43MDgyMzUzLCJpc3MiOiJwcm9kdWN0aW9uLS11cy1lYXN0LTEiLCJzdWIiOiJmODFjOTYxYi1kNmJkLTRjNmQtOGU3YS1mNTJmMTVhMjZjYjYiLCJwcm9maWxlIjp7ImlkIjoiZjgxYzk2MWItZDZiZC00YzZkLThlN2EtZjUyZjE1YTI2Y2I2IiwibmFtZSI6IlNhcmFoIiwiZW1haWwiOiJzYTQyZGRmLjRkdGF2ZzFkd3Ewc2FrcnhAY29tbXVuaWNhdGUuZW5nYWdlb25lLmNvIiwic3ViX2lkIjoic2E0MmRkZiIsInN1YnNjcmlwdGlvbl9pZCI6InNhNDJkZGYiLCJzdWJzY3JpcHRpb25faWRzIjpbInNhNDJkZGYiXSwicm9sZXMiOlsiYWRtaW4iXSwiY2NfaWRfdG9rZW4iOiJleUpyYVdRaU9pSkpNMFpXU1hkMFlsUktiVWhpZGxoa2RUUmZaVEJzY0UxSmJrTTBTVmx0WDI5eFlsbHpjVFJoWldkM0lpd2lZV3huSWpvaVVsTXlOVFlpZlEuZXlKemRXSWlPaUl3TUhVMlpURmtOakJ4Wm1OUGEzSk1kelI0TnlJc0luWmxjaUk2TVN3aWFYTnpJam9pYUhSMGNITTZMeTl6YzI4dWNISmxZMmx6Wld4NUxtTnZiUzl2WVhWMGFESXZZWFZ6WW5KeE5EVmtlblZ5Wm14T05FczBlRFlpTENKaGRXUWlPaUl3YjJGaE1teHFhM016UTI1c1RWUmlhREYwTnlJc0ltbGhkQ0k2TVRZME56VXlOVGcxTnl3aVpYaHdJam94TmpRM05USTVORFUzTENKcWRHa2lPaUpKUkM1QmVHVkRXVU0wT0Y5clFqUlZRMnhaVHkwemRsUk9WMFJSUVRCVmMydFJUMjl5V25KemFWb3hRWFEwSWl3aVlXMXlJanBiSW5CM1pDSmRMQ0pwWkhBaU9pSXdNRzlpYlRCNWFEVlVWMVZ2ZFZKT1NqUjROaUlzSW1GMWRHaGZkR2x0WlNJNk1UWTBOelV5TlRnMU55d2lZWFJmYUdGemFDSTZJbEUzTVMxT2R6QXhZblJvZEVOeGFuSkhRM3BNVFhjaWZRLkJPNFJNS1Y5X0Q4dEZxVjhkdmtxelZ2endNQ1hYTzI5Q20xSXBsejJjSkc3TXRVRXdKRUNTd2xQc29hZVg1WHBDb01QeV9hUmFheUtFcTM5Z1FHZ20wQzF5RmpfOGVLWC1FOTNqYXV4UW9PTVpYd2JFWlBZcHh2d0Z4SXQ0SFE0SkVpZ1AyR2MxZDVpZzNJODdJcFVxNDlydDFycE82WjEwM2hGZ0VMWGhTYmo5YUQ2TzNfejBxZXpBSVV5TnBpUDVqbW9oVDZsS1FicG1Rak9KckpJeTZKNHNlRVhsSTMzOFZxQWR4dTRyQmlCS3B1THNkUHVkWjNKak5mZTNXSWZ4WVkySjFpYmlBLWVscjF3NDhyMW4xQ01pQmdmSjNoTExKOTFJNThqUUY4ZVlqZjl1NXZaU1ltLTdCQlNNaFFpVzNhR0RlN0ZHb2xITmNObVowUWJWdyIsImFjY291bnRfaWQiOiJlMS1wcmUtc2FsZXMiLCJhY2NvdW50X3N1YnNjcmlwdGlvbl9pZCI6bnVsbH19.poFF9LA0iOSV3CwDeQUuQ7ByXA5dXzjxOsCqRoTL-V8';

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