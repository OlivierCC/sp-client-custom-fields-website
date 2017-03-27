import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'

import Home from './Home';
import PropertyFieldColorPickerMini from './PropertyFieldColorPickerMini';
import PropertyFieldColorPicker from './PropertyFieldColorPicker';
import PropertyFieldFontPicker from './PropertyFieldFontPicker';
import PropertyFieldFontSizePicker from './PropertyFieldFontSizePicker';
import PropertyFieldIconPicker from './PropertyFieldIconPicker';
import PropertyFieldAlignPicker from './PropertyFieldAlignPicker';
import PropertyFieldDisplayMode from './PropertyFieldDisplayMode';
import PropertyFieldDimensionPicker from './PropertyFieldDimensionPicker';
import PropertyFieldPassword from './PropertyFieldPassword';
import PropertyFieldRichTextBox from './PropertyFieldRichTextBox';
import PropertyFieldTagPicker from './PropertyFieldTagPicker';
import PropertyFieldMaskedInput from './PropertyFieldMaskedInput';
import PropertyFieldDatePicker from './PropertyFieldDatePicker';
import PropertyFieldDateTimePicker from './PropertyFieldDateTimePicker';
import PropertyFieldPhoneNumber from './PropertyFieldPhoneNumber';
import PropertyFieldSliderRange from './PropertyFieldSliderRange';
import PropertyFieldDropDownSelect from './PropertyFieldDropDownSelect';
import PropertyFieldSortableList from './PropertyFieldSortableList';
import PropertyFieldStarRating from './PropertyFieldStarRating';
import PropertyFieldMapPicker from './PropertyFieldMapPicker';
import PropertyFieldDropDownTreeView from './PropertyFieldDropDownTreeView';
import PropertyFieldTreeView from './PropertyFieldTreeView';
import PropertyFieldCustomList from './PropertyFieldCustomList';
import PropertyFieldPeoplePicker from './PropertyFieldPeoplePicker';
import PropertyFieldPicturePicker from './PropertyFieldPicturePicker';
import PropertyFieldDocumentPicker from './PropertyFieldDocumentPicker';
import PropertyFieldSPListPicker from './PropertyFieldSPListPicker';
import PropertyFieldSPListMultiplePicker from './PropertyFieldSPListMultiplePicker';
import PropertyFieldSPListQuery from './PropertyFieldSPListQuery';
import PropertyFieldSPFolderPicker from './PropertyFieldSPFolderPicker';
import PropertyFieldGroupPicker from './PropertyFieldGroupPicker';
import PropertyFieldNumericInput from './PropertyFieldNumericInput';

