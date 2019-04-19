(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"],{

/***/ "./src/app/onboarding/onboarding-details/onboarding-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-details/onboarding-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-margin {\r\n    margin:  0;\r\n    max-width: 100%;\r\n    padding: 0;\r\n}\r\n.color-red {\r\n    color:red !important\r\n}\r\n.left-error-style {\r\n    left: 23% !important;\r\n}\r\n.category-style {\r\n    margin-top: 20px; \r\n    margin-bottom: 0px;\r\n}\r\n.error-style {\r\n    position: absolute;\r\n    left: 25%;\r\n    top: -45%;\r\n    max-height:3px;\r\n    margin-top: -5%;\r\n}\r\n.bottom-warning {\r\n    bottom: 40px !important;\r\n    position: relative;\r\n    left: 40px;\r\n}\r\n.bottom-left-space {\r\n    padding-left:3em;\r\n    color: white;\r\n    margin-bottom: 20px;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    width: 20px !important; /*Desired width*/\r\n    height: 20px !important; /*Desired height*/\r\n}\r\n.space{\r\n    height: 20px !important;\r\n    max-height: 20px !important;\r\n}\r\n.page-content {\r\n\twidth: 100%;\r\n\tmargin:  0 auto;\r\n\tbackground: #75e2e9;\r\n\tdisplay: flex;\r\n\tdisplay: -webkit-flex;\r\n\tjustify-content: center;\r\n\t-o-justify-content: center;\r\n\t-ms-justify-content: center;\r\n\t-moz-justify-content: center;\r\n\t-webkit-justify-content: center;\r\n\talign-items: center;\r\n\t-o-align-items: center;\r\n\t-ms-align-items: center;\r\n\t-moz-align-items: center;\r\n\t-webkit-align-items: center;\r\n    background-image: linear-gradient( 136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%) !important;\r\n}\r\n.form-v10-content  {\r\n\tbackground: #fff;\r\n\twidth: 1100px;\r\n\tborder-radius: 10px;\r\n\t-o-border-radius: 10px;\r\n\t-ms-border-radius: 10px;\r\n\t-moz-border-radius: 10px;\r\n\t-webkit-border-radius: 10px;\r\n\tbox-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n\t-o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n\t-ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n\t-moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n\t-webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n\tmargin: 95px 0;\r\n\tposition: relative;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n.form-v10-content .form-detail {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tdisplay: -webkit-flex;\r\n}\r\n.form-v10-content .form-detail h2 {\r\n\tfont-weight: 500;\r\n\tfont-size: 25px;\r\n\tmargin-bottom: 34px;\r\n\tpadding: 33px 50px 0px 60px;\r\n}\r\n.form-v10-content .form-detail .form-left {\r\n\tborder-top-left-radius: 10px;\r\n\tborder-bottom-left-radius: 10px;\r\n\twidth: 100%;\r\n}\r\n.form-v10-content .form-detail .form-left h2 {\r\n\tcolor: #2271dd;\r\n}\r\n.form-v10-content .form-detail .form-right {\r\n\twidth: 100%;\r\n\tbackground: #4835d4;\r\n\tborder-top-right-radius: 10px;\r\n\tborder-bottom-right-radius: 10px;\r\n}\r\n.form-v10-content .form-detail .form-right h2 {\r\n\tcolor: #fff;\r\n}\r\n.form-v10-content .form-detail .form-group {\r\n\tdisplay: flex;\r\n\tdisplay: -webkit-flex;\r\n}\r\n.form-v10-content .form-detail .form-row {\r\n\tposition: relative;\r\n\tmargin-bottom: 24px;\r\n\tpadding-left: 60px;\r\n    padding-right: 50px;\r\n}\r\n.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1 {\r\n\twidth: 50%;\r\n\tpadding: 0 12px 0 60px;\r\n}\r\n.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2 {\r\n\twidth: 50%;\r\n\tpadding: 0 50px 0 12px;\r\n}\r\n.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3 {\r\n\twidth: 73%;\r\n\tpadding: 0 12px 0 60px;\r\n}\r\n.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 {\r\n\twidth: 50%;\r\n\tpadding: 0 50px 0 12px;\r\n}\r\n.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1 {\r\n\twidth: 50%;\r\n\tpadding: 0 12px 0 60px;\r\n}\r\n.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {\r\n\twidth: 100%;\r\n\tpadding: 0 50px 0 12px;\r\n}\r\n.form-v10-content .form-detail select,\r\n.form-v10-content .form-detail .text-class {\r\n\twidth: 100%;\r\n    padding: 11.5px 15px 15px 15px;\r\n    border: 1px solid transparent;\r\n    background: transparent;\r\n    appearance: unset;\r\n    -moz-appearance: unset;\r\n    -webkit-appearance: unset;\r\n    -o-appearance: unset;\r\n    -ms-appearance: unset;\r\n    outline: none;\r\n    -moz-outline: none;\r\n    -webkit-outline: none;\r\n    -o-outline: none;\r\n    -ms-outline: none;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 16px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n}\r\n.form-v10-content .form-detail select {\r\n\tbackground: 0 0;\r\n\tposition: relative;\r\n\tz-index: 9;\r\n\tcursor: pointer;\r\n}\r\n.form-v10-content .form-detail .form-left select {\r\n\tcolor: #666;\r\n}\r\n.form-v10-content .form-detail .form-right select {\r\n\tcolor: #f2f2f2;\r\n}\r\n.form-v10-content .form-detail .select-btn {\r\n\tz-index: 0;\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 11.5%;\r\n    font-size: 18px;\r\n}\r\n.form-v10-content .form-detail .form-left .select-btn {\r\n    color: #666;\r\n}\r\n.form-v10-content .form-detail .form-right .select-btn {\r\n    color: #f2f2f2;\r\n}\r\n.form-v10-content .form-detail .form-group .form-row.form-row-4 .select-btn {\r\n\ttop: 20%;\r\n\tright: 26%;\r\n}\r\n.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {\r\n\ttop: 20%;\r\n\tright: 19%;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class {\r\n\tcolor: #000;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class {\r\n\tcolor: #fff;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class,\r\n.form-v10-content .form-detail .form-left select {\r\n\tborder-bottom: 1px solid #ccc;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class:focus,\r\n.form-v10-content .form-detail .form-left select:focus {\r\n\tborder-bottom: 1px solid #999;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class,\r\n.form-v10-content .form-detail .form-right select {\r\n\tborder-bottom: 1px solid;\r\n\tborder-bottom-color: rgba(255, 255, 255, 0.3);\r\n}\r\n.form-v10-content .form-detail .form-right .text-class:focus,\r\n.form-v10-content .form-detail .form-right select:focus {\r\n\tborder-bottom: 1px solid #ccc;\r\n}\r\n.form-v10-content .form-detail .form-right select option {\r\n\tbackground: #4835d4;\r\n}\r\n.form-v10-content .form-detail .form-checkbox {\r\n\tmargin-top: 37px;\r\n\tpadding: 0 50px 0 60px;\r\n\tposition: relative;\r\n}\r\n.form-v10-content .form-detail .form-checkbox .text-class {\r\n\tposition: absolute;\r\n    opacity: 0;\r\n}\r\n.form-v10-content .form-detail .form-checkbox .checkmark {\r\n\tposition: absolute;\r\n    top: 1px;\r\n    left: 60px;\r\n    height: 15px;\r\n    width: 15px;\r\n    border: 1px solid #e5e5e5;\r\n    cursor: pointer;\r\n}\r\n.form-v10-content .form-detail .form-checkbox .checkmark::after {\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    left: 5px;\r\n   \ttop: 1px;\r\n    width: 3px;\r\n    height: 8px;\r\n    border: 1px solid #fff;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    display: none;\r\n}\r\n.form-v10-content .form-detail .form-checkbox .text-class:checked ~ .checkmark::after {\r\n    display: block;\r\n}\r\n.form-v10-content .form-detail .form-checkbox p {\r\n    margin-left: 34px;\r\n    color: #e5e5e5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.form-v10-content .form-detail .form-checkbox .text {\r\n\tfont-weight: 400;\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.form-v10-content .form-detail .form-right .form-row-last {\r\n    padding-left: 60px;\r\n    margin: 44px 0 10px;\r\n}\r\n.form-v10-content .form-detail .form-right .onboard {\r\n\tbackground: #fff;\r\n\tborder-radius: 25px;\r\n\t-o-border-radius: 25px;\r\n\t-ms-border-radius: 25px;\r\n\t-moz-border-radius: 25px;\r\n\t-webkit-border-radius: 25px;\r\n\tbox-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);\r\n\t-o-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);\r\n\t-ms-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);\r\n\t-moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);\r\n\t-webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);\r\n\twidth: 180px;\r\n\tborder: none;\r\n\tmargin: 6px 0 50px 0px;\r\n\tcursor: pointer;\r\n\tcolor: #333;\r\n\tfont-weight: 700;\r\n\tfont-size: 15px;\r\n}\r\n.form-v10-content .form-detail .form-right .onboard:hover {\r\n\tbackground: #ccc;\r\n}\r\n.form-v10-content .form-detail .form-right .form-row-last .text-class {\r\n\tpadding: 12.5px;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class::-moz-placeholder { /* Firefox 19+ */\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class:-ms-input-placeholder { /* IE 10+ */\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-left .text-class:-moz-placeholder { /* Firefox 18- */\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #f2f2f2;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class::-moz-placeholder { /* Firefox 19+ */\r\n  color: #f2f2f2;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class:-ms-input-placeholder { /* IE 10+ */\r\n  color: #f2f2f2;\r\n  font-size: 16px;\r\n}\r\n.form-v10-content .form-detail .form-right .text-class:-moz-placeholder { /* Firefox 18- */\r\n  color: #f2f2f2;\r\n  font-size: 16px;\r\n}\r\n/* Responsive */\r\n@media screen and (max-width: 1199px) {\r\n\t.form-v10-content {\r\n\t\tmargin:  95px 20px;\r\n\t}\r\n}\r\n@media screen and (max-width: 991px) and (min-width: 768px) {\r\n\t.form-v10-content .form-detail .form-group {\r\n\t\tflex-direction:  column;\r\n\t\t-o-flex-direction:  column;\r\n\t\t-moz-flex-direction:  column;\r\n\t}\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {\r\n\t    width: auto;\r\n\t    padding: 0 50px 0 60px;\r\n\t}\r\n\t.form-v10-content .form-detail .select-btn,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {\r\n\t\tright: 15%;\r\n\t}\r\n\r\n}\r\n@media screen and (max-width: 767px) {\r\n\t.form-v10-content .form-detail {\r\n\t\tflex-direction:  column;\r\n\t\t-o-flex-direction:  column;\r\n\t\t-moz-flex-direction:  column;\r\n\t}\r\n\t.form-v10-content .form-detail .form-right {\r\n\t\tborder-top-right-radius: 0px;\r\n    \tborder-bottom-left-radius: 10px;\r\n\t}\r\n\t.form-v10-content .form-detail .form-left {\r\n\t\tpadding-bottom: 50px;\r\n\t}\r\n}\r\n@media screen and (max-width: 575px) {\r\n\t.form-v10-content .form-detail .form-group {\r\n\t\tflex-direction:  column;\r\n\t\t-o-flex-direction:  column;\r\n\t\t-moz-flex-direction:  column;\r\n\t}\r\n\t.form-v10-content .form-detail .form-row,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {\r\n\t    width: auto;\r\n\t    padding: 0 30px;\r\n\t}\r\n\t.form-v10-content .form-detail .select-btn,\r\n\t.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,\r\n\t.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {\r\n\t\tright: 15%;\r\n\t}\r\n\t.form-v10-content .form-detail h2 {\r\n\t    padding: 33px 30px 0px 30px;\r\n\t}\r\n\t.form-v10-content .form-detail .form-checkbox {\r\n\t\tpadding: 0 30px;\r\n\t}\r\n\t.form-v10-content .form-detail .form-checkbox .checkmark {\r\n\t\tleft: 30px;\r\n\t}\r\n\t.form-v10-content .form-detail .form-right .form-row-last {\r\n\t\tpadding-left: 0;\r\n\t\ttext-align: center;\r\n\t    margin: 44px 0 30px;\r\n\t}\r\n}\r\n.no-boundary {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.high {\r\n    min-height: 50px;\r\n    position: absolute !important;\r\n    min-width: 250px;\r\n    top: 10px;\r\n    right: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbHMvb25ib2FyZGluZy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0IsRUFBRSxnQkFBZ0I7SUFDeEMsdUJBQXVCLEVBQUUsaUJBQWlCO0FBQzlDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLDJCQUEyQjtJQUd4QixpR0FBaUc7QUFDckc7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLDJCQUEyQjtDQUMzQixnREFBZ0Q7Q0FDaEQsbURBQW1EO0NBQ25ELG9EQUFvRDtDQUNwRCxxREFBcUQ7Q0FDckQsd0RBQXdEO0NBQ3hELGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIscUNBQXFDO0FBQ3RDO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGFBQWE7Q0FDYixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsNEJBQTRCO0NBQzVCLCtCQUErQjtDQUMvQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCO0FBQ0E7O0NBRUMsV0FBVztJQUNSLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxVQUFVO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBOztDQUVDLDZCQUE2QjtBQUM5QjtBQUNBOztDQUVDLDZCQUE2QjtBQUM5QjtBQUNBOztDQUVDLHdCQUF3QjtDQUN4Qiw2Q0FBNkM7QUFDOUM7QUFDQTs7Q0FFQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtJQUNmLFVBQVU7QUFDZDtBQUNBO0NBQ0Msa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0lBQ1Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUloQyx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QiwyQkFBMkI7Q0FDM0IsZ0RBQWdEO0NBQ2hELG1EQUFtRDtDQUNuRCxvREFBb0Q7Q0FDcEQscURBQXFEO0NBQ3JELHdEQUF3RDtDQUN4RCxZQUFZO0NBQ1osWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQSxtRkFBbUYsd0JBQXdCO0VBQ3pHLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0EsMEVBQTBFLGdCQUFnQjtFQUN4RixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBLDhFQUE4RSxXQUFXO0VBQ3ZGLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0EseUVBQXlFLGdCQUFnQjtFQUN2RixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBLG9GQUFvRix3QkFBd0I7RUFDMUcsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQSwyRUFBMkUsZ0JBQWdCO0VBQ3pGLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0EsK0VBQStFLFdBQVc7RUFDeEYsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQSwwRUFBMEUsZ0JBQWdCO0VBQ3hGLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUEsZUFBZTtBQUNmO0NBQ0M7RUFDQyxrQkFBa0I7Q0FDbkI7QUFDRDtBQUNBO0NBQ0M7RUFDQyx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBRTFCLDRCQUE0QjtDQUU3QjtDQUNBOzs7Ozs7S0FNSSxXQUFXO0tBQ1gsc0JBQXNCO0NBQzFCO0NBQ0E7OztFQUdDLFVBQVU7Q0FDWDs7QUFFRDtBQUNBO0NBQ0M7RUFDQyx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBRTFCLDRCQUE0QjtDQUU3QjtDQUNBO0VBQ0MsNEJBQTRCO0tBQ3pCLCtCQUErQjtDQUNuQztDQUNBO0VBQ0Msb0JBQW9CO0NBQ3JCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUUxQiw0QkFBNEI7Q0FFN0I7Q0FDQTs7Ozs7OztLQU9JLFdBQVc7S0FDWCxlQUFlO0NBQ25CO0NBQ0E7OztFQUdDLFVBQVU7Q0FDWDtDQUNBO0tBQ0ksMkJBQTJCO0NBQy9CO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7S0FDZixtQkFBbUI7Q0FDdkI7QUFDRDtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlscy9vbmJvYXJkaW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAgMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbG9yLXJlZCB7XHJcbiAgICBjb2xvcjpyZWQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubGVmdC1lcnJvci1zdHlsZSB7XHJcbiAgICBsZWZ0OiAyMyUgIWltcG9ydGFudDtcclxufVxyXG4uY2F0ZWdvcnktc3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmVycm9yLXN0eWxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHRvcDogLTQ1JTtcclxuICAgIG1heC1oZWlnaHQ6M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUlO1xyXG59XHJcbi5ib3R0b20td2FybmluZyB7XHJcbiAgICBib3R0b206IDQwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbn1cclxuLmJvdHRvbS1sZWZ0LXNwYWNlIHtcclxuICAgIHBhZGRpbmctbGVmdDozZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50OyAvKkRlc2lyZWQgd2lkdGgqL1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7IC8qRGVzaXJlZCBoZWlnaHQqL1xyXG59XHJcbi5zcGFjZXtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLWNvbnRlbnQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogIDAgYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAjNzVlMmU5O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtby1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDE0OSwxNTMsMjI2KSAwJSwgcmdiKDEzOSwxOTgsMjM2KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigxNDksMTUzLDIyNikgMCUsIHJnYigxMzksMTk4LDIzNikgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDE0OSwxNTMsMjI2KSAwJSwgcmdiKDEzOSwxOTgsMjM2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50ICB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR3aWR0aDogMTEwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtby1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1zLWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRtYXJnaW46IDk1cHggMDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgaDIge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDM0cHg7XHJcblx0cGFkZGluZzogMzNweCA1MHB4IDBweCA2MHB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgaDIge1xyXG5cdGNvbG9yOiAjMjI3MWRkO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogIzQ4MzVkNDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgaDIge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1ncm91cCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJvdyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAwIDEycHggMCA2MHB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IC5mb3JtLWdyb3VwIC5mb3JtLXJvdy5mb3JtLXJvdy0yIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdHBhZGRpbmc6IDAgNTBweCAwIDEycHg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTMge1xyXG5cdHdpZHRoOiA3MyU7XHJcblx0cGFkZGluZzogMCAxMnB4IDAgNjBweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctNCB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAwIDUwcHggMCAxMnB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMSB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRwYWRkaW5nOiAwIDEycHggMCA2MHB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMCA1MHB4IDAgMTJweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgc2VsZWN0LFxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLnRleHQtY2xhc3Mge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTEuNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGFwcGVhcmFuY2U6IHVuc2V0O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB1bnNldDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdW5zZXQ7XHJcbiAgICAtby1hcHBlYXJhbmNlOiB1bnNldDtcclxuICAgIC1tcy1hcHBlYXJhbmNlOiB1bnNldDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtbW96LW91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LW91dGxpbmU6IG5vbmU7XHJcbiAgICAtby1vdXRsaW5lOiBub25lO1xyXG4gICAgLW1zLW91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgc2VsZWN0IHtcclxuXHRiYWNrZ3JvdW5kOiAwIDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IHNlbGVjdCB7XHJcblx0Y29sb3I6ICM2NjY7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IHNlbGVjdCB7XHJcblx0Y29sb3I6ICNmMmYyZjI7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5zZWxlY3QtYnRuIHtcclxuXHR6LWluZGV4OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICByaWdodDogMTEuNSU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnNlbGVjdC1idG4ge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC5zZWxlY3QtYnRuIHtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctNCAuc2VsZWN0LWJ0biB7XHJcblx0dG9wOiAyMCU7XHJcblx0cmlnaHQ6IDI2JTtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTIgLnNlbGVjdC1idG4ge1xyXG5cdHRvcDogMjAlO1xyXG5cdHJpZ2h0OiAxOSU7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnRleHQtY2xhc3Mge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAudGV4dC1jbGFzcyB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnRleHQtY2xhc3MsXHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IHNlbGVjdCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnRleHQtY2xhc3M6Zm9jdXMsXHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IHNlbGVjdDpmb2N1cyB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC50ZXh0LWNsYXNzLFxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgc2VsZWN0IHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAudGV4dC1jbGFzczpmb2N1cyxcclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IHNlbGVjdDpmb2N1cyB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IHNlbGVjdCBvcHRpb24ge1xyXG5cdGJhY2tncm91bmQ6ICM0ODM1ZDQ7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWNoZWNrYm94IHtcclxuXHRtYXJnaW4tdG9wOiAzN3B4O1xyXG5cdHBhZGRpbmc6IDAgNTBweCAwIDYwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1jaGVja2JveCAudGV4dC1jbGFzcyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tY2hlY2tib3ggLmNoZWNrbWFyayB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1jaGVja2JveCAuY2hlY2ttYXJrOjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgXHR0b3A6IDFweDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1jaGVja2JveCAudGV4dC1jbGFzczpjaGVja2VkIH4gLmNoZWNrbWFyazo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWNoZWNrYm94IHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbiAgICBjb2xvcjogI2U1ZTVlNTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWNoZWNrYm94IC50ZXh0IHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAuZm9ybS1yb3ctbGFzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDQ0cHggMCAxMHB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAub25ib2FyZCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdC1vLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0LW1zLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHRib3gtc2hhZG93OiAwcHggNnB4IDE3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW8tYm94LXNoYWRvdzogMHB4IDZweCAxN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdC1tcy1ib3gtc2hhZG93OiAwcHggNnB4IDE3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDE3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNnB4IDE3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0d2lkdGg6IDE4MHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW46IDZweCAwIDUwcHggMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLm9uYm9hcmQ6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC5mb3JtLXJvdy1sYXN0IC50ZXh0LWNsYXNzIHtcclxuXHRwYWRkaW5nOiAxMi41cHg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnRleHQtY2xhc3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IC50ZXh0LWNsYXNzOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLnRleHQtY2xhc3M6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IC50ZXh0LWNsYXNzOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLnRleHQtY2xhc3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAudGV4dC1jbGFzczo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAudGV4dC1jbGFzczotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC50ZXh0LWNsYXNzOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuXHQuZm9ybS12MTAtY29udGVudCB7XHJcblx0XHRtYXJnaW46ICA5NXB4IDIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tZ3JvdXAge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XHJcblx0XHQtby1mbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuXHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuXHRcdC1tb3otZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XHJcblx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAgY29sdW1uO1xyXG5cdH1cclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMSxcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMixcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMyxcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctNCxcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTEsXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC5mb3JtLWdyb3VwIC5mb3JtLXJvdy5mb3JtLXJvdy0yIHtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0ICAgIHBhZGRpbmc6IDAgNTBweCAwIDYwcHg7XHJcblx0fVxyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuc2VsZWN0LWJ0bixcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctNCAuc2VsZWN0LWJ0bixcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTIgLnNlbGVjdC1idG4ge1xyXG5cdFx0cmlnaHQ6IDE1JTtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiAgY29sdW1uO1xyXG5cdFx0LW8tZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XHJcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XHJcblx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiAgY29sdW1uO1xyXG5cdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuXHR9XHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IHtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1sZWZ0IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1ncm91cCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuXHRcdC1vLWZsZXgtZGlyZWN0aW9uOiAgY29sdW1uO1xyXG5cdFx0LW1zLWZsZXgtZGlyZWN0aW9uOiAgY29sdW1uO1xyXG5cdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogIGNvbHVtbjtcclxuXHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246ICBjb2x1bW47XHJcblx0fVxyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yb3csXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTEsXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTIsXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTMsXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLWxlZnQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTQsXHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIC5mb3JtLXJpZ2h0IC5mb3JtLWdyb3VwIC5mb3JtLXJvdy5mb3JtLXJvdy0xLFxyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuZm9ybS1yaWdodCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctMiB7XHJcblx0ICAgIHdpZHRoOiBhdXRvO1xyXG5cdCAgICBwYWRkaW5nOiAwIDMwcHg7XHJcblx0fVxyXG5cdC5mb3JtLXYxMC1jb250ZW50IC5mb3JtLWRldGFpbCAuc2VsZWN0LWJ0bixcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tbGVmdCAuZm9ybS1ncm91cCAuZm9ybS1yb3cuZm9ybS1yb3ctNCAuc2VsZWN0LWJ0bixcclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLmZvcm0tZ3JvdXAgLmZvcm0tcm93LmZvcm0tcm93LTIgLnNlbGVjdC1idG4ge1xyXG5cdFx0cmlnaHQ6IDE1JTtcclxuXHR9XHJcblx0LmZvcm0tdjEwLWNvbnRlbnQgLmZvcm0tZGV0YWlsIGgyIHtcclxuXHQgICAgcGFkZGluZzogMzNweCAzMHB4IDBweCAzMHB4O1xyXG5cdH1cclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tY2hlY2tib3gge1xyXG5cdFx0cGFkZGluZzogMCAzMHB4O1xyXG5cdH1cclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tY2hlY2tib3ggLmNoZWNrbWFyayB7XHJcblx0XHRsZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuZm9ybS12MTAtY29udGVudCAuZm9ybS1kZXRhaWwgLmZvcm0tcmlnaHQgLmZvcm0tcm93LWxhc3Qge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBtYXJnaW46IDQ0cHggMCAzMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLm5vLWJvdW5kYXJ5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uaGlnaCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/onboarding/onboarding-details/onboarding-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-details/onboarding-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-v10 no-margin container\">\n    <div class=\"page-content\">\n      <div class=\"form-v10-content\">\n        <form class=\"form-detail\" [formGroup]=\"studentForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-left\">\n            <h2>General Infomation</h2>\n            \n            <div class=\"form-group no-boundary\">\n              <div class=\"form-row form-row-1\">\n                <input type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\" class=\"input-text text-class\" [disabled]=\"viewForm\" placeholder=\"First Name\" required>\n                <span class=\"select-btn no-boundary\">\n                    <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n                </span>\n              </div>\n              <div class=\"form-row form-row-2\">\n                <input type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\" class=\"input-text text-class\" placeholder=\"Last Name\" required>\n                <span class=\"select-btn no-boundary\" >\n                    <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n                </span>\n              </div>\n            </div>\n\n            <div class=\"form-group no-boundary\">\n                <div class=\"form-row form-row-1\">\n                    <div *ngIf=\"formControls.firstName.invalid && formControls.firstName.touched\" class=\"error-style\">\n                        <small class=\"text-danger\" *ngIf=\"formControls.firstName.errors?.required\">First Name is required</small>\n                    </div>\n                </div>\n                \n                <div class=\"form-row form-row-2\">\n                    <div *ngIf=\"formControls.lastName.invalid && formControls.lastName.touched\" class=\"error-style\">\n                        <small class=\"text-danger\" *ngIf=\"formControls.lastName.errors?.required\">Last Name is required</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row no-boundary\" >\n                    <select name=\"category\" id=\"category\" formControlName=\"category\" #t (click)=\"updateCategoryFlag(t.value)\">\n                        <option value=null disabled selected>Category</option>  \n                        <option *ngFor=\"let c of categories\" [ngValue]=\"c\">{{ c }}</option>\n                    </select>\n                    <span class=\"select-btn\">\n                        <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n                    </span>\n            </div>\n            <div class=\"form-row no-boundary\">\n                <div *ngIf=\"formControls.category.errors?.required && formControls.category.touched\" class=\"error-style\">\n                    <small class=\"text-danger\">Category is required</small>\n                </div>\n            </div>\n\n            <div class=\"form-row no-boundary\">\n              <input type=\"text\" name=\"fatherName\" formControlName=\"fatherName\" class=\"text-class\"  id=\"fatherName\" placeholder=\"Father's Name\" required>\n              <span class=\"select-btn no-boundary\">\n                  <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n              </span>\n            </div>\n\n            <div class=\"form-row no-boundary\">\n                <div *ngIf=\"formControls.fatherName.invalid && formControls.fatherName.touched\" class=\"error-style\">\n                    <small class=\"text-danger\" *ngIf=\"formControls.fatherName.errors?.required\">Father's Name is required</small>\n                </div>\n            </div>\n\n            <div class=\"form-row no-boundary\">\n              <input type=\"text\" name=\"motherName\" formControlName=\"motherName\" class=\"text-class\" id=\"motherName\" placeholder=\"Mother's Name\" required>\n              <span class=\"select-btn no-boundary\">\n                  <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n              </span>\n            </div>\n\n            <div class=\"form-row no-boundary\">\n                <div *ngIf=\"formControls.motherName.invalid && formControls.motherName.touched\" class=\"error-style\">\n                    <small class=\"text-danger\" *ngIf=\"formControls.motherName.errors?.required\">Mother's Name is required</small>\n                </div>\n            </div>\n\n            <div class=\"form-row no-boundary\">\n                <input type=\"number\" name=\"previousScore\" formControlName=\"previousScore\" class=\"text-class\" id=\"lastClassScore\" placeholder=\"Last class percentage score\" required>\n                <span class=\"select-btn\" style=\" margin-right: 5%;\">\n                    <i class=\"zmdi zmdi-chevron-down\">%</i>\n                    <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n                </span>\n            </div>\n           \n            <div class=\"form-row no-boundary\">\n                <div *ngIf=\"formControls.previousScore.invalid && formControls.previousScore.touched\" class=\"error-style\">\n                    <small class=\"text-danger\" *ngIf=\" formControls.previousScore.errors?.required\">Previous class percentage score is required</small>\n                    <small class=\"text-danger\" *ngIf=\"formControls.previousScore.errors?.min || formControls.previousScore.errors?.max\">Enter number between 1-100</small>\n                </div>\n            </div>\n\n            <div class=\"form-group no-boundary\" style=\"margin-top:10px;\">\n                <div class=\"form-row form-row-1\" style=\"margin-top: 20px;\">\n                  <label class=\"form-row\">Date of Birth</label>\n                </div>\n                <div class=\"form-row form-row-2\">\n                    <input type=\"date\" class=\"text-class\" formControlName=\"dateOfBirth\" name=\"dateOfBirth\" data-date-inline-picker=\"true\" name=\"dob\" id=\"dob\"/>\n                    <span class=\"select-btn no-boundary\">\n                        <i class=\"zmdi zmdi-chevron-down color-red\" >*</i>\n                    </span>\n                </div>\n              </div>\n              <div class=\"form-row no-boundary\">\n                  <div *ngIf=\"formControls.dateOfBirth.invalid && formControls.dateOfBirth.touched\" class=\"error-style\" style=\"left:50%\">\n                      <small class=\"text-danger\" *ngIf=\"formControls.dateOfBirth.errors?.required\">Date Of Birth is required</small>\n                  </div>\n              </div>\n          </div>\n          <div class=\"form-right\">\n            <h2>Documents</h2>\n            <div class=\"form-row high\" *ngIf=\"studentForm.errors?.documentMissing\">\n                  <span class=\"select-btn no-boundary\">\n                      <i class=\"zmdi zmdi-chevron-down color-red\" >Fill all required fields</i>\n                  </span>\n              </div>\n            <div class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Domicile Certificate<i *ngIf=\"isInternationStudent ||isDomesticStudent\" class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                    <input type=\"checkbox\" formControlName=\"domicile\" class=\"checkmark\" name=\"domicile\" required/>\n                </label>\n            </div>\n            \n            <div class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Birth Certificate <i *ngIf=\"isInternationStudent ||isDomesticStudent\" class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                    <input type=\"checkbox\" formControlName=\"birthCertificate\" class=\"checkmark\" name=\"birthCertificate\" required/>\n                </label>\n            </div>\n            \n            <div class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Mark Sheets <i *ngIf=\"isInternationStudent ||isDomesticStudent\" class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                  <input type=\"checkbox\" formControlName=\"markSheets\" class=\"checkmark\" name=\"markSheets\" required/>\n                </label>\n            </div>\n            \n            <div class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Police Clearance  <i *ngIf=\"isInternationStudent\" class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                  <input type=\"checkbox\" formControlName=\"policeClearance\" class=\"checkmark\" name=\"policeClearance\" />\n                </label>\n            </div>\n            \n            <div  class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Passport  <i *ngIf=\"isInternationStudent\" class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                  <input type=\"checkbox\" formControlName=\"passport\" class=\"checkmark\" name=\"passport\" />\n                </label>\n            </div>\n            \n            <div class=\"form-checkbox\" >\n                <label class=\"container\"><h6 class=\"bottom-left-space\"> Signed Declaration  <i *ngIf=\"isInternationStudent ||isDomesticStudent\"class=\"zmdi zmdi-chevron-down color-red\" >*</i></h6>\n                  <input type=\"checkbox\" formControlName=\"declaration\" class=\"checkmark\" name=\"declaration\" [disabled]=\"viewForm\" required/>\n                </label>\n            </div>\n            \n            <div class=\"form-row-last\">\n              <button type=\"submit\"  [disabled]=\"!studentForm.valid\" *ngIf=\"!viewForm\" class=\"onboard text-class\">Onboard</button>\n            </div>\n            <div class=\"form-group no-boundary bottom-warning\" > \n              <div class=\"form-row form-row-2 \">\n                  <span class=\"select-btn no-boundary\">\n                      <i class=\"zmdi zmdi-chevron-down color-red\" >* Required fields</i>\n                  </span>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n<app-modal #modal id=\"useModal\" style=\"position:absolute\">\n    <div class=\"app-modal-header\" style=\"text-align:center; width: 100%\">\n        <h4>Delete Confirmation </h4>\n    </div>\n    <div class=\"app-modal-body\" style=\"text-align: centre\">\n        <p>Are you sure you want to delete the record for: <b class=\"font-design\">{{student.firstName + \" \" + student.lastName}}</b> </p>\n    </div>\n    <div class=\"app-modal-footer\" style=\"width: 100%\">\n        <button type=\"button\" class=\"btn btn-default left-margin\" (click)=\"modal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary left-margin\" (click)=\"deleteClicked(student.id, modal);modal.hide()\">Delete</button>\n    </div>\n</app-modal>"

/***/ }),

/***/ "./src/app/onboarding/onboarding-details/onboarding-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-details/onboarding-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OnboardingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingDetailsComponent", function() { return OnboardingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_students__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/students */ "./src/app/onboarding/shared/model/students.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_documents_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/documents.validator */ "./src/app/onboarding/validators/documents.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/student-onboarding.service */ "./src/app/onboarding/shared/services/student-onboarding.service.ts");
/* harmony import */ var src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Constants/constants */ "./src/app/shared/Constants/constants.ts");








var OnboardingDetailsComponent = /** @class */ (function () {
    function OnboardingDetailsComponent(formBuilder, router, onBoardingService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.onBoardingService = onBoardingService;
        this.route = route;
        this.student = new _shared_model_students__WEBPACK_IMPORTED_MODULE_2__["Student"]();
        this.isInternationStudent = null;
        this.isDomesticStudent = null;
        this.categories = [src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].INTERNATIONAL, src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DOMESTIC];
        this.editForm = false;
        this.viewForm = false;
    }
    Object.defineProperty(OnboardingDetailsComponent.prototype, "formControls", {
        /**
         * Getter for the form controls in HTML
         */
        get: function () { return this.studentForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * Create the form
     */
    OnboardingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentForm = this.formBuilder.group({
            firstName: [this.student.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [this.student.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherName: [this.student.fatherName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            motherName: [this.student.motherName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            previousScore: [this.student.previousScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]],
            category: [this.student.category, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateOfBirth: [this.student.dateOfBirth, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            declaration: [this.student.declaration, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            domicile: [this.student.domicile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            markSheets: [this.student.markSheets, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passport: [this.student.passport],
            policeClearance: [this.student.policeClearance],
            birthCertificate: [this.student.birthCertificate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: _validators_documents_validator__WEBPACK_IMPORTED_MODULE_4__["DocumentValidator"] });
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get(src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].ID);
            if (id) {
                var student = _this.onBoardingService.getStudentFromId(id);
                _this.fillEmployeeDetails(student);
                if (_this.router.url.includes(src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].EDIT)) {
                    _this.editForm = true;
                }
                else {
                    _this.viewForm = true;
                    _this.disableFields();
                }
            }
            else {
                _this.viewForm = false;
                _this.editForm = false;
            }
        });
    };
    /**
     * @param  {Student} student
     * Fills the student details that is selected to view or delete
     */
    OnboardingDetailsComponent.prototype.fillEmployeeDetails = function (student) {
        this.studentForm.patchValue({
            firstName: student.firstName,
            lastName: student.lastName,
            fatherName: student.fatherName,
            motherName: student.motherName,
            previousScore: student.previousScore,
            category: student.category,
            dateOfBirth: student.dateOfBirth,
            declaration: student.declaration,
            domicile: student.domicile,
            markSheets: student.markSheets,
            passport: student.passport,
            policeClearance: student.policeClearance,
            birthCertificate: student.birthCertificate
        });
        this.studentForm.controls.category.setValue(student.category);
        this.idForUpdate = student.id;
    };
    /**
     * Disable the fields in case of view record.
     */
    OnboardingDetailsComponent.prototype.disableFields = function () {
        this.studentForm.get('firstName').disable();
        this.studentForm.get('lastName').disable();
        this.studentForm.get('fatherName').disable();
        this.studentForm.get('motherName').disable();
        this.studentForm.get('dateOfBirth').disable();
        this.studentForm.get('previousScore').disable();
        this.studentForm.get('category').disable();
        this.studentForm.get('dateOfBirth').disable();
        this.studentForm.get('declaration').disable();
        this.studentForm.get('domicile').disable();
        this.studentForm.get('markSheets').disable();
        this.studentForm.get('passport').disable();
        this.studentForm.get('policeClearance').disable();
        this.studentForm.get('birthCertificate').disable();
    };
    /**
     * Perform the submit operation
     */
    OnboardingDetailsComponent.prototype.onSubmit = function () {
        if (!this.editForm && !this.viewForm) {
            this.onBoardingService.addStudent(this.studentForm.value);
        }
        else if (this.editForm) {
            this.onBoardingService.updateStudent(this.studentForm.value, this.idForUpdate);
            this.editForm = false;
            this.viewForm = false;
            this.idForUpdate = null;
        }
        else {
            this.viewForm = false;
        }
        this.router.navigate([src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].ONBOARDINGPAGE, src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].LIST]);
    };
    /**
     * Update the category flag
     */
    OnboardingDetailsComponent.prototype.updateCategoryFlag = function (value) {
        if (value != src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].NULL) {
            if (value == src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].INTERNATIONAL1) {
                this.isInternationStudent = true;
                this.isDomesticStudent = false;
            }
            else if (value == src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DOMESTIC2) {
                this.isInternationStudent = false;
                this.isDomesticStudent = true;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studentForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], OnboardingDetailsComponent.prototype, "createEmployeeForm", void 0);
    OnboardingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-details',
            template: __webpack_require__(/*! ./onboarding-details.component.html */ "./src/app/onboarding/onboarding-details/onboarding-details.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-details.component.css */ "./src/app/onboarding/onboarding-details/onboarding-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_6__["StudentOnboardingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], OnboardingDetailsComponent);
    return OnboardingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/onboarding/onboarding-list/onboarding-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/onboarding-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardList {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .outer {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n  .search-filter {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n}\r\n\r\n  .left-filter {\r\n    margin-right: 0% !important;\r\n    position: absolute;\r\n    left: 10%;\r\n    top: 40%;\r\n    width: 35%;\r\n}\r\n\r\n  .right-search {\r\n    position: absolute;\r\n    margin: 0% !important;\r\n    left: 50%;\r\n    top: 40%;\r\n}\r\n\r\n  .active-pink-2 input[type=search]:focus:not([readonly]) {\r\n    border-bottom: 1px solid #f48fb1;\r\n    box-shadow: 0 1px 0 0 #f48fb1;\r\n    }\r\n\r\n  .active-pink input[type=search] {\r\n    border-bottom: 1px solid #f48fb1;\r\n    box-shadow: 0 1px 0 0 #f48fb1;\r\n    }\r\n\r\n  .dropdown-style {\r\n    margin-left: 25px;\r\n    width: 30%;\r\n}\r\n\r\n  html {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  * {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  *, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\n\r\n  body {\r\n    font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .input-group {\r\n    position: relative;\r\n    margin-bottom: 33px;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\r\n  }\r\n\r\n  .input--style-3 {\r\n    padding: 5px 0;\r\n    font-size: 16px;\r\n    color: black;\r\n  }\r\n\r\n  .input--style-3::-webkit-input-placeholder {\r\n    /* WebKit, Blink, Edge */\r\n    color: black;\r\n  }\r\n\r\n  .has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 3.375rem;\r\n    height: 3.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n    }\r\n\r\n  .has-search .form-control {\r\n        padding-left: 2.375rem;\r\n}\r\n\r\n  .input-style2 {\r\n  width: 22%;\r\n  border: 10px teal;\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLWxpc3Qvb25ib2FyZGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0VBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztFQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qjs7RUFFQTtJQUNBLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0I7O0VBRUo7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztFQUdBO0lBR0ksc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUdFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDZEQUE2RDtJQUM3RCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFHRjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaURBQWlEO0VBQ25EOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1g7O0VBRUE7UUFDSSxzQkFBc0I7QUFDOUI7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvb25ib2FyZGluZy1saXN0L29uYm9hcmRpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRMaXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLm91dGVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubGVmdC1maWx0ZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbi5yaWdodC1zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbn1cclxuLmFjdGl2ZS1waW5rLTIgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0OGZiMTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZjQ4ZmIxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aXZlLXBpbmsgaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ4ZmIxO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmNDhmYjE7XHJcbiAgICB9XHJcblxyXG4uZHJvcGRvd24tc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC0tc3R5bGUtMyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LS1zdHlsZS0zOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIFdlYktpdCwgQmxpbmssIEVkZ2UgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFja8Kge1xyXG4gICAgcG9zaXRpb246wqBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6wqAyO1xyXG4gICAgZGlzcGxheTrCoGJsb2NrO1xyXG4gICAgd2lkdGg6wqAzLjM3NXJlbTtcclxuICAgIGhlaWdodDrCoDMuMzc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6wqAyLjM3NXJlbTtcclxuICAgIHRleHQtYWxpZ246wqBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czrCoG5vbmU7XHJcbiAgICBjb2xvcjrCoCNhYWE7XHJcbiAgICB9IFxyXG5cclxuICAgIC5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2zCoHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6wqAyLjM3NXJlbTtcclxufVxyXG5cclxuLmlucHV0LXN0eWxlMiB7XHJcbiAgd2lkdGg6IDIyJTtcclxuICBib3JkZXI6IDEwcHggdGVhbDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/onboarding/onboarding-list/onboarding-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/onboarding-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container outer\" style=\"background-image: url('assets/bg-01.jpg');    background-size: 100% 100%;\">\n    <div class=\"row\" style=\"margin-top: 50px; \"> \n     <div class=\"search-filter\">\n        <div class=\"col\" style=\"top : 30%\">\n              <label style=\" font-size:larger; margin-left: 10%; margin-right: 2%\">Filter : </label>\n              <select class=\"browser-default custom-select\" style=\"width: 20%\" [(ngModel)]=\"filterText\" >\n                  <option value=\"\">All</option>  \n                  <option value=\"International\">International</option>\n                  <option value=\"Domestic\">Domestic</option>\n                </select>\n                <a style=\"margin-left:20%\">\n                  <i class=\"fas fa-search fa-2x\" ></i>\n                  <input class=\"input--style-3 input-style2\"  type=\"text\" placeholder=\"   Search\" type=\"search\" [(ngModel)]=\"searchText\">\n                </a>\n        </div>\n      </div>\n        <div class=\"col-md-3\" style=\"min-width: 45%;\" *ngFor=\"let student of onBoardingService.students.value | searchStudents: searchText | filterStudents: filterText\">\n            <app-student [student]=\"student\" (actionPerformed)=\"deleteRecord($event)\"></app-student>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/onboarding/onboarding-list/onboarding-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/onboarding-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: OnboardingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingListComponent", function() { return OnboardingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/student-onboarding.service */ "./src/app/onboarding/shared/services/student-onboarding.service.ts");



var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(onBoardingService) {
        this.onBoardingService = onBoardingService;
    }
    OnboardingListComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param  {number} id
     */
    //Deletes student record 
    OnboardingListComponent.prototype.deleteRecord = function (id) {
        this.onBoardingService.deleteStudent(+id);
    };
    OnboardingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-list',
            template: __webpack_require__(/*! ./onboarding-list.component.html */ "./src/app/onboarding/onboarding-list/onboarding-list.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-list.component.css */ "./src/app/onboarding/onboarding-list/onboarding-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["StudentOnboardingService"]])
    ], OnboardingListComponent);
    return OnboardingListComponent;
}());



/***/ }),

/***/ "./src/app/onboarding/onboarding-list/student/student.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/student/student.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.left {\r\n    width: 50% !important;\r\n    margin: 0px !important;\r\n    position: absolute;\r\n}\r\n.right {\r\n    width: 50% !important;\r\n    margin: 0px !important;\r\n    position: relative;\r\n    left: 50%;\r\n}\r\n.parent {\r\n    min-height: 92%;\r\n    margin: 20px; \r\n    width: 95%;\r\n}\r\n.complete-body {\r\n    min-height : 270px !important\r\n}\r\n.buttons {\r\n    bottom: 25px;\r\n}\r\n.action-buttons {\r\n    margin-left: 4%;\r\n    min-width: 25%;\r\n}\r\n/* Column Gap */\r\n.cardList > * {\r\n    box-sizing: border-box;\r\n  }\r\n.cardList > *:not(:last-child) {\r\n    margin-right: 32px;\r\n  }\r\n/* Item sizing */\r\n.cardListItem {\r\n    flex: 0 1 calc(33.3% - 32px);\r\n  }\r\n/* medium size viewport */\r\n@media screen and (max-width: 959px) {\r\n    /* Column Gap */\r\n    .cardList > *:not(:last-child) {\r\n      margin-right: 32px;\r\n    }\r\n    /* Item sizing */\r\n    .cardListItem {\r\n      flex: 0 1 calc(50% - 32px);\r\n    }\r\n  }\r\n/* small size viewport */\r\n@media screen and (max-width: 599px) {\r\n    .cardList {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-start;\r\n    }\r\n    .cardList > *:not(:last-child) {\r\n      margin-right: unset;\r\n      margin-bottom: 32px;\r\n    }\r\n  }\r\n.left-margin {\r\n      margin-left: 20%;\r\n  }\r\n.font-design {\r\n      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n      font-style: oblique;\r\n      font-size: large;\r\n  }\r\n.domestic {\r\n    background-color: aliceblue;\r\n    /* background-color: #df60ff; */\r\n  }\r\n.international {\r\n    background-color: #33b5e5;\r\n  }\r\n.cards-list {\r\n    z-index: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n  }\r\n.card {\r\n    margin: 30px auto;\r\n    width: 75%; \r\n    height: 400px;\r\n    border-radius: 40px;\r\n    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n  }\r\n.card .card_image {\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: 40px;\r\n  }\r\n.card .card_image img {\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: 40px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n.card .card_title {\r\n    text-align: center;\r\n    border-radius: 0px 0px 40px 40px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-top: -80px;\r\n    height: 40px;\r\n  }\r\n.card:hover {\r\n    -webkit-transform: scale(1.1, 1.1);\r\n            transform: scale(1.1, 1.1);\r\n    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), \r\n      -5px -5px 30px 15px rgba(0,0,0,0.22);\r\n  }\r\n.title-white {\r\n    color: white;\r\n  }\r\n.title-black {\r\n    color: black;\r\n  }\r\n@media all and (max-width: 500px) {\r\n    .card-list {\r\n      /* On small screens, we are no longer using row direction but column */\r\n      flex-direction: column;\r\n    }\r\n  }\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n  }\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLWxpc3Qvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBR0UsZUFBZTtBQUNmO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDRSw0QkFBNEI7RUFDOUI7QUFDQSx5QkFBeUI7QUFDekI7SUFDRSxlQUFlO0lBQ2Y7TUFDRSxrQkFBa0I7SUFDcEI7SUFDQSxnQkFBZ0I7SUFDaEI7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBLHdCQUF3QjtBQUN4QjtJQUNFO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixtQkFBbUI7SUFDckI7RUFDRjtBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCO0FBRUE7TUFDSSx3RUFBd0U7TUFDeEUsbUJBQW1CO01BQ25CLGdCQUFnQjtFQUNwQjtBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLCtCQUErQjtFQUNqQztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBSUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtGQUFrRjtJQUNsRixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQWlCO09BQWpCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCOzBDQUNzQztFQUN4QztBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFO01BQ0Usc0VBQXNFO01BQ3RFLHNCQUFzQjtJQUN4QjtFQUNGO0FBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvb25ib2FyZGluZy1saXN0L3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuLnBhcmVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MiU7XHJcbiAgICBtYXJnaW46IDIwcHg7IFxyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmNvbXBsZXRlLWJvZHkge1xyXG4gICAgbWluLWhlaWdodCA6IDI3MHB4ICFpbXBvcnRhbnRcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBtaW4td2lkdGg6IDI1JTtcclxufVxyXG5cclxuXHJcbiAgLyogQ29sdW1uIEdhcCAqL1xyXG4gIC5jYXJkTGlzdCA+ICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLmNhcmRMaXN0ID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICB9XHJcbiAgLyogSXRlbSBzaXppbmcgKi9cclxuICAuY2FyZExpc3RJdGVtIHtcclxuICAgIGZsZXg6IDAgMSBjYWxjKDMzLjMlIC0gMzJweCk7XHJcbiAgfVxyXG4gIC8qIG1lZGl1bSBzaXplIHZpZXdwb3J0ICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC8qIENvbHVtbiBHYXAgKi9cclxuICAgIC5jYXJkTGlzdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIC8qIEl0ZW0gc2l6aW5nICovXHJcbiAgICAuY2FyZExpc3RJdGVtIHtcclxuICAgICAgZmxleDogMCAxIGNhbGMoNTAlIC0gMzJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIHNtYWxsIHNpemUgdmlld3BvcnQgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgLmNhcmRMaXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLmNhcmRMaXN0ID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sZWZ0LW1hcmdpbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuZm9udC1kZXNpZ24ge1xyXG4gICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuZG9tZXN0aWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RmNjBmZjsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmludGVybmF0aW9uYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmNhcmRzLWxpc3Qge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIHdpZHRoOiA3NSU7IFxyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggN3B4IHJnYmEoMCwwLDAsMC4yNSksIC01cHggLTVweCAzMHB4IDdweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLmNhcmRfaW1hZ2Uge1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAuY2FyZF9pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIC5jYXJkX3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDBweCA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxNXB4IHJnYmEoMCwwLDAsMC4yNSksIFxyXG4gICAgICAtNXB4IC01cHggMzBweCAxNXB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS13aGl0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1ibGFjayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuY2FyZC1saXN0IHtcclxuICAgICAgLyogT24gc21hbGwgc2NyZWVucywgd2UgYXJlIG5vIGxvbmdlciB1c2luZyByb3cgZGlyZWN0aW9uIGJ1dCBjb2x1bW4gKi9cclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyLCBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/onboarding/onboarding-list/student/student.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/student/student.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card parent \" [ngClass]=\"{'international':student.category == 'International','domestic' : student.category == 'Domestic'}\">\n    <div class=\"card-body \" >\n      <div>\n          <h4 class=\"card-title\" style=\"margin-bottom:25px;text-align: center;\">{{ student.firstName + \" \" + student.lastName }}</h4>\n      </div>  \n      \n\n        <!-- <h6 class=\"card-subtitle\">Father's Name :{{ student.fatherName }}</h6> -->\n        <div class=\"complete-body\" >\n          <div class=\"left\">\n              <h6 class=\"card-title\">General Information : </h6> \n              <p class=\"card-text\">Father's Name : {{ student.fatherName }}</p>\n              <p class=\"card-text\">Mother's Name : {{student.motherName }}</p> \n              <p class=\"card-text\" *ngIf = \"student.category == 'International'\">Catergory: International</p>\n              <p class=\"card-text\" *ngIf = \"student.category == 'Domestic'\">Catergory: Domestic</p>\n              <p class=\"card-text\">Previous Score : {{student.previousScore }}</p> \n              <p class=\"card-text\">Birthday : {{student.dateOfBirth | date }}</p> \n          </div>\n          <div class=\"right\">\n              <h6 class=\"card-title\">Submitted Documents : </h6> \n              <p *ngIf = \"student.declaration == true\"> &#9658; Signed declaration</p>\n              <p *ngIf = \"student.domicile == true\"> &#9658; Domicile Certificate</p>\n              <p *ngIf = \"student.markSheets == true\"> &#9658; Previous Class's Marksheets</p>\n              <p *ngIf = \"student.passport == true\"> &#9658; Passport</p>\n              <p *ngIf = \"student.policeClearance == true\"> &#9658; Police Clearance</p>\n              <p *ngIf = \"student.birthCertificate == true\"> &#9658; Birth Certificate</p>\n          </div>\n        </div>\n        <div class=\"buttons\">\n          <button class=\"btn btn-primary action-buttons\" (click) = \"editClick(student.id)\">Edit</button> \n          <button class=\"btn btn-primary action-buttons\" (click) = \"viewClicked(student.id)\">View</button>\n          <button class=\"btn btn-primary action-buttons\" (click) = \"modal.show()\" >Delete</button>\n        </div>\n    </div>\n</div>\n<app-modal #modal style=\"position:absolute\">\n    <div class=\"app-modal-header\" style=\"text-align:center; width: 100%\">\n      <h4>Delete Confirmation </h4>\n    </div>\n    <div class=\"app-modal-body\" style=\"text-align: centre\">\n      <p>Are you sure you want to delete the record for: <b class=\"font-design\">{{student.firstName + \" \" + student.lastName}}</b> </p>\n    </div>\n    <div class=\"app-modal-footer\" style=\"width: 100%\">\n      <button type=\"button\" class=\"btn btn-default left-margin\" (click)=\"modal.hide()\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary left-margin\" (click)=\"deleteClicked(student.id, modal);modal.hide()\">Delete</button>\n    </div>\n</app-modal>"

/***/ }),

/***/ "./src/app/onboarding/onboarding-list/student/student.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/onboarding/onboarding-list/student/student.component.ts ***!
  \*************************************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_students__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model/students */ "./src/app/onboarding/shared/model/students.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Constants/constants */ "./src/app/shared/Constants/constants.ts");






var StudentComponent = /** @class */ (function () {
    function StudentComponent(router) {
        this.router = router;
        /**
         * Returns the action performed to parent component
         */
        this.actionPerformed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @param  {string} input
     * Emit the record for deletion to parent component
     */
    StudentComponent.prototype.deleteClicked = function (input) {
        this.actionPerformed.emit(input);
    };
    /**
     * @param  {number} id
     * Edit the record selected using onboarding form
     */
    StudentComponent.prototype.editClick = function (id) {
        this.router.navigate([src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].EDITPAGE, id]);
    };
    /**
     * @param  {number} id
     * View the selected record in the form.
     */
    StudentComponent.prototype.viewClicked = function (id) {
        this.router.navigate([src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].VIEWPAGE, id]);
    };
    StudentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_model_students__WEBPACK_IMPORTED_MODULE_2__["Student"])
    ], StudentComponent.prototype, "student", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudentComponent.prototype, "actionPerformed", void 0);
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/onboarding/onboarding-list/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/onboarding/onboarding-list/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/onboarding/onboarding-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingRoutingModule", function() { return OnboardingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-details/onboarding-details.component */ "./src/app/onboarding/onboarding-details/onboarding-details.component.ts");
/* harmony import */ var _onboarding_list_onboarding_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding-list/onboarding-list.component */ "./src/app/onboarding/onboarding-list/onboarding-list.component.ts");
/* harmony import */ var _shared_guards_students_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/students-guard.service */ "./src/app/onboarding/shared/guards/students-guard.service.ts");
/* harmony import */ var _shared_guards_createStudent_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/createStudent-guard.service */ "./src/app/onboarding/shared/guards/createStudent-guard.service.ts");







var routes = [
    {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
    }, {
        path: 'create',
        component: _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_3__["OnboardingDetailsComponent"],
        canDeactivate: [_shared_guards_createStudent_guard_service__WEBPACK_IMPORTED_MODULE_6__["CreateGuardService"]]
    }, {
        path: 'view/:id',
        component: _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_3__["OnboardingDetailsComponent"],
        canActivate: [_shared_guards_students_guard_service__WEBPACK_IMPORTED_MODULE_5__["StudentGuardService"]]
    }, {
        path: 'edit/:id',
        component: _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_3__["OnboardingDetailsComponent"],
        canActivate: [_shared_guards_students_guard_service__WEBPACK_IMPORTED_MODULE_5__["StudentGuardService"]]
    }, {
        path: 'list',
        component: _onboarding_list_onboarding_list_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingListComponent"]
    }
];
var OnboardingRoutingModule = /** @class */ (function () {
    function OnboardingRoutingModule() {
    }
    OnboardingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OnboardingRoutingModule);
    return OnboardingRoutingModule;
}());



/***/ }),

/***/ "./src/app/onboarding/onboarding.module.ts":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/*! exports provided: OnboardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModule", function() { return OnboardingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-routing.module */ "./src/app/onboarding/onboarding-routing.module.ts");
/* harmony import */ var _onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding-details/onboarding-details.component */ "./src/app/onboarding/onboarding-details/onboarding-details.component.ts");
/* harmony import */ var _onboarding_list_onboarding_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-list/onboarding-list.component */ "./src/app/onboarding/onboarding-list/onboarding-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _onboarding_list_student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboarding-list/student/student.component */ "./src/app/onboarding/onboarding-list/student/student.component.ts");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/modal/modal.component */ "./src/app/onboarding/shared/modal/modal.component.ts");
/* harmony import */ var _shared_pipes_search_students_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pipes/search-students.pipe */ "./src/app/onboarding/shared/pipes/search-students.pipe.ts");
/* harmony import */ var _shared_pipes_filter_students_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/filter-students.pipe */ "./src/app/onboarding/shared/pipes/filter-students.pipe.ts");
/* harmony import */ var _shared_guards_students_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/guards/students-guard.service */ "./src/app/onboarding/shared/guards/students-guard.service.ts");
/* harmony import */ var _shared_guards_createStudent_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/guards/createStudent-guard.service */ "./src/app/onboarding/shared/guards/createStudent-guard.service.ts");














var OnboardingModule = /** @class */ (function () {
    function OnboardingModule() {
    }
    OnboardingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_onboarding_details_onboarding_details_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingDetailsComponent"], _onboarding_list_onboarding_list_component__WEBPACK_IMPORTED_MODULE_5__["OnboardingListComponent"], _onboarding_list_student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _shared_pipes_search_students_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchStudentsPipe"], _shared_pipes_filter_students_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterStudentsPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnboardingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_shared_guards_students_guard_service__WEBPACK_IMPORTED_MODULE_12__["StudentGuardService"], _shared_guards_createStudent_guard_service__WEBPACK_IMPORTED_MODULE_13__["CreateGuardService"]]
        })
    ], OnboardingModule);
    return OnboardingModule;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/guards/createStudent-guard.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/onboarding/shared/guards/createStudent-guard.service.ts ***!
  \*************************************************************************/
/*! exports provided: CreateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGuardService", function() { return CreateGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Constants/constants */ "./src/app/shared/Constants/constants.ts");



var CreateGuardService = /** @class */ (function () {
    function CreateGuardService() {
    }
    /**
     * @param  {OnboardingDetailsComponent} component
     * @returns boolean
     * Confirms with user if he wants to loose the data incase he left the form half filled.
     */
    CreateGuardService.prototype.canDeactivate = function (component) {
        if (component.studentForm.dirty && component.studentForm.invalid) {
            return confirm(src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].GUARDMESSAGE);
        }
        return true;
    };
    CreateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateGuardService);
    return CreateGuardService;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/guards/students-guard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/onboarding/shared/guards/students-guard.service.ts ***!
  \********************************************************************/
/*! exports provided: StudentGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGuardService", function() { return StudentGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_onboarding_shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/onboarding/shared/services/student-onboarding.service */ "./src/app/onboarding/shared/services/student-onboarding.service.ts");
/* harmony import */ var src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Constants/constants */ "./src/app/shared/Constants/constants.ts");





var StudentGuardService = /** @class */ (function () {
    function StudentGuardService(_studentsService, _router) {
        this._studentsService = _studentsService;
        this._router = _router;
    }
    /**
     * @param  {ActivatedRouteSnapshot} route
     * @param  {RouterStateSnapshot} state
     * @returns boolean
     * Guard to check if the requested record exists or not. This prevents the manual hit to a student ID.
     */
    StudentGuardService.prototype.canActivate = function (route, state) {
        var studentExists = !!this._studentsService.getStudentFromId(+route.paramMap.get(src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].ID));
        if (studentExists) {
            return true;
        }
        else {
            this._router.navigate([src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOTFOUNDPAGE]);
            return false;
        }
    };
    StudentGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_onboarding_shared_services_student_onboarding_service__WEBPACK_IMPORTED_MODULE_3__["StudentOnboardingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StudentGuardService);
    return StudentGuardService;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/onboarding/shared/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog arrange\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\" class=\"left-margin\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n    .arrange {\n      top : 25%;\n      min-width: 40%;\n      max-width: 45%;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/model/students.ts":
/*!*****************************************************!*\
  !*** ./src/app/onboarding/shared/model/students.ts ***!
  \*****************************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/pipes/filter-students.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/onboarding/shared/pipes/filter-students.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: FilterStudentsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStudentsPipe", function() { return FilterStudentsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterStudentsPipe = /** @class */ (function () {
    function FilterStudentsPipe() {
    }
    FilterStudentsPipe.prototype.transform = function (students, searchText) {
        if (!students) {
            return [];
        }
        if (!searchText) {
            return students;
        }
        /**
         * Filter data on the basis on category i.e. Domestic or International
         */
        return students.filter(function (student) {
            return student.category == searchText;
        });
    };
    FilterStudentsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterStudents'
        })
    ], FilterStudentsPipe);
    return FilterStudentsPipe;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/pipes/search-students.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/onboarding/shared/pipes/search-students.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: SearchStudentsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentsPipe", function() { return SearchStudentsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchStudentsPipe = /** @class */ (function () {
    function SearchStudentsPipe() {
    }
    SearchStudentsPipe.prototype.transform = function (students, searchText) {
        if (!students) {
            return [];
        }
        if (!searchText) {
            return students;
        }
        searchText = searchText.toLocaleLowerCase();
        /**
         * compares the entered text with students first name or last name
         */
        return students.filter(function (student) {
            return student.firstName.toLocaleLowerCase().includes(searchText) || student.lastName.toLocaleLowerCase().includes(searchText);
        });
    };
    SearchStudentsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchStudents'
        })
    ], SearchStudentsPipe);
    return SearchStudentsPipe;
}());



/***/ }),

/***/ "./src/app/onboarding/shared/services/student-onboarding.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/onboarding/shared/services/student-onboarding.service.ts ***!
  \**************************************************************************/
/*! exports provided: StudentOnboardingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentOnboardingService", function() { return StudentOnboardingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StudentOnboardingService = /** @class */ (function () {
    function StudentOnboardingService(http) {
        this.http = http;
        this.students = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getStudentsFromJSON();
    } // http is initialized in the constructor to get data from json
    /**
     * function to get all the students saved in the pre-defined json
     */
    StudentOnboardingService.prototype.getStudentsFromJSON = function () {
        var _this = this;
        this.http.get('assets/students.json').subscribe(function (data) {
            _this.students.next(data);
        });
    };
    /**
     * return all students data
     */
    StudentOnboardingService.prototype.getStudents = function () {
        return this.students.getValue();
    };
    /**
     * @param  {number} studentID
     * returns the index of the student
     */
    StudentOnboardingService.prototype.getStudentFromId = function (studentID) {
        var allStudents = this.students.getValue();
        var index = allStudents.findIndex(function (student) { return student.id === studentID; });
        if (index != -1) {
            return allStudents[index];
        }
        return null;
    };
    /**
     *
     * @param student model of Student
     * function to add a student to the students data
     */
    StudentOnboardingService.prototype.addStudent = function (student) {
        var allStudents = this.students.getValue();
        var id = allStudents[allStudents.length - 1].id; // getting the index of last value added
        student.id = id + 1;
        var updatedData = allStudents.concat([student]); // updating the students array as behaviour subject
        this.students.next(updatedData);
    };
    /**
     * @param  {Student} updatedRecord
     * @param  {number} studentID
     * updates the record of the student using student ID.
     */
    StudentOnboardingService.prototype.updateStudent = function (updatedRecord, studentID) {
        var allStudents = this.students.getValue();
        var index = allStudents.findIndex(function (student) { return student.id === studentID; });
        updatedRecord.id = studentID;
        allStudents[index] = updatedRecord;
        this.students.next(allStudents);
    };
    /**
     * @param  {number} studentID
     * Delete the data of a student using student ID
     */
    StudentOnboardingService.prototype.deleteStudent = function (studentID) {
        var allStudents = this.students.getValue();
        var i = 0;
        var index = allStudents.findIndex(function (student) { return student.id === studentID; }); //find index in your array
        allStudents.splice(index, 1);
        this.students.next(allStudents);
    };
    StudentOnboardingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentOnboardingService);
    return StudentOnboardingService;
}());



/***/ }),

/***/ "./src/app/onboarding/validators/documents.validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/onboarding/validators/documents.validator.ts ***!
  \**************************************************************/
/*! exports provided: DocumentValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentValidator", function() { return DocumentValidator; });
/* harmony import */ var src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/Constants/constants */ "./src/app/shared/Constants/constants.ts");

function DocumentValidator(control) {
    var category = control.get("category");
    var documents = control.value;
    var abc = window.location.href;
    if (category.pristine && !abc) { // if they are not made dirty yet then no need to show error as of now
        return null;
    }
    if (category.value === src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].INTERNATIONAL) { // if category is International
        if (validateInternationalStudentDocuments(control)) {
            return { documentMissing: true };
        }
        else {
            null;
        }
    }
    if (category.value === src_app_shared_Constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].DOMESTIC) { // if category is DOMESTIC
        if (validateDomesticStudentDocuments(control)) {
            return { documentMissing: true };
        }
        else {
            null;
        }
    }
    return null;
}
/**
 *
 * @param control Validates documents for International Students
 */
function validateInternationalStudentDocuments(control) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
        !control.get("markSheets").value || !control.get("passport").value || !control.get("policeClearance").value
        || !control.get("declaration").value) { // if they are not made dirty yet then no need to show error as of now
        return true;
    }
    else {
        return false;
    }
}
/**
 *
 * @param control Validates documents for Domestic Students
 */
function validateDomesticStudentDocuments(control) {
    if (!control.get("domicile").value || !control.get("birthCertificate").value ||
        !control.get("markSheets").value || !control.get("declaration").value) { // validate Domestic
        return true;
    }
    else {
        return false;
    }
}


/***/ }),

/***/ "./src/app/shared/Constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/Constants/constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.URL = 'assets/students.json';
    Constants.INTERNATIONAL1 = "1: International";
    Constants.DOMESTIC2 = "2: Domestic";
    Constants.NULL = "null";
    Constants.INTERNATIONAL = "International";
    Constants.DOMESTIC = "Domestic";
    Constants.ID = 'id';
    Constants.EDIT = 'edit';
    Constants.FIRSTNAME = 'firstName';
    Constants.LASTNAME = 'lastName';
    Constants.NOTFOUNDPAGE = '/notfound';
    Constants.LIST = "list";
    Constants.ONBOARDINGPAGE = "/onboarding";
    Constants.GUARDMESSAGE = 'Are you sure you want to discard your changes?';
    Constants.EDITPAGE = 'onboarding/edit';
    Constants.VIEWPAGE = 'onboarding/view';
    return Constants;
}());



/***/ })

}]);
//# sourceMappingURL=onboarding-onboarding-module.js.map