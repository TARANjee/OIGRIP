import React from 'react'

const PizzaDetail = ({ open,setOpen}) => {
    return (
        <div>
        
            <Modal
                size="lg"
                show={open}
                onHide={() => setOpen(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </div>
    )
}

export default PizzaDetail