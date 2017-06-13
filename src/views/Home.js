import React from 'react';
import Logo from '../images/Logo.png';

const Home = () => (
  <div>
    <h2><span>The most comprehensive</span> and complete property pane custom fields library for the SharePoint Framework (SPFx)</h2>
            <div className="clr"></div>
            <p>
              <img src="https://img.shields.io/badge/latest%20release-v1.3.5-blue.svg" className="noborder" alt="release"/>&nbsp;
              <img src="https://img.shields.io/badge/npm-sp--client--custom--fields-red.svg" className="noborder" alt="npm"/>&nbsp;
              <img src="https://img.shields.io/badge/status-stable-green.svg" className="noborder" alt="status"/>&nbsp;
              <img src="https://img.shields.io/badge/license-MIT-yellow.svg" className="noborder" alt="mit"/>
            </p>
            <p>
              If you are a SharePoint Developer, you probably love to develop for SharePoint Framework (aka SPFx). 
              This new Framework offers a new experience of development based on client-side technologies. 
              With the SPFx, you can for example develop Web parts. <strong>When you develop Web parts, you may need to customize the 
              editing experience</strong>. For example to offer the user set up dates, choose a color, etc. 
              <strong>Then the sp-client-custom-fields library is made for you!</strong>
            </p>
            <p>
              The <strong>sp-client-custom-fields</strong> is an open source library which allows you to use pre-built custom property 
              pane fields. These components are very simple to install and use in your projects and your Web parts.
            </p>
            <p>
              This lib is available in more than <strong>20 languages</strong> as: English, French, Arabic, German, Chinese, Danish, Spanish, Finnish, Hindi, Italian, 
              Japanese, Norwegian, Dutch, Portuguese, Russian, Swedish, Thai, Hungarian, Greek, Turkish.
            </p>
            <h2><span>How to install</span> this library</h2>
            <p>
              To install this library is your project, open a command line and execute this command in your WebPart's folder:
            </p>
            <pre>
npm i --save sp-client-custom-fields
            </pre>
            <p>
              Open your file <strong>'config/config.json'</strong>, and add the following lines in the <strong>externals</strong>&nbsp;
              and in the <strong>localizedResources</strong> sections:
            </p>
            <pre>
"externals": &#123;<br/>
&nbsp;&nbsp;  "sp-client-custom-fields": "node_modules/sp-client-custom-fields/dist/sp-client-custom-fields.bundle.js"<br/>
&#125;<br/>
"localizedResources": &#123;<br/>
&nbsp;&nbsp;  "sp-client-custom-fields/strings": "../node_modules/sp-client-custom-fields/lib/loc/&#123;locale&#125;.js"<br/>
&#125;
            </pre>
            <p>Execute gulp in the command line</p>
            <pre>
gulp serve
            </pre>
            <p>
              <strong>You are now ready to use a custom property field in your web part!</strong>
              It's really easy to add a custom property field in your project, you can read any property 
              documentation on the left to view how to do that.
            </p>
            <p>
              <img src={Logo} width="600" alt="Logo" />
            </p>
            <h2>Minimal Sample Kit</h2>
            <p>
              You can test this kit with a minimal SharePoint Framework Web Part, available 
              on Github at the following address: &nbsp;
              <a href="https://github.com/OlivierCC/sp-client-custom-fields-sample" target="_blank">https://github.com/OlivierCC/sp-client-custom-fields-sample</a>
            </p>
            <h2>See it in action</h2>
            <p>
              This library is used by many projects of webparts for SharePoint Framework.
              If you want to see some Web Parts that use our components, we recommend the open source project called &nbsp;
              <a href="https://github.com/OlivierCC/spfx-40-fantastics" target="_blank">"SPFx Fantastic 40"</a>. This project uses this lib to enhance the Web Parts editing experience.
            </p>
  </div>
)

export default Home;
