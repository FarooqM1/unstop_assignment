import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { GoPeople } from 'react-icons/go';
import { BsGearWideConnected } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiHandbagFill } from 'react-icons/ri';
import { CiMenuKebab } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Assessment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (

        <main className='main-container'>

             {/*==================== assessment part====================*/}
            <div className='assessment_cont'>
                <div>
                    <p className='assessmnet_text'>Assessments Overview</p>
                </div>
                <div className='assessmnet_boxes'>
                    <div className='assessmnet_boxes_one'>
                        <div><p className='assessment_heading'>Total Assessment</p></div>
                        <div className='assessmnet_boxes_one_icon'>
                            <div className='assessmnet_boxes_one_icon_design'><HiMenuAlt4 /></div>
                            <div><p className='assessment_count'>34</p></div>
                        </div>
                    </div>
                    <div className='assessmnet_boxes_two'>
                        <div className='assessment_heading'><p>Candidates</p></div>
                        <div className='assessmnet_boxes_one_icon'>
                            <div className='assessmnet_boxes_one_icon_design'><GoPeople /></div>
                            <div className='assessmnet_boxes_one_icon_design_two'>
                                <div className='second_line'>
                                    <div className='assessment_count'><p>11,145 <span className='adding_plus'>+89</span></p></div>
                                    <div><p className='total_count'>Total Candidates</p></div>
                                </div>
                                {/* <div className='border_line'></div> */}
                                <div className='second_line'>
                                    <div className='assessment_count'><p>1,14 <span className='adding_plus'>+89</span></p></div>
                                    <div><p className='total_count'>Who Attempted</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='assessmnet_boxes_two'>
                        <div className='assessment_heading'><p>Candidates Source</p></div>
                        <div className='assessmnet_boxes_one_icon'>
                            <div className='assessmnet_boxes_one_icon_design_bg'><HiMenuAlt4 /></div>
                            <div className='assessmnet_boxes_one_icon_design_two'>
                                <div className='second_line'>
                                    <div className='assessment_count'><p>11,000 <span className='adding_plus'>+89</span></p></div>
                                    <div><p className='total_count'>E-mail</p></div>
                                </div>
                                {/* <div className='border_line'></div> */}
                                <div className='second_line'>
                                    <div className='assessment_count'><p>1,45 <span className='adding_plus'>+89</span></p></div>
                                    <div><p className='total_count'>Social Share</p></div>
                                </div>
                                <div className='second_line'>
                                    <div className='assessment_count'><p>1,45 <span className='adding_plus'>+89</span></p></div>
                                    <div><p className='total_count'>Unique Link</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='assessmnet_boxes_one'>
                        <div><p className='assessment_heading'>Total Purpose</p></div>
                        <div className='assessmnet_boxes_one_icon'>
                            <div className='assessmnet_boxes_one_icon_design'><BsGearWideConnected /></div>
                            <div><p className='assessment_count'>11</p></div>
                        </div>
                    </div>

                </div>

            </div>

            {/*==================== my assessment part ==============*/}
            <div className='my_assessmnt_cont'>
                <div><p className='my_assessmnt_cont_heading'>My Assessment</p></div>
                <div className='my_assessmnet_card'>
                    <div className='my_assessmnet_card_one'>

                        <div className='my_assessmnet_card_box'><AiOutlinePlus onClick={handleShow} /></div>
                        <div><p className='my_assessmnet_card_text'>New Assessment</p></div>
                        <div><p className='my_assessmnet_card_desc'>From here you can add questions of multiple types like MCQs, subjective(text/paragraph)</p></div>
                    </div>
                    <div className='my_assessmnet_card_two'>
                        <div className='my_assessmnet_card_two_top'>
                            <div className='my_assessmnet_card_two_top_box'><RiHandbagFill /></div>
                            <div className='my_assessmnet_card_two_menu'><CiMenuKebab /></div>
                        </div>
                        <div className='math_topic'>
                            <div>
                                <p className='math_topic_text'>Math Assessment</p>
                            </div>
                            <div className='math_topic_desc'>
                                <p className='math_topic_desc_job'>Job</p>
                                <div className='logo_assment'><SlCalender /></div>
                                <p className='math_topic_desc_text'>20Apr 2023</p>
                            </div>
                            <div className='border_line_math'></div>
                        </div>
                        <div className='my_assessmt_bottom'>
                            <div className='my_assessmt_bottom_duration'>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>

                                </div>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>
                                </div>
                            </div>
                            <div className='asse_bottom_button'>
                                <div className='asse_bottom_button_container'><SlCalender /> <span>Share</span></div>
                                <div className='asse_bottom_button_text'>LP</div>
                            </div>
                        </div>
                    </div>
                    <div className='my_assessmnet_card_two'>
                        <div className='my_assessmnet_card_two_top'>
                            <div className='my_assessmnet_card_two_top_box'><RiHandbagFill /></div>
                            <div className='my_assessmnet_card_two_menu'><CiMenuKebab /></div>
                        </div>
                        <div className='math_topic'>
                            <div>
                                <p className='math_topic_text'>Math Assessment</p>
                            </div>
                            <div className='math_topic_desc'>
                                <p className='math_topic_desc_job'>Job</p>
                                <div className='logo_assment'><SlCalender /></div>
                                <p className='math_topic_desc_text'>20Apr 2023</p>
                            </div>
                            <div className='border_line_math'></div>
                        </div>
                        <div className='my_assessmt_bottom'>
                            <div className='my_assessmt_bottom_duration'>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>

                                </div>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>
                                </div>
                            </div>
                            <div className='asse_bottom_button'>
                                <div className='asse_bottom_button_container'><SlCalender /> <span>Share</span></div>
                                <div className='asse_bottom_button_text'>LP</div>
                            </div>
                        </div>
                    </div>
                    <div className='my_assessmnet_card_two'>
                        <div className='my_assessmnet_card_two_top'>
                            <div className='my_assessmnet_card_two_top_box'><RiHandbagFill /></div>
                            <div className='my_assessmnet_card_two_menu'><CiMenuKebab /></div>
                        </div>
                        <div className='math_topic'>
                            <div>
                                <p className='math_topic_text'>Math Assessment</p>
                            </div>
                            <div className='math_topic_desc'>
                                <p className='math_topic_desc_job'>Job</p>
                                <div className='logo_assment'><SlCalender /></div>
                                <p className='math_topic_desc_text'>20Apr 2023</p>
                            </div>
                            <div className='border_line_math'></div>
                        </div>
                        <div className='my_assessmt_bottom'>
                            <div className='my_assessmt_bottom_duration'>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>

                                </div>
                                <div>
                                    <p className='my_assessmt_bottom_duration_text'>00</p>
                                    <p className='my_assessmt_bottom_duration_text_text'>Duration</p>
                                </div>
                            </div>
                            <div className='asse_bottom_button'>
                                <div className='asse_bottom_button_container'><SlCalender /> <span>Share</span></div>
                                <div className='asse_bottom_button_text'>LP</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/*==================== modal =============================*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new assessment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Name of assessment</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Type Here"
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Purpose of the test is</Form.Label>
                                <Form.Select aria-label="Select">
                                    <option>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Description</Form.Label>
                                <Form.Select aria-label="Select">
                                    <option>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Type Here"

                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Duration of assessment</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="HH:MM:SS"

                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='w-100' onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    )
}

export default Assessment