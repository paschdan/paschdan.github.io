<template>
    <div class="column items-center">
        <div class="col">
            <!-- Copy the following canvas and components in your page, changing their size / texts and other values if needed  -->
            <canvas id="viewerCanvas" class="viewerComponent" width="800" height="600"
                    style="background-color: #CCCCCC; border: 1px solid gray; outline:none" tabIndex="1"></canvas>
            <div id="viewerProgressDiv"
                 style="width: 400px; position: relative; top: -350px; left: 200px; background-color: rgba(128, 128, 128, 0.7); padding: 20px; border-radius: 25px">
                <progress id="viewerProgress" class="viewerComponent" value="0" max="200"
                          style="width: 400px"></progress>
                <label id="viewerProgressLabel" class="viewerComponent"
                       style="margin-top: 2px; display: block; margin-left: 10px"></label>
            </div>
            <div style="margin-top: -60px">
                <input id="aerialView" class="viewerComponent" name="cameraType" type="radio"
                       style="visibility: hidden;"/>
                <label class="viewerComponent" for="aerialView" style="visibility: hidden;">Aerial view</label>
                <input id="virtualVisit" class="viewerComponent" name="cameraType" type="radio"
                       style="visibility: hidden;"/>
                <label class="viewerComponent" for="virtualVisit" style="visibility: hidden;">Virtual visit</label>
                <select id="levelsAndCameras" class="viewerComponent" style="visibility: hidden;"></select>
            </div>
        </div>
        <div>
            <a href="http://www.sweethome3d.com">Sweet Home 3D</a> HTML5 Viewer / Version 1.4 - Distributed under GNU
            General Public License
        </div>
    </div>
</template>

<script>
  // import * as big from '../../public/lib/big.min.js'

  export default {
    data () {
      return {
        ready: false,
      }
    },
    mounted () {
      const createJs = (path) => {
        const js = document.createElement('script')
        js.setAttribute('src', path)
        document.head.appendChild(js)
      }
      createJs('/lib/big.min.js')
      createJs('/lib/gl-matrix-min.js')
      createJs('/lib/jszip.min.js')
      createJs('/lib/core.min.js')
      createJs('/lib/geom.min.js')
      createJs('/lib/stroke.min.js')
      createJs('/lib/batik-svgpathparser.min.js')
      createJs('/lib/jsXmlSaxParser.min.js')
      createJs('/lib/triangulator.min.js')
      createJs('/lib/viewmodel.min.js')
      createJs('/lib/viewhome.min.js')
      const run3dModeling = () => {

        var homeUrl = 'house.zip'
        var onerror = function (err) {
          if (err == 'No WebGL') {
            alert('Sorry, your browser doesn\'t support WebGL.')
          } else {
            console.err(err.stack)
          }
        }
        var onprogression = function (part, info, percentage) {
          var progress = document.getElementById('viewerProgress')
          if (part === HomeRecorder.READING_HOME) {
            // Home loading is finished
            progress.value = percentage * 100
            info = info.substring(info.lastIndexOf('/') + 1)
          } else if (part === Node3D.READING_MODEL) {
            // Models loading is finished
            progress.value = 100 + percentage * 100
            if (percentage === 1) {
              document.getElementById('viewerProgressDiv').style.visibility = 'hidden'
            }
          }

          document.getElementById('viewerProgressLabel').innerHTML =
            (percentage ? Math.floor(percentage * 100) + '% ' : '') + part + ' ' + info
        }

        // Display home in canvas 3D
        // Mouse and keyboard navigation explained at
        // http://sweethome3d.cvs.sf.net/viewvc/sweethome3d/SweetHome3D/src/com/eteks/sweethome3d/viewcontroller/resources/help/en/editing3DView.html
        // You may also switch between aerial view and virtual visit with the space bar
        // For browser compatibility, see http://caniuse.com/webgl
        viewHome('viewerCanvas',    // Id of the canvas
          homeUrl,           // URL or relative URL of the home to display
          onerror,           // Callback called in case of error
          onprogression,     // Callback called while loading
          {
            roundsPerMinute: 0,                    // Rotation speed of the animation launched once home is loaded in rounds per minute, no animation if missing or equal to 0
            navigationPanel: 'none',               // Displayed navigation arrows, "none" or "default" for default one or an HTML string containing elements with data-simulated-key
                                                   // attribute set "UP", "DOWN", "LEFT", "RIGHT"... to replace the default navigation panel, "none" if missing
            aerialViewButtonId: 'aerialView',      // Id of the aerial view radio button, radio buttons hidden if missing
            virtualVisitButtonId: 'virtualVisit',  // Id of the aerial view radio button, radio buttons hidden if missing
            levelsAndCamerasListId: 'levelsAndCameras',          // Id of the levels and cameras select component, hidden if missing
            /* level: "Roof", */                                    // Uncomment to select the displayed level, default level if missing */
            /* selectableLevels: ["Ground floor", "Roof"], */       // Uncomment to choose the list of displayed levels, no select component if empty array */
            /* camera: "Exterior view", */                          // Uncomment to select a camera, default camera if missing */
            /* selectableCameras: ["Exterior view", "Kitchen"], */  // Uncomment to choose the list of displayed cameras, no camera if missing */
            activateCameraSwitchKey: true,                        // Switch between top view / virtual visit with space bar if not false or missing */
          })
      }

      const checkReady = () => {
        console.log('checking ready state')
        if (window.viewHome) {
          return run3dModeling()
        } else {
          setTimeout(function () { checkReady()}, 100)
        }
      }

      checkReady()

    },
  }
</script>
