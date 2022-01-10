import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const AddTransaction = ({formData, updateForm,submitForm,amountInput}) => {


    return ( <div className = "addTransaction" >
        <h3 > Add new transaction </h3>  

        <Form onSubmit={(event) => submitForm(event)}>
      <Form.Group>
          <Form.Label className="required">Text</Form.Label>
          <Form.Control name="text" type="text" 
                        placeholder="Enter text..." onChange={(event)=> updateForm(event)} value={formData.text} required/>
        </Form.Group>
        <br></br>
        <Form.Group className="form-amount">
          <Form.Label className="required">Amount (negative-expense,positive-income)</Form.Label>
          
          <Form.Control name="amount" type="text" 
                        placeholder="Enter Amount..." onChange={(event)=> updateForm(event)} value={formData.amount} required/>
          <h6 className = {amountInput ? "no-error":"error"}>Please Input Number</h6>              
        </Form.Group> 
        <Button variant="outline-primary"  type="submit" className="submit-btn"  >
           Add Transaction
        </Button>
      </Form>
     
  
        </div>
    )
}