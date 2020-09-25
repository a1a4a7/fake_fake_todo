import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function AddModal() {
    return (
        <Modal
            trigger={<Button className="ui fluid button">Add an Item</Button>}
            header='Add Item'
            content={xy()}
            actions={['Clear', {
                key: 'done', content: 'Done', positive: true
            }]}
            size='large'
        />
    )
}

function xy() {
    const bb = "bb"

    return (
        <div className="spanb">
            <div>Title: {bb} </div>
            <div style={{height: '400px'}}>Description:{bb} </div>
        </div>
    )
}

export default AddModal
