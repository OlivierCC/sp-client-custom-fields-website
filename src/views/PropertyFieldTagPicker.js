import React from 'react';
import {
  Link
} from 'react-router-dom'
import Screenshot from '../images/PropertyFieldTagPicker.gif';

const PropertyFieldTagPicker = () => (
  <div>
    <h2>Tags Picker</h2>

    <p>
      This component generates a Tags Picker property field in your client side web part for 
      the SharePoint Framework, with autocomplete feature:</p>
    <p>
      <img src={Screenshot} width="606" alt="Dimension Picker"/>
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
import  &#123; IPropertyFieldTag &#125; from 'sp-client-custom-fields/lib/PropertyFieldTagPicker';<br/>
<br/>
export interface IMyWebPartProps &#123;<br/>
&nbsp;&nbsp;tags: IPropertyFieldTag[];<br/>
&#125;
    </pre>
    <p>
      3. In you web part file (for example MyWebPart.ts), import the custom field:
    </p>
    <pre>
import &#123; <strong>PropertyFieldTagPicker</strong> &#125; from 'sp-client-custom-fields/lib/PropertyFieldTagPicker';
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>PropertyFieldTagPicker</strong>('tags', &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Select tags',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selectedTags: this.properties.tags,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'black', name: 'black'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'blue', name: 'blue'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'brown', name: 'brown'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'cyan', name: 'cyan'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'green', name: 'green'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'magenta', name: 'magenta'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'mauve', name: 'mauve'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'orange', name: 'orange'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'pink', name: 'pink'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'purple', name: 'purple'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'red', name: 'red'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'rose', name: 'rose'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'violet', name: 'violet'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'white', name: 'white'&#125;,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;key: 'yellow', name: 'yellow'&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loadingText: 'Loading...',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;noResultsFoundText: 'No tags found',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;suggestionsHeaderText: 'Suggested Tags',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render: this.render.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disableReactivePropertyChanges: this.disableReactivePropertyChanges,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: this.properties,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onGetErrorMessage: null,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deferredValidationTime: 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'tagsFieldId'<br/>
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
          <td>selectedTags</td>
          <td>no</td>
          <td>IPropertyFieldTag[]</td>
          <td>Defines the selected tags by default.</td>
        </tr>
        <tr>
          <td>tags</td>
          <td>yes</td>
          <td>IPropertyFieldTag[]</td>
          <td>Collection of tags selectable by the user.</td>
        </tr>
        <tr>
          <td>loadingText</td>
          <td>yes</td>
          <td>string</td>
          <td>Text to display during loading.</td>
        </tr>
        <tr>
          <td>noResultsFoundText</td>
          <td>yes</td>
          <td>string</td>
          <td>Text to display when no results found.</td>
        </tr>
        <tr>
          <td>suggestionsHeaderText</td>
          <td>yes</td>
          <td>string</td>
          <td>Suggestions Header Text.</td>
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
    
    <h2>Return Value Properties</h2>

    <p>
      This custom field returns a collection of objects with the following properties
    </p>

    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <td>Property</td>
          <td>Type</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>string</td>
          <td>Tag's unique key</td>
        </tr>
        <tr>
          <td>name</td>
          <td>string</td>
          <td>Tag's label</td>
        </tr>
      </tbody>
    </table>
    
    <p>
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/modules/_propertyfieldtagpicker_.html">
        View the complete custom field API documentation</a>
      </p>

  </div>
)

export default PropertyFieldTagPicker;
