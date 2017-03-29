import React from 'react'

import {connect} from 'react-redux'

import {sendReq, sendForm} from './action'

import { Button, Row, Col, Icon, Card } from 'react-materialize';

class EventPage extends React.Component{

    state = {
        img: null,
        imgPreviewUrl: null        
    }
   
    componentDidMount = () => {
        this.search()
    }

    search = () => {
            // dispatch proprité de react fournit dans this.props
            // this.props contient élement
            const {dispatch} = this.props
            dispatch(sendReq())
    }
    handleSubmit = (e) =>{
        // handle submit form
        const {dispatch} = this.props
        e.preventDefault()
        const type = this.select.value
        const text = this.textarea.value
        const img = this.img.files[0]
        console.log('my image ',img)
        dispatch(sendForm(type, text ,img))
    }
    createThumbnail = (file) => {
        let reader = new FileReader()
        reader.addEventListener('load', function(){
            let img = document.createElement('img')
            //img.src = reader.result
            this.span.appendChild(img)
        })
        reader.readAsDataURL(file)
        reader.onloadend = function(e){
            console.log('reeder t', reader.result)
            //return reader.result
        }
    }
    handlePreview = (e) => {
        console.log('in onChange listner functioon')
        const value = e.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({
                img: value,
                imgPreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(value)
    }

    render(){
        // injecte contenu du store 
        const {results} = this.props
        console.log(this.props)
        const { imgPreviewUrl } = this.state
        let $imagePreview = null;
        if (imgPreviewUrl) {
            $imagePreview = (<img src={imgPreviewUrl} />);
        }

        
        console.log('my props ',results)
        results.map((elt)=>{
            console.log('dump ', elt.type)
            elt.type.map((e)=>{
                console.log('my element ', e)
            })
        })

        return(
            <div className='menupage'>
                <h2>EventPage</h2>

                <form id='myForm' encType='multipart/form-data' onSubmit={this.handleSubmit} ref='form'>
                    <label>List events : </label>
                    <select className="browser-default" ref={(r) => this.select = r}>
                       <option value="" disabled selected>Choose your option</option>
                       {results.map((elt)=>{
                           return elt.type.map((el)=>{
                                return <option>{el}</option>
                           })
                       })}
                    </select><br /><br /> <br />
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" data-length="300" ref={(r) => this.textarea = r}>
                            </textarea>
                            <label for="textarea1">Description de l'incident: </label>
                        </div>
                    </div>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type='file' ref={(r) => this.img = r} onChange={this.handlePreview} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload file" />
                        </div>
                    </div>
                  
                    <span id='preview' ref={(r) => this.span = r} ></span><br/>

                    {$imagePreview}
                    <br />
                    <Row>
                        <Col s={12}>
                            <Button waves='light' type='submit'><Icon>Envoyer</Icon></Button><br/>
                        </Col>
                    </Row>
                    </form> 

            </div> 
            
        )
    }
}

export default connect(
    state => ({
        results: state.events.result
    })
)(EventPage)
