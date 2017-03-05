import React from 'react';
import Alert from './Alert'

//********************************/
// For test
//********************************/
var Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJ0b2tlbkdDTSI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwidG9rZW5HQ00iOnRydWUsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwidG9rZW5HQ00iOiJlVnNYRTZ5bl8yMDpBUEE5MWJISEREYjdsSkgtc0s1YnhiaURsMnFKaElCTy1LWEdRdmp1NS1SWWc0NUltTk9yNWxNcTVWV2VDbV9tTjRCM1R2ZzlEeVhPX2NLYndRcW9uMHFJQ1I1WmZBT0NJMFNIa2dXU3BscWdiSUk3bUxDamU0NnQ1clRaYS14ekJJYnloTWhNRmxoYyIsImFkbWluIjpmYWxzZSwicGFzc3dvcmQiOiJwYXNzd29yZCIsIm5hbWUiOiJCYXIiLCJfaWQiOiI1OGFmMDg3ZGYyYmE3MDRhNjZkZTM0MjUifSwiaWF0IjoxNDg4NzA5OTIxLCJleHAiOjE0ODg3OTYzMjF9.CpNYhkjyagW51dalUNSAdZq8DxkmxX5sV4oXs1CHhqk"

class AlertPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
             data: [],
        };
    }


    componentDidMount(){
         let myHeaders = new Headers();

        myHeaders.append('Authorization', "Bearer " + Token);

        let myInit = {
            method : 'GET',
            headers : myHeaders
        }

        let myRequest = new Request('http://localhost:8080/alerts/self/', myInit)

        fetch(myRequest)
        .then((res) => res.json())
        .then((data) => { 
           this.setState({data : data }) 
           console.log(this.state.data[0])
        })
    }


    sendAckAlert = (AlertId) => {
        let myHeaders = new Headers();

        myHeaders.append('Authorization', "Bearer " + Token);
        let myInit = {
            method : 'PATCH',
            headers : myHeaders,
        }
        let myRequest = new Request('http://localhost:8080/alerts/self/ack/' + AlertId, myInit)
        fetch(myRequest)
        .then((res) => { 
            const nextAlerts = this.state.data.map((alert) => {
                if(alert.id === AlertId) {
                    return alert.ack = true 
                } else {
                    return alert
                }
            })
        this.setState({data : nextAlerts }) 
        })
    }


    render() {
            return(<div className='listAlert'>
                    {this.state.data.map((alert, index) => (
                        <Alert 
                            key={index} 
                            alert={alert}
                            sendAckAlert={this.sendAckAlert}
                        />       
                    ))}
                    
                   </div>)
        
    }
}

export default AlertPage;