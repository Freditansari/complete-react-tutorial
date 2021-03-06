import React, { Component } from 'react';
import Modal from 'react-modal';
const OptionModal =(props) =>(
    <div>
    <Modal
        isOpen ={!!props.selectedOption}
        contentLabel ="Selected Option"
        //onRequestClose 
        onRequestClose = {props.handleClearSelectedOption}
        closeTimeoutMS = {200}
        className="modal"

    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption&& <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>OK</button>

    </Modal>
    </div>

);  

export default OptionModal;

//create new event handler on indecisionapp that clears sleectedoption state 
//pass that into option modal 
//call it on button click
