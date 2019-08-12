# Splunk-Dashboard-Modal
Have you ever needed to explain a Splunk dashboard panel in more detail, but didn't want to clutter your panels? This repo provides several examples for how you can add modal(s) to your Splunk dashboard using simple inline HTML, CSS and JavaScript. The modals can be edited to include overviews, summaries, tables, etc, all while keeping your dashboard UI clean. Install the app directly and use the code as a reference or use the simple xml and modal.js individually and customize to your liking.

![Splunk Dashboard Modal](https://github.com/BrewinBeerz/Splunk-Dashboard-Modal/blob/master/splunk_modal.gif)
## Files:

1. **dashboard-example.xml** -
    Simple xml dashboard including inline HTML & CSS to support three modals.

1. **modal-example.spl** -
    Packaged Splunk app including all files (install instructions below).

1. **modal.js** -
    JavaScript file containing actions for modals. Please note the default configuration supports three modals. This can be edited to support more or less as needed.

## How to use:

### Option 1: Install example Splunk Modal App as reference.

1. Download modal-example.spl

2. Install app by navigating to Splunk Home > Manage Apps > Install App from File > Upload modal-example.spl

### Option #2: Add HTML, CSS and JS to existing Splunk Dashboard

1. Add inline HTML and CSS to your Splunk Dashboard Panel.

    ```
    <panel>
        <html>
            <a id="btn1" class="btn btn-info">i</a><font class="newTitle"> Panel #1</font>
        </html>
        <html>
            <div id="modal1" class="modal">
                <div class="modal-content">
                <span class="close"></span>
                <p>Panel #1 - Information</p>
            </div>
        </div>
        <style>
            .newTitle {
                font-size: 18pt;
                font-weight: bold;
                vertical-align: middle;
            }
            
            .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                padding-top: 100px; /* Location of the box */
                left: 275.5px;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
            
            /* Modal Content */
            .modal-content {
                background-color: #fefefe;
                margin: auto;
                padding: 20px;
                border: 1px solid #888;
                width: 40%;
            }
            
            /* The Close Button */
            .close {
                color: #aaaaaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }
            
            .close:hover,
            .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }
        </style>
        </html>
        <single>
            <search>
                <query>| makeresults | eval Thing = 300 | fields Thing</query>
                <earliest>-24h@h</earliest>
                <latest>now</latest>
            </search>
            <option name="drilldown">none</option>
            <option name="refresh.display">progressbar</option>
        </single>
    </panel>
    ```

    Please note: HTML IDs for the modal, button and span need to match those referenced in the JavaScript variables and functions.

2. Add JavaScript file to Splunk App.

    Manage Apps > Edit Properties > Upload modal.js

3. Add reference to script in simple xml.

    ```
    <dashboard script="modal.js">
        <label>Dashboard Title</label> 
        ...
    </dashboard>
    ```

4. Edit modal button, content and other settings to your liking.

4. Save dashboard and refresh.

