import React, { Component } from "react";

export default class Ethnicity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    };
  }
  onChangeNumber(e) {
    this.setState({ currentValue: e.target.value });
    console.log(e.target.value);
    this.props.onChanged(parseInt(e.target.value.toString()));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <select
            type="number"
            onChange={this.onChangeNumber.bind(this)}
            className="form-control"
            value={this.state.currentValue}
          >
            <option value="" disabled="disabled">
              -- select one --
            </option>
            <optgroup label="White">
              <option value="White English">English</option>
              <option value="White Welsh">Welsh</option>
              <option value="White Scottish">Scottish</option>
              <option value="White Northern Irish">Northern Irish</option>
              <option value="White Irish">Irish</option>
              <option value="White Gypsy or Irish Traveller">
                Gypsy or Irish Traveller
              </option>
              <option value="White Other">Any other White background</option>
            </optgroup>
            <optgroup label="Mixed or Multiple ethnic groups">
              <option value="Mixed White and Black Caribbean">
                White and Black Caribbean
              </option>
              <option value="Mixed White and Black African">
                White and Black African
              </option>
              <option value="Mixed White Other">
                Any other Mixed or Multiple background
              </option>
            </optgroup>
            <optgroup label="Asian">
              <option value="Asian Indian">Indian</option>
              <option value="Asian Pakistani">Pakistani</option>
              <option value="Asian Bangladeshi">Bangladeshi</option>
              <option value="Asian Chinese">Chinese</option>
              <option value="Asian Other">Any other Asian background</option>
            </optgroup>
            <optgroup label="Black">
              <option value="Black African">African</option>
              <option value="Black African American">African American</option>
              <option value="Black Caribbean">Caribbean</option>
              <option value="Black Other">Any other Black background</option>
            </optgroup>
            <optgroup label="Other ethnic groups">
              <option value="Arab">Arab</option>
              <option value="Hispanic">Hispanic</option>
              <option value="Latino">Latino</option>
              <option value="Native American">Native American</option>
              <option value="Pacific Islander">Pacific Islander</option>
              <option value="Other">Any other ethnic group</option>
            </optgroup>
          </select>
        </div>
   
      </div>
    );
  }
}