const App = () => (
  <Router history={browserHistory}>
    <div className="main">
    <div className="header">
      <div className="header_resize">
        <div className="logo">
          <h1><Link to="/sp-client-custom-fields"><span>sp-client-custom-fields</span> Library<small>The Best Property Pane Custom Fields Library for the SharePoint Framework (SPFx)</small></Link></h1>
        </div>
        <div className="menu_nav">
          <ul>
            <li><Link to="/sp-client-custom-fields">Home</Link></li>
            <li><a href="https://oliviercc.github.io/sp-client-custom-fields/docs/index.html">API Documentation</a></li>
            <li><a href="https://github.com/OlivierCC/sp-client-custom-fields">Github (source code)</a></li>
          </ul>
        </div>
        <div className="clr"></div>
      </div>
    </div>
    <div className="content">
        <div className="content_resize">
          <div className="mainbar">
            <div className="article">
               <Route exact path="/sp-client-custom-fields" component={Home}/>
               <Route path="/sp-client-custom-fields/propertyfieldcolorpickermini" component={PropertyFieldColorPickerMini}/>
               <Route path="/sp-client-custom-fields/propertyfieldcolorpicker" component={PropertyFieldColorPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldfontpicker" component={PropertyFieldFontPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldfontsizepicker" component={PropertyFieldFontSizePicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldiconpicker" component={PropertyFieldIconPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldalignpicker" component={PropertyFieldAlignPicker}/>
               <Route path="/sp-client-custom-fields/propertyfielddisplaymode" component={PropertyFieldDisplayMode}/>
               <Route path="/sp-client-custom-fields/propertyfielddimensionpicker" component={PropertyFieldDimensionPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldpassword" component={PropertyFieldPassword}/>
               <Route path="/sp-client-custom-fields/propertyfieldrichtextbox" component={PropertyFieldRichTextBox}/>
               <Route path="/sp-client-custom-fields/propertyfieldtagpicker" component={PropertyFieldTagPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldmaskedinput" component={PropertyFieldMaskedInput}/>
               <Route path="/sp-client-custom-fields/propertyfielddatepicker" component={PropertyFieldDatePicker}/>
               <Route path="/sp-client-custom-fields/propertyfielddatetimepicker" component={PropertyFieldDateTimePicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldphonenumber" component={PropertyFieldPhoneNumber}/>
               <Route path="/sp-client-custom-fields/propertyfieldsliderrange" component={PropertyFieldSliderRange}/>
               <Route path="/sp-client-custom-fields/propertyfielddropdownselect" component={PropertyFieldDropDownSelect}/>
               <Route path="/sp-client-custom-fields/propertyfieldsortablelist" component={PropertyFieldSortableList}/>
               <Route path="/sp-client-custom-fields/propertyfieldstarrating" component={PropertyFieldStarRating}/>
               <Route path="/sp-client-custom-fields/propertyfieldmappicker" component={PropertyFieldMapPicker}/>
               <Route path="/sp-client-custom-fields/propertyfielddropdowntreeview" component={PropertyFieldDropDownTreeView}/>
               <Route path="/sp-client-custom-fields/propertyfieldtreeview" component={PropertyFieldTreeView}/>
               <Route path="/sp-client-custom-fields/propertyfieldcustomlist" component={PropertyFieldCustomList}/>
               <Route path="/sp-client-custom-fields/propertyfieldpeoplepicker" component={PropertyFieldPeoplePicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldpicturepicker" component={PropertyFieldPicturePicker}/>
               <Route path="/sp-client-custom-fields/propertyfielddocumentepicker" component={PropertyFieldDocumentPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldsplistpicker" component={PropertyFieldSPListPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldsplistmultiplepicker" component={PropertyFieldSPListMultiplePicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldsplistquery" component={PropertyFieldSPListQuery}/>
               <Route path="/sp-client-custom-fields/propertyfieldspfolderpicker" component={PropertyFieldSPFolderPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldgrouppicker" component={PropertyFieldGroupPicker}/>
               <Route path="/sp-client-custom-fields/propertyfieldnumericinput" component={PropertyFieldNumericInput}/>
            </div>
          </div>
          <div className="sidebar">
            <div className="gadget_first">
              <h2 className="separator"><span>Components</span></h2>
            </div>
            <div className="gadget">
              <h2 className="star"><span>Layouts</span></h2>
              <div className="clr"></div>
              <ul className="sb_menu">
                <li><Link to="/sp-client-custom-fields/propertyfieldcolorpicker">Color Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldcolorpickermini">Mini Color Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldfontpicker">Font Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldfontsizepicker">Font Size Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldiconpicker">Icon Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldalignpicker">Align Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddisplaymode">Display Mode</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddimensionpicker">Dimension Picker</Link></li>
              </ul>
            </div>
            <div className="gadget">
              <h2 className="star"><span>Text Inputs</span></h2>
              <div className="clr"></div>
              <ul className="sb_menu">
                <li><Link to="/sp-client-custom-fields/propertyfielddatepicker">Date Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddatetimepicker">DateTime Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldpassword">Password</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldnumericinput">Numeric Input</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldrichtextbox">Rich TextBox</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldtagpicker">Tags Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldmaskedinput">Masked Input</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldphonenumber">Phone Number</Link></li>
              </ul>
            </div>
            <div className="gadget">
              <h2 className="star"><span>Rich Inputs</span></h2>
              <div className="clr"></div>
              <ul className="sb_menu">
                <li><Link to="/sp-client-custom-fields/propertyfieldsliderrange">Slider Range</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddropdownselect">DropDown Select</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddropdowntreeview">DropDown TreeView</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldtreeview">TreeView</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldsortablelist">Sortable List</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldcustomlist">Data Custom List</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldstarrating">Star Rating</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldmappicker">Map Location Picker</Link></li>
              </ul>
            </div>
            <div className="gadget_last">
              <h2 className="star"><span>SharePoint</span></h2>
              <div className="clr"></div>
              <ul className="sb_menu">
                <li><Link to="/sp-client-custom-fields/propertyfieldpeoplepicker">People Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldgrouppicker">Group Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldpicturepicker">Picture Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfielddocumentepicker">Document Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldsplistpicker">SharePoint List Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldsplistmultiplepicker">Multiple SharePoint Lists Picker</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldsplistquery">SharePoint List Query</Link></li>
                <li><Link to="/sp-client-custom-fields/propertyfieldspfolderpicker">Folder Picker</Link></li>
              </ul>
            </div>
          </div>
          <div className="clr"></div>
        </div>
    </div>
    <div className="fbg">
      <div className="fbg_resize">
        <div className="col c1">
          <h2><span>License</span></h2>
          <p>The MIT License (MIT)<br />
            A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
            &nbsp;<a href="https://github.com/OlivierCC/sp-client-custom-fields/blob/master/LICENSE.md">View the license</a>.</p>
        </div>
        <div className="col c2">
          <h2><span>Support</span></h2>
          <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. <br/>
            <a href="https://github.com/OlivierCC/sp-client-custom-fields/issues">Report bugs or features requests</a>
          </p>
        </div>
        <div className="col c3">
          <h2><span>About</span></h2>
          <p>Please note that this library is not officially supported by Microsoft. This library has been developed by 
            &nbsp;<a href="https://github.com/OlivierCC/">Olivier Carpentier</a>, 
            is free and open source. You can use it if you follow the terms of the license.</p>
        </div>
        <div className="clr"></div>
      </div>
    </div>
    <div className="footer">
      <div className="footer_resize">
        <p className="lf">&copy; Copyright <a href="https://github.com/OlivierCC/">Olivier Carpentier</a>.</p>
        <p className="rf">Web site powered by <a href="https://facebook.github.io/react/">React JS</a></p>
        <div className="clr"></div>
      </div>
    </div>
  </div>
  </Router>
)

export default App;
