import React from 'react';

class SimpleAlert extends React.Component {
    render () {
        const title = this.props.title
        return (
          <div  className='SimpleAlert' onClick={this.props.onDisplayCompleteAlert}>
            <strong>{title}</strong>
          </div>
        )
    }
}

export default SimpleAlert