import React from 'react';
import {
  Link
} from 'react-router-dom'
import Screenshot from '../images/PropertyFieldMapPicker.gif';

const PropertyFieldMapPicker = () => (
  <div>
    <h2>Map Location Picker</h2>

    <p>
      This component generates a map location property field in your client side web part for 
      the SharePoint Framework. With this field, you can edit a point with a longitude and a 
      latittude input control. You can also click on a globe button to get the current user location. 
      You can also preview the selected location with a map preview provided by Bing Map. 
      This field uses react-cartographer lib to display the map.</p>
    <p>
      <img src={Screenshot} width="606" alt="Map Location Picker"/>
    </p>

    <h2>How to use this custom field in your project</h2>

    <p>
      1. Check that the sp-client-custom-field lib is installed in your project. To install this lib in your project, please
      read the <Link to="/sp-client-custom-fields">Getting Started Page</Link>.
    </p>
    <p>
      2. Create a new property for your web part as for example:
    </p>
    <pre>
export interface IMyWebPartProps &#123;<br/>
&nbsp;&nbsp;geolocation: string;<br/>
&#125;
    </pre>
    <p>
      3. In you web part file (for example MyWebPart.ts), import the custom field:
    </p>
    <pre>
import &#123; <strong>PropertyFieldMapPicker</strong> &#125; from 'sp-client-custom-fields/lib/PropertyFieldMapPicker';
    </pre>
    <p>
      4. Add the custom field in your Web Part property pane configuration:
    </p>
    <pre>
protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration &#123;<br/>
&nbsp;&nbsp;return &#123;<br/>
&nbsp;&nbsp;&nbsp;pages: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;header: &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: strings.PropertyPaneDescription<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groups: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groupName: strings.BasicGroupName,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groupFields: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>PropertyFieldMapPicker</strong>('geolocation', &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Select a location',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collapsed: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;longitude: this.properties.geolocation != null ? this.properties.geolocation.substr(0, this.properties.geolocation.indexOf(",")) : '0',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;latitude: this.properties.geolocation != null ? this.properties.geolocation.substr(this.properties.geolocation.indexOf(",") + 1, this.properties.geolocation.length - this.properties.geolocation.indexOf(",")) : '0',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render: this.render.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disableReactivePropertyChanges: this.disableReactivePropertyChanges,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: this.properties,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onGetErrorMessage: null,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deferredValidationTime: 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'mapPickerFieldId'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;]<br/>
  &#125;;
    </pre>

    <h2>Custom Field Properties</h2>

    <p>
      With this custom field, you can define the following properties:
    </p>

    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <td>Property</td>
          <td>Required</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>yes</td>
          <td>string</td>
          <td>Defines the label displayed on top of the control.</td>
        </tr>
        <tr>
          <td>collapsed</td>
          <td>no</td>
          <td>boolean</td>
          <td>Defines if the map must be collapsed by default. Default is false.</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>no</td>
          <td>string</td>
          <td>Defines the selected longitude by default.</td>
        </tr>
        <tr>
          <td>latitude</td>
          <td>no</td>
          <td>string</td>
          <td>Defines the selected latitude by default.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>no</td>
          <td>boolean</td>
          <td>Whether the property pane field is enabled or not.</td>
        </tr>
        <tr>
          <td>key</td>
          <td>yes</td>
          <td>string</td>
          <td>key (mandatory): An UNIQUE key indicates the identity of this control.</td>
        </tr>
        <tr>
          <td>onPropertyChange</td>
          <td>yes</td>
          <td>function</td>
          <td>Sets the function of the WP to raise when the property's value changed. You must map with the onPropertyPaneFieldChanged method of your web part object.</td>
        </tr>
        <tr>
          <td>render</td>
          <td>yes</td>
          <td>function</td>
          <td>This API is called to render the web part. Normally this function must be always defined with the 'this.render.bind(this)' method of the web part object.</td>
        </tr>
        <tr>
          <td>disableReactivePropertyChanges</td>
          <td>no</td>
          <td>boolean</td>
          <td>This property is used to indicate the web part's PropertyPane interaction mode: Reactive or NonReactive. The default behaviour is Reactive.</td>
        </tr>
        <tr>
          <td>properties</td>
          <td>yes</td>
          <td>any</td>
          <td>Defines the Web Part properties. You must always map this property to the properties collection of your Web Part object.</td>
        </tr>
        <tr>
          <td>onGetErrorMessage</td>
          <td>no</td>
          <td>function</td>
          <td>The method is used to get the validation error message and determine whether the input value is valid or not. See&nbsp;
            <a href="https://dev.office.com/sharepoint/docs/spfx/web-parts/guidance/validate-web-part-property-values">this documentation</a> to learn how to use it.</td>
        </tr>
        <tr>
          <td>deferredValidationTime</td>
          <td>no</td>
          <td>number</td>
          <td>Custom Field will start to validate after users stop typing for deferredValidationTime milliseconds. Default value is 200.</td>
        </tr>
      </tbody>
    </table>

    <p>
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/modules/_propertyfieldmappicker_.html">
        View the complete custom field API documentation</a>
      </p>

  </div>
)

export default PropertyFieldMapPicker;
