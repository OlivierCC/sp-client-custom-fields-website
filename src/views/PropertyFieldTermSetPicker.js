import React from 'react';
import {
  Link
} from 'react-router-dom'
import Screenshot from '../images/PropertyFieldTermSetPicker.gif';

const PropertyFieldTermSetPicker = () => (
  <div>
    <h2>Term Set Picker</h2>

    <p>
      This component generates a Term Set picker (managed meta data set) property field in your client side web part for 
      the SharePoint Framework.
    </p>
    <p>
      <img src={Screenshot} width="606" alt="TermSet Picker"/>
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
import &#123; ISPTermSets &#125; from 'sp-client-custom-fields/lib/PropertyFieldTermSetPicker';<br/>
<br/>
export interface IMyWebPartProps &#123;<br/>
&nbsp;&nbsp;termSets: ISPTermSets;<br/>
&#125;
    </pre>
    <p>
      3. In you web part file (for example MyWebPart.ts), import the custom field:
    </p>
    <pre>
import &#123; <strong>PropertyFieldTermSetPicker</strong> &#125; from 'sp-client-custom-fields/lib/PropertyFieldTermSetPicker';
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>PropertyFieldTermSetPicker</strong>('termSets', &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'Select a term set',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;panelTitle: 'Select a Term Set',<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initialValues: this.properties.termSets,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allowMultipleSelections: true,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excludeSystemGroup: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayOnlyTermSetsAvailableForTagging: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled: false,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render: this.render.bind(this),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disableReactivePropertyChanges: this.disableReactivePropertyChanges,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties: this.properties,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: this.context,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onGetErrorMessage: null,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deferredValidationTime: 0,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'termSetPickerFieldId'<br/>
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
          <td>panelTitle</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet Picker Panel title.</td>
        </tr>
        <tr>
          <td>allowMultipleSelections</td>
          <td>no</td>
          <td>boolean</td>
          <td>Defines if the user can select only one or many term sets. Default value is false.</td>
        </tr>
        <tr>
          <td>initialValues</td>
          <td>no</td>
          <td>ISPTermSets</td>
          <td>Defines the selected by default term sets.</td>
        </tr>
        <tr>
          <td>excludeSystemGroup</td>
          <td>no</td>
          <td>boolean</td>
          <td>Indicator to define if the system Groups are exclude. Default is false.</td>
        </tr>
        <tr>
          <td>excludeOfflineTermStores</td>
          <td>no</td>
          <td>boolean</td>
          <td>Indicates if the offline term stores must be exclude. Default is false.</td>
        </tr>
        <tr>
          <td>displayOnlyTermSetsAvailableForTagging</td>
          <td>no</td>
          <td>boolean</td>
          <td>Restrict term sets that are available for tagging. Default is false.</td>
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
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/modules/_propertyfieldtermsetpicker_.html">
        View the complete custom field API documentation</a>
      </p>

    <h2>ISPTermSet Properties</h2>

    <p>ISPTermSets is an array of ISPTermSet objects. A ISPTermSet is an object with the following properties:</p>

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
          <td>Name</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet's name.</td>
        </tr>
        <tr>
          <td>Guid</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet unique ID.</td>
        </tr>
        <tr>
          <td>Identity</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet complete unique ID.</td>
        </tr>
        <tr>
          <td>CustomSortOrder</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet custom sort order (if defined).</td>
        </tr>
        <tr>
          <td>IsAvailableForTagging</td>
          <td>yes</td>
          <td>boolean</td>
          <td>Indicates if the TermSet is available for tagging.</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet owner.</td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet contact.</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>yes</td>
          <td>string</td>
          <td>TermSet description.</td>
        </tr>
        <tr>
          <td>IsOpenForTermCreation</td>
          <td>yes</td>
          <td>boolean</td>
          <td>Indicates if the termset can be used for term creation.</td>
        </tr>
        <tr>
          <td>TermStoreGuid</td>
          <td>yes</td>
          <td>string</td>
          <td>Guid (unique ID) of the parent term store (also know as SSPID).</td>
        </tr>
      </tbody>
    </table>

    <p>
        <a href="https://oliviercc.github.io/sp-client-custom-fields/docs/interfaces/_propertyfieldtermsetpicker_.isptermset.html">
        View the complete custom field API documentation</a>
      </p>

    <h2>How to retrieve Terms in a TermSet?</h2>

    <p>With this custom field, you can select one or many TermSets. In your WebPart, you want probably list all the available terms in 
      the selected term sets. To do that, you can use (for example) the&nbsp;
      <a target="_blank" href="https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.taxonomy.webservices.taxonomyclientservice.getchildtermsintermset.aspx">
      GetChildTermsInTermSet available in the TaxonomyClient web service</a>.
      This web service is availble on every SharePoint site at the URL '/_vti_bin/taxonomyclientservice.asmx'. You can
      view a JavaScript sample with this web service in the following&nbsp;
      <a href="http://www.n8d.at/blog/retrieve-managed-metadata-using-javascript-and-spservices/" target="_blank">blog post</a>.
    </p>


  </div>
)

export default PropertyFieldTermSetPicker;
