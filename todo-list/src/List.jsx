import React, { Component } from 'react';
import Button from './Button'

export default class List extends Component {

  render() {
    const { onClick, list, buttonText } = this.props;
    if ({ list }) {
      return (
        <div >
          <ul  Style={"list-style-type:none"} >{list.map((item,index) =>
            <li  key={'item_'+index}>
              <div className="ui right labeled button">
                
                <Button onClick = {()=>onClick(index,item)} className="ui green button" text ={buttonText}></Button>
              <h3 className ="ui basic label">{item}</h3>
              </div>
            </li>
          )}
          </ul>
        </div>
      );
    }
  }
}
