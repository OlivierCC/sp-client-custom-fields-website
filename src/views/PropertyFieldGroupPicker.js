import React from 'react';
import {
  Link
} from 'react-router-dom'
import Screenshot from '../images/PropertyFieldGroupPicker.gif';

const PropertyFieldGroupPicker = () => (
  <div>
    <h2>Group Picker</h2>

    <p>
      This component generates a Group Picker property field in your client side web part for 
      the SharePoint Framework. You can search and select <strong>SharePoint OR Security Groups</strong> from your tenant directory.</p>
    <p>
      <img src={Screenshot} width="606" alt="Group Picker"/>
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
import &#123; IPropertyFieldGroup &#125; from 'sp-client-custom-fields/lib/PropertyFieldGroupPicker';<br/>
<br/>
export interface IMyWebPartProps &#123;<br/>
&nbsp;&nbsp;groups: IPropertyFieldGroup[];<br/>
&#125;
    </pre>
    <p>
      3. In you web part file (for example MyWebPart.ts), import the custom field:
    </p>
    <pre>
import &#123; <strong>PropertyFieldGroupPicker, IGroupType</strong> &#125; from 'sp-client-custom-fields/lib/PropertyFieldGroupPicker';
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>PropertyFieldGroupPicker</strong>('groups', &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Select groups',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initialData: this.properties.groups,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allowDuplicate: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groupType: IGroupType.Security,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render: this.render.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disableReactivePropertyChanges: this.disableReactivePropertyChanges,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: this.context,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: this.properties,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onGetErrorMessage: null,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deferredValidationTime: 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'groupsPickerFieldId'<br/>
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
          <td>initialData</td>
          <td>no</td>
          <td>IPropertyFieldGroup[]</td>
          <td>Defines the selected values by default.</td>
        </tr>
        <tr>
          <td>allowDuplicate</td>
          <td>no</td>
          <td>boolean</td>
          <td>Allow to select the same group many times. Default is false.</td>
        </tr>
        <tr>
          <td>groupType</td>
          <td>yes</td>
          <td>IGroupType</td>
          <td>Defines if you want to select Security groups or SharePoint groups. Value can be IGroupType.Security or IGroupType.SharePoint.</td>
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
          <td>context</td>
          <td>yes</td>
          <td>any</td>
          <td>Defines the webpart context, you should map with this.context.</td>
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
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/modules/_propertyfieldgrouppicker_.html">
        View the complete custom field API documentation</a>
      </p>

      <h2>IPropertyFieldGroup Properties</h2>

      <p>
        A group object contains the following properties:
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
            <td>id</td>
            <td>string</td>
            <td>Group's ID</td>
          </tr>
          <tr>
            <td>fullName</td>
            <td>string</td>
            <td>Group's full name</td>
          </tr>
          <tr>
            <td>login</td>
            <td>string</td>
            <td>Group's login</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>Group's description</td>
          </tr>
        </tbody>
      </table>

      <p>
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/interfaces/_propertyfieldgrouppicker_.ipropertyfieldgroup.html">
        View the complete custom field API documentation</a>
      </p>

      <h2>Return Values</h2>

      <p>
        If you are searching <strong>Security Groups</strong>, a returned group object will contain properties as followed:
      </p>

      <pre>
FullName : Everyone except external users<br/>
Description: <br/>
Login: TenantAllUsers<br/>
ID: c:0-.f|rolemanager|spo-grid-all-users/380cece3-b340-4257-8844-b1ed0f6f60b9<br/>
      </pre>

      <p>
        If you are searching <strong>SharePoint Groups</strong>, a returned group object will contain properties as followed:
      </p>

      <pre>
FullName : Excel Services Viewers<br/>
Description: Excel Services Viewers<br/>
Login: Excel Services Viewers<br/>
ID: 3<br/>
      </pre>

  </div>
)

export default PropertyFieldGroupPicker;
