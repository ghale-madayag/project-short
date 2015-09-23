<!DOCTYPE html>
<html>
<head>
	<title>Short Customizer</title>
	<!--Import materialize.css-->
 	<link type="text/css" rel="stylesheet" href="bower_components/Materialize/css/materialize.min.css"  media="screen,projection"/>
 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
 	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 	<link rel="stylesheet" href="bower_components/Materialize/css/custom.css">
 	<link rel="stylesheet" href="bower_components/Materialize/css/colpick.css" type="text/css"/>

  	<!--Let browser know website is optimized for mobile-->
  	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
	<div class="container">
        <div class="row">
	        <div class="col s8">
		        <div class="card-panel">
		        	<canvas id="mainCanvas" width="600" height="530"></canvas>
		        </div>
	        </div>
	        <div class="col s4">
		        <div class="card-panel">
				    <ul class="tabs">
				        <li class="tab col s3 waves-effect">
				        	<span class="blue-text text-darken-2"><a class="active" href="#themes-panel"><span class="grey-text text-darken-1">Themes</span></a>
				        </li>
				        <li class="tab col s3 waves-effect">
				        	<span class="blue-text text-darken-2"><a  href="#text-panel"><span class="grey-text text-darken-1">Text</span></a>
				        </li>
				        <li class="tab col s3 waves-effect">
				        	<a  href="#tassel-panel"><span class="grey-text text-darken-1">Tassel</span></a>
				        </li>
				    </ul>
				    <div id="themes-panel">
				    	<!--themes-->
				    	<div class="row">
				    		<div class="input-field col s4">
				    			<label for="brandType">Brand Type</label>
					    	</div>
					    	<div class="input-field col s8">
					    		<select id="brandType">
					    			<option value="" disabled selected>Choose Brand</option>
							    	<option value="0">Singpatong</option>
							    	<option value="1">Twins</option>
							    	<option value="2">Blank</option>
					    		</select>
					    	</div>
				    	</div>
				    	<div class="row" style="margin-top: -20px;">
				    		<div class="input-field col s3">
				    			<label for="wstColor">Waist</label>
				    		</div>
				    		<div class="input-field col s9">
				    			<ul class="color-tool">
									<li class="lcolor-1" data-wcolor="#F34235"></li>
									<li class="lcolor-2" data-wcolor="#E81D62"></li>
									<li class="lcolor-3" data-wcolor="#9B26AF"></li>
									<li class="lcolor-4" data-wcolor="#6639B6"></li>
									<li class="lcolor-5" data-wcolor="#3E50B4"></li>
									<li class="lcolor-6" data-wcolor="#2095F2"></li>
									<li class="lcolor-7" data-wcolor="#02A8F3"></li>
									<li class="lcolor-8" data-wcolor="#00BBD3"></li>
									<li class="lcolor-9" data-wcolor="#009587"></li>
									<li class="lcolor-10" data-wcolor="#4BAE4F"></li>
									<li class="lcolor-11" data-wcolor="#8AC249"></li>
									<li class="lcolor-12" data-wcolor="#CCDB38"></li>
									<li class="lcolor-13" data-wcolor="#FFEA3A"></li>
									<li class="lcolor-14" data-wcolor="#E6A722"></li>
									<li class="lcolor-15" data-wcolor="#FF9700"></li>
									<li class="lcolor-16" data-wcolor="#FF5621"></li>
									<li class="lcolor-17" data-wcolor="#9D9D9D"></li>
									<li class="lcolor-18" data-wcolor="#5F7C8A"></li>
									<li class="lcolor-19" data-wcolor="#785447"></li>
									<li class="lcolor-20" data-wcolor="#000000"></li>
									<li class="lcolor-21" data-wcolor="#ECECEC "></li>
									<li class="lcolor-22" data-wcolor="#FFFFFF "></li>
								</ul>
				    		</div>
				    	</div>
				    	<div class="row">
				    		<div class="input-field col s3">
				    			<label for="legColor">Legs</label>
				    		</div>
				    		<div class="input-field col s9">
				    			<ul class="color-tool">
									<li class="lcolor-1" data-lcolor="#F34235"></li>
									<li class="lcolor-2" data-lcolor="#E81D62"></li>
									<li class="lcolor-3" data-lcolor="#9B26AF"></li>
									<li class="lcolor-4" data-lcolor="#6639B6"></li>
									<li class="lcolor-5" data-lcolor="#3E50B4"></li>
									<li class="lcolor-6" data-lcolor="#2095F2"></li>
									<li class="lcolor-7" data-lcolor="#02A8F3"></li>
									<li class="lcolor-8" data-lcolor="#00BBD3"></li>
									<li class="lcolor-9" data-lcolor="#009587"></li>
									<li class="lcolor-10" data-lcolor="#4BAE4F"></li>
									<li class="lcolor-11" data-lcolor="#8AC249"></li>
									<li class="lcolor-12" data-lcolor="#CCDB38"></li>
									<li class="lcolor-13" data-lcolor="#FFEA3A"></li>
									<li class="lcolor-14" data-lcolor="#E6A722"></li>
									<li class="lcolor-15" data-lcolor="#FF9700"></li>
									<li class="lcolor-16" data-lcolor="#FF5621"></li>
									<li class="lcolor-17" data-lcolor="#9D9D9D"></li>
									<li class="lcolor-18" data-lcolor="#5F7C8A"></li>
									<li class="lcolor-19" data-lcolor="#785447"></li>
									<li class="lcolor-20" data-lcolor="#000000"></li>
									<li class="lcolor-21" data-lcolor="#ECECEC "></li>
									<li class="lcolor-22" data-lcolor="#FFFFFF "></li>
								</ul>
				    		</div>
				    	</div>
				    	<div class="row">
				    		<div class="col s12">
				    			<div class="theme-list themes">
									<ul>
										<li><a href="javascript:void(0);" data-themes="1"><img src="img/themes/theme-1-1.png" alt="img01"/></a></li>
										<li><a href="javascript:void(0);" data-themes="2"><img src="img/themes/theme-2-2.png" alt="img02"/></a></li>
										<li><a href="javascript:void(0);" data-themes="3"><img src="img/themes/theme-3-3.png" alt="img03"/></a></li>
										<li><a href="javascript:void(0);" data-themes="4"><img src="img/themes/theme-4-4.png" alt="img04"/></a></li>
										<li><a href="javascript:void(0);" data-themes="5"><img src="img/themes/theme-5-5.png" alt="img05"/></a></li>
										<li><a href="javascript:void(0);" data-themes="6"><img src="img/themes/theme-6-6.png" alt="img06"/></a></li>
										<li><a href="javascript:void(0);" data-themes="7"><img src="img/themes/theme-7-7.png" alt="img07"/></a></li>
										<li><a href="javascript:void(0);" data-themes="8"><img src="img/themes/theme-8-8.png" alt="img08"/></a></li>
										<li><a href="javascript:void(0);" data-themes="9"><img src="img/themes/theme-9-9.png" alt="img09"/></a></li>
										<li><a href="javascript:void(0);" data-themes="10"><img src="img/themes/theme-10-10.png" alt="img10"/></a></li>
										<li><a href="javascript:void(0);" data-themes="11"><img src="img/themes/theme-11-11.png" alt="img11"/></a></li>
										<li><a href="javascript:void(0);" data-themes="12"><img src="img/themes/theme-12-12.png" alt="img12"/></a></li>
										<li><a href="javascript:void(0);" data-themes="13"><img src="img/themes/theme-13-13.png" alt="img13"/></a></li>
										<li><a href="javascript:void(0);" data-themes="14"><img src="img/themes/theme-14-14.png" alt="img14"/></a></li>
										<li><a href="javascript:void(0);" data-themes="15"><img src="img/themes/theme-15-15.png" alt="img15"/></a></li>
										<li><a href="javascript:void(0);" data-themes="16"><img src="img/themes/theme-16-16.png" alt="img16"/></a></li>
										<li><a href="javascript:void(0);" data-themes="17"><img src="img/themes/theme-17-17.png" alt="img17"/></a></li>
										<li><a href="javascript:void(0);" data-themes="18"><img src="img/themes/theme-18-18.png" alt="img18"/></a></li>
										<li><a href="javascript:void(0);" data-themes="19"><img src="img/themes/theme-19-19.png" alt="img19"/></a></li>
										<li><a href="javascript:void(0);" data-themes="20"><img src="img/themes/theme-20-20.png" alt="img20"/></a></li>
									</ul>
								</div>
				    		</div>
				    	</div>
				    </div>
				    <div id="text-panel">
				    	<!--text-->
				    	<div class="row">
				    		<div class="input-field col s12">
					          	<input id="txt-area" type="text">
					          	<label for="txt-area"><span class="grey-text text-lighten-1">Type your text here..</span></label>

					        </div>
					       
				    		<div class="input-field col s8" id="opt-ff">
						         <select id="font-family-selector">
							      	<option value="Arial">Arial</span></option>
						    		<option value="Arial Black">Arial Black</option>
						    		<option value="Audiowide-Regular">Audiowide-Regular</option>
						    		<option value="Avant Garde">Avant Garde</option>
						    		<option value="Backslash">Backslash</option>
						    		<option value="Battlestar">Battlestar</option>
						    		<option value="BLADRMF_">BLADRMF_</option>
						    		<option value="blaster">blaster</option>
						    		<option value="Book_Akhanake">Book_Akhanake</option>
						    		<option value="Book_SabuyDee">Book_SabuyDee</option>
						    		<option value="Bookman">Bookman</option>
						    		<option value="Circular">Circular</option>
						    		<option value="collegiateHeavyOutline">collegiateHeavyOutline</option>
						    		<option value="Comic Sans MS">Comic Sans MS</option>
						    		<option value="Courier New">Courier New</option>
						    		<option value="D3Euronism">D3Euronism</option>
						    		<option value="EarthquakeMF">EarthquakeMF</option>
						    		<option value="FargoFaroNF">FargoFaroNF</option>
						    		<option value="Freshman">Freshman</option>
						    		<option value="Garuda">Garuda</option>
						    		<option value="Garamond">Garamond</option>
						    		<option value="Georgia">Georgia</option>
						    		<option value="Helvetica">Helvetica</option>
						    		<option value="HFF Thai Dye">HFF Thai Dye</option>
						    		<option value="Impact">Impact</option>
						    		<option value="JerseyLetters">JerseyLetters</option>
						    		<option value="Lucida Console">Lucida Console</option>
						    		<option value="OwahTaguSiamNF">OwahTaguSiamNF</option>
						    		<option value="Palatino">Palatino</option>
						    		<option value="Helvetica">Helvetica</option>
						    		<option value="TaiHeritagePro">TaiHeritagePro</option>
						    		<option value="Tahoma">Tahoma</option>
						    		<option value="SR FahtalaiJone NP">SR FahtalaiJone NP</option>
						    		<option value="SUPER_CHARGERS">SUPER_CHARGERS</option>
						    		<option value="Times New Roman">Times New Roman</option>
						    		<option value="torsilp-wadkhen">torsilp-wadkhen</option>
						    		<option value="Trebuchet MS">Trebuchet MS</option>
						    		<option value="UNIVERSAL-COLLEGE-draft">UNIVERSAL-COLLEGE-draft</option>
						    		<option value="Verdana">Verdana</option>
						    		<option value="wlm_carton">wlm_carton</option>
							    </select>
							    <label>Font Family</label>
					        </div>
					        <div class="input-field col s4">
						         <select id="font-size-selector">
							      	<option value="12">12</option>
						    		<option value="14">14</option>
						    		<option value="18">18</option>
						    		<option value="21">21</option>
						    		<option value="24">24</option>
						    		<option value="36">36</option>
						    		<option value="48">48</option>
						    		<option value="60">60</option>
	    							<option value="72">72</option>
							    </select>
							    <label>Font Size</label>
					        </div>
					    </div>
					    <div class="row" style="margin-top: -22px;">
					        <div class="input-field col s2">
					        	<button id="style-bold" class="waves-effect"><i class="fa fa-bold tooltipped" data-position="top" data-delay="50" data-tooltip="Bold"></i></button>
					        </div>
				         	<div class="input-field col s2">
				         		<button id="style-italic" class="waves-effect"><i class="fa fa-italic tooltipped" data-position="top" data-delay="50" data-tooltip="Italic"></i></button>
				         	</div>
					         <div class="input-field col s2">
					         	<div class="text-color-box tooltipped" data-position="top" data-delay="50" data-tooltip="Font Color"></div>
					         </div>
					         <div class="input-field col s2">
					         	<button id="translate" class="waves-effect act-translate-thai tooltipped" data-position="top" data-delay="50" data-tooltip="Change language"></button>
					         </div>
				    	</div>
				    	<div class="row" style="margin-top: -20px; margin-bottom:40px;">
				    		 <div class="input-field col s3">
				    		 	<label for="txt-border">Border</label>
				    		 </div>
				    		 <div class="input-field col s8">
				    		 	<div class="switch">
								    <label>
								      <input type="checkbox" id="txt-border">
								      <span class="lever"></span>
								    </label>
								</div>
				    		 </div>
				    	</div>
				    	<div id="togView" style="display:none;">
				    		<div class="row">
						    	<div class="input-field col s6">
					         		<label for="borderRng">Border Width</label>
					         	</div>
						        <div class="range-field col s6" style="margin-top: 20px;">
								      <input type="range" id="borderRng" min="0" max="6" />
						         </div>
						    </div>
						    <div class="row" style="margin-top: -40px;">
						         <div class="input-field col s6">
						         	<label for="borderColor">Border Color</label>
						         </div>
						         <div class="input-field col s4">
						         	<div class="border-color-box" id="borderColor"></div>
						         </div>
					    	</div>
				    	</div>
				    	<div class="row">
				    		<div class="col s12">
				    			<a class="btn-floating btn-large waves-effect waves-light blue" id="btnAddText" href="#modal1"><i class="material-icons">add</i></a>
				    			<div class="btnDisplay">
				    				<a class="btn-floating btn-large waves-effect waves-light green" id="btnUpText"><i class="material-icons">done</i></a>
				    				<a class="btn-floating btn-large waves-effect waves-light red" id="btnDelText"><i class="material-icons">delete</i></a>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				    <div id="tassel-panel">
				    	<!--tassel panel-->
				    	<div class="row" style="margin-top: -20px; margin-bottom:40px;">
				    		 <div class="input-field col s3">
				    		 	<label for="topTas">Top</label>
				    		 </div>
				    		 <div class="input-field col s4">
				    		 	<div class="switch">
								    <label>
								      <input type="checkbox" id="topTas">
								      <span class="lever"></span>
								    </label>
								</div>
				    		 </div>
					    		<div class="input-field col 4">
						    		<div id="togTasTop" style="display:none;">
						    			<div class="tasTop-color-box" id="topTasCol"></div>
						    		</div>
				    		 	</div>
				    	</div>
				    	<div class="row" style="margin-top: -20px; margin-bottom:40px;">
				    		 <div class="input-field col s3">
				    		 	<label for="sidTas">Side</label>
				    		 </div>
				    		 <div class="input-field col s4">
				    		 	<div class="switch">
								    <label>
								      <input type="checkbox" id="sidTas">
								      <span class="lever"></span>
								    </label>
								</div>
				    		 </div>
				    		 <div class="input-field col 4">
				    		 	<div id="togTasSid" style="display:none;">
				    		 		<div class="tasSid-color-box" id="sidTasCol"></div>
				    		 	</div>
				    		 </div>
				    	</div>
				    	<div class="row" style="margin-top: -20px; margin-bottom:40px;">
				    		 <div class="input-field col s3">
				    		 	<label for="botTas">Bottom</label>
				    		 </div>
				    		 <div class="input-field col s4">
				    		 	<div class="switch">
								    <label>
								      <input type="checkbox" id="botTas">
								      <span class="lever"></span>
								    </label>
								</div>
				    		 </div>
				    		 <div class="input-field col 4">
				    		 	<div id="togTasBot" style="display:none;">
				    		 		<div class="tasBot-color-box" id="botTasCol"></div>
				    		 	</div>
				    		 </div>
				    	</div>
			    	<div class="row">
			    		<div class="input-field col s3">
			    			<label for="legColor">Color</label>
			    		</div>
			    		<div class="input-field col s9">
			    			<ul class="tas-color-tool">
								<li class="lcolor-1" data-tcolor="#F34235"></li>
								<li class="lcolor-2" data-tcolor="#E81D62"></li>
								<li class="lcolor-3" data-tcolor="#9B26AF"></li>
								<li class="lcolor-4" data-tcolor="#6639B6"></li>
								<li class="lcolor-5" data-tcolor="#3E50B4"></li>
								<li class="lcolor-6" data-tcolor="#2095F2"></li>
								<li class="lcolor-7" data-tcolor="#02A8F3"></li>
								<li class="lcolor-8" data-tcolor="#00BBD3"></li>
								<li class="lcolor-9" data-tcolor="#009587"></li>
								<li class="lcolor-10" data-tcolor="#4BAE4F"></li>
								<li class="lcolor-11" data-tcolor="#8AC249"></li>
								<li class="lcolor-12" data-tcolor="#CCDB38"></li>
								<li class="lcolor-13" data-tcolor="#FFEA3A"></li>
								<li class="lcolor-14" data-tcolor="#E6A722"></li>
								<li class="lcolor-15" data-tcolor="#FF9700"></li>
								<li class="lcolor-16" data-tcolor="#FF5621"></li>
								<li class="lcolor-17" data-tcolor="#9D9D9D"></li>
								<li class="lcolor-18" data-tcolor="#5F7C8A"></li>
								<li class="lcolor-19" data-tcolor="#785447"></li>
								<li class="lcolor-20" data-tcolor="#000000"></li>
								<li class="lcolor-21" data-tcolor="#ECECEC "></li>
								<li class="lcolor-22" data-tcolor="#FFFFFF "></li>
							</ul>
			    		</div>
				    </div>
				    </div>
		    	</div>
	       <!--- hidden -->
	       	<input type="checkbox" id="on-bold" hidden="true">
	       	<input type="checkbox" id="on-italic" hidden="true">
	       	<input type="checkbox" id="on-translate" hidden="true">
	       	<input type="text" id="textColor" value="#000000" hidden="true">
	       	<input type="text" id="textBorderColor" value="#000000" hidden="true">
	       	<input type="hidden" id="txtTop">
	    	<input type="hidden" id="txtLeft">
	    	<!-- brand type -->
	    	<img src="img/brand-0.png" id="brandImg0" hidden="true">
			<img src="img/brand-1.png" id="brandImg1" hidden="true">
			<!--tassel Color-->
			<input type="text" id="tasTopColor" value="#000000" hidden="true">
			<input type="text" id="tasSidColor" value="#000000" hidden="true">
			<input type="text" id="tasBotColor" value="#000000" hidden="true">
			<!-- themes-->
			<img src="img/theme-based/theme-based-1.png" hidden="true" id="theme-1">
			<img src="img/theme-based/theme-based-2.png" hidden="true" id="theme-2">
			<img src="img/theme-based/theme-based-3.png" hidden="true" id="theme-3">
			<img src="img/theme-based/theme-based-4.png" hidden="true" id="theme-4">
			<img src="img/theme-based/theme-based-5.png" hidden="true" id="theme-5">
			<img src="img/theme-based/theme-based-6.png" hidden="true" id="theme-6">
			<img src="img/theme-based/theme-based-7.png" hidden="true" id="theme-7">
			<img src="img/theme-based/theme-based-8.png" hidden="true" id="theme-8">
	     	<img src="img/theme-based/theme-based-9.png" hidden="true" id="theme-9">
	     	<img src="img/theme-based/theme-based-10.png" hidden="true" id="theme-10">
	     	<img src="img/theme-based/theme-based-11.png" hidden="true" id="theme-11">
	     	<img src="img/theme-based/theme-based-12.png" hidden="true" id="theme-12">
	     	<img src="img/theme-based/theme-based-13.png" hidden="true" id="theme-13">
	     	<img src="img/theme-based/theme-based-14.png" hidden="true" id="theme-14">
	     	<img src="img/theme-based/theme-based-15.png" hidden="true" id="theme-15">
	     	<img src="img/theme-based/theme-based-16.png" hidden="true" id="theme-16">
	     	<img src="img/theme-based/theme-based-17.png" hidden="true" id="theme-17">
	     	<img src="img/theme-based/theme-based-18.png" hidden="true" id="theme-18">
	     	<img src="img/theme-based/theme-based-19.png" hidden="true" id="theme-19">
	     	<img src="img/theme-based/theme-based-20.png" hidden="true" id="theme-20">


	       <!-- Modal Structure -->
		 	 <div id="modal1" class="modal modal-fixed-footer">
		   	 	<div class="modal-content">
		     	 	<h5><span class="red-text text-lighten-1">Error</span></h5>
		      		<p>Please add your text first!</p>
		   		</div>
			    <div class="modal-footer">
			      	<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
			    </div>
		  	</div>

	    </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  	<script type="text/javascript" src="bower_components/Materialize/js/materialize.min.js"></script>
  	<script type="text/javascript" src="js/functions.js"></script>
  	<script type="text/javascript" src="bower_components/Materialize/js/colpick.js"></script>
  	<script src="fabric/dist/fabric.min.js"></script>
</body>
</html>