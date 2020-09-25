import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import SimpleList from '../../List/List';


const UpdateModal = (todo) => {
    const [open, setOpen] = React.useState(false)
    // console.log("print@updateModal "+ JSON.stringify(todo) )

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={SimpleList(todo)} 
        >
            <Modal.Header style={{}}>update Module</Modal.Header>
            <Modal.Content image>

                <Modal.Description style={{ height: '200px' }}>
                    <Header>Title</Header>
                    <p>
                        Description:
          </p>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
        </Button>
                <Button
                    content="Update"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default UpdateModal
