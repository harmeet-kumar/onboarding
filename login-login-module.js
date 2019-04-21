(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-details/login-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/login/login-details/login-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  * {\r\n      margin: 0px; \r\n      padding: 0px; \r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  body, html {\r\n      height: 100%;\r\n      font-family: Poppins-Regular, sans-serif;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  a {\r\n      font-family: 'Courier New', Courier, monospace;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n      transition: all 0.4s;\r\n      -webkit-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n  }\r\n  \r\n  a:focus {\r\n      outline: none !important;\r\n  }\r\n  \r\n  a:hover {\r\n      text-decoration: none;\r\n    color: #57b846;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  h1,h2,h3,h4,h5,h6 {\r\n      margin: 0px;\r\n  }\r\n  \r\n  p {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n  }\r\n  \r\n  ul, li {\r\n      margin: 0px;\r\n      list-style-type: none;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  input {\r\n      outline: none;\r\n      border: none;\r\n  }\r\n  \r\n  textarea {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n  \r\n  textarea:focus, input:focus {\r\n    border-color: transparent !important;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  input:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  input::-webkit-input-placeholder { color: #999999; }\r\n  \r\n  input:-moz-placeholder { color: #999999; }\r\n  \r\n  input::-moz-placeholder { color: #999999; }\r\n  \r\n  input:-ms-input-placeholder { color: #999999; }\r\n  \r\n  textarea::-webkit-input-placeholder { color: #999999; }\r\n  \r\n  textarea:-moz-placeholder { color: #999999; }\r\n  \r\n  textarea::-moz-placeholder { color: #999999; }\r\n  \r\n  textarea:-ms-input-placeholder { color: #999999; }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  button {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n  \r\n  button:hover {\r\n      cursor: pointer;\r\n  }\r\n  \r\n  iframe {\r\n      border: none !important;\r\n  }\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ Utility ]*/\r\n  \r\n  .txt1 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    color: #999999;\r\n  }\r\n  \r\n  .txt2 {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    color: #666666;\r\n  }\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n  \r\n  .limiter {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .container-login100 {\r\n    width: 100%;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    background: #9053c7;\r\n    overflow: hidden;\r\n    background: linear-gradient(-135deg, #c850c0, #4158d0);\r\n  }\r\n  \r\n  .wrap-login100 {\r\n    margin-top: 6%;\r\n    width: auto;\r\n    height: auto;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    padding: 20px 80px 70px 65px !important;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [  ]*/\r\n  \r\n  .login100-pic {\r\n    width: 316px;\r\n  }\r\n  \r\n  .login100-pic img {\r\n    max-width: 100%;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [  ]*/\r\n  \r\n  .login100-form {\r\n    width: 290px;\r\n  }\r\n  \r\n  .login100-form-title {\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    -webkit-font-feature-settings: \"expt\";\r\n            font-feature-settings: \"expt\";\r\n    font-size: 24px;\r\n    color: #333333;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n  \r\n    width: 100%;\r\n    display: block;\r\n    padding-bottom: 54px;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  .wrap-input100 {\r\n    position: relative;\r\n    width: 100%;\r\n    z-index: 1;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .input100 {\r\n    font-family: Poppins-Medium;\r\n    font-size: 15px;\r\n    line-height: 1.5;\r\n    color: #666666;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    background: #e6e6e6;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    padding: 0 30px 0 68px;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Focus ]*/\r\n  \r\n  .focus-input100 {\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 25px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0px 0px 0px 0px;\r\n    color: rgba(87,184,70, 0.8);\r\n  }\r\n  \r\n  .input100:focus + .focus-input100 {\r\n    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;\r\n    animation: anim-shadow 0.5s ease-in-out forwards;\r\n  }\r\n  \r\n  @-webkit-keyframes anim-shadow {\r\n    to {\r\n      box-shadow: 0px 0px 70px 25px;\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes anim-shadow {\r\n    to {\r\n      box-shadow: 0px 0px 70px 25px;\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  .symbol-input100 {\r\n    font-size: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    border-radius: 25px;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-left: 35px;\r\n    pointer-events: none;\r\n    color: #666666;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .input100:focus + .focus-input100 + .symbol-input100 {\r\n    color: #57b846;\r\n    padding-left: 28px;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Button ]*/\r\n  \r\n  .container-login100-form-btn {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .login100-form-btn {\r\n    font-family: Montserrat-Bold;\r\n    font-size: 15px;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n  \r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background: #57b846;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 25px;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .login100-form-btn:hover {\r\n    background: #333333;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Responsive ]*/\r\n  \r\n  @media (max-width: 992px) {\r\n    .wrap-login100 {\r\n      padding: 177px 90px 33px 85px;\r\n    }\r\n  \r\n    .login100-pic {\r\n      width: 35%;\r\n    }\r\n  \r\n    .login100-form {\r\n      width: 50%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .wrap-login100 {\r\n      padding: 100px 80px 33px 80px;\r\n    }\r\n  \r\n    .login100-pic {\r\n      display: none;\r\n    }\r\n  \r\n    .login100-form {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 100px 15px 33px 15px;\r\n    }\r\n  }\r\n  \r\n  .invalid-feedback {\r\n      position: absolute;\r\n      height: 20px;\r\n      min-height: 20px;\r\n  }\r\n  \r\n  .marg-bottom-20px {\r\n    margin-bottom: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZGV0YWlscy9sb2dpbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHNCQUFzQjtFQUMxQjs7RUFFQTtNQUNJLFlBQVk7TUFDWix3Q0FBd0M7RUFDNUM7O0VBRUEsZ0RBQWdEOztFQUNoRDtNQUNJLDhDQUE4QztNQUM5QyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLDRCQUE0QjtJQUM5Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksd0JBQXdCO0VBQzVCOztFQUVBO01BQ0kscUJBQXFCO0lBQ3ZCLGNBQWM7RUFDaEI7O0VBRUEsZ0RBQWdEOztFQUNoRDtNQUNJLFdBQVc7RUFDZjs7RUFFQTtNQUNJLHlDQUF5QztNQUN6QyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxXQUFXO01BQ1gscUJBQXFCO0VBQ3pCOztFQUdBLGdEQUFnRDs7RUFDaEQ7TUFDSSxhQUFhO01BQ2IsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUEseUNBQXlDLGlCQUFpQixFQUFFOztFQUM1RCwrQkFBK0IsaUJBQWlCLEVBQUU7O0VBQ2xELGdDQUFnQyxpQkFBaUIsRUFBRTs7RUFDbkQsb0NBQW9DLGlCQUFpQixFQUFFOztFQUV2RCw0Q0FBNEMsaUJBQWlCLEVBQUU7O0VBQy9ELGtDQUFrQyxpQkFBaUIsRUFBRTs7RUFDckQsbUNBQW1DLGlCQUFpQixFQUFFOztFQUN0RCx1Q0FBdUMsaUJBQWlCLEVBQUU7O0VBRTFELG1DQUFtQyxjQUFjLEVBQUU7O0VBQ25ELHlCQUF5QixjQUFjLEVBQUU7O0VBQ3pDLDBCQUEwQixjQUFjLEVBQUU7O0VBQzFDLDhC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O0VBSWY7SUFDRTtNQUNFLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7RUFFQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0Y7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWRldGFpbHMvbG9naW4tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAqIHtcclxuICAgICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgICBwYWRkaW5nOiAwcHg7IFxyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5LCBodG1sIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTdiODQ2O1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgaDEsaDIsaDMsaDQsaDUsaDYge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgdWwsIGxpIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGlucHV0IHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgXHJcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIHRleHRhcmVhOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIHRleHRhcmVhOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIFxyXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cclxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XHJcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cclxuICBcclxuICB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XHJcbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XHJcbiAgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTsgfVxyXG4gIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpZnJhbWUge1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFV0aWxpdHkgXSovXHJcbiAgLnR4dDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnR4dDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBsb2dpbiBdKi9cclxuICBcclxuICAubGltaXRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1sb2dpbjEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MDUzYzc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCAjYzg1MGMwLCAjNDE1OGQwKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCAjYzg1MGMwLCAjNDE1OGQwKTtcclxuICB9XHJcbiAgXHJcbiAgLndyYXAtbG9naW4xMDAge1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDgwcHggNzBweCA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyAgXSovXHJcbiAgLmxvZ2luMTAwLXBpYyB7XHJcbiAgICB3aWR0aDogMzE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1waWMgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbICBdKi9cclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiZXhwdFwiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1NHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLndyYXAtaW5wdXQxMDAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLU1lZGl1bTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweCAwIDY4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBGb2N1cyBdKi9cclxuICAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSg4NywxODQsNzAsIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW0tc2hhZG93IHtcclxuICAgIHRvIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3MHB4IDI1cHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xyXG4gICAgdG8ge1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDcwcHggMjVweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN5bWJvbC1pbnB1dDEwMCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAgKyAuc3ltYm9sLWlucHV0MTAwIHtcclxuICAgIGNvbG9yOiAjNTdiODQ2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgQnV0dG9uIF0qL1xyXG4gIC5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU3Yjg0NjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgUmVzcG9uc2l2ZSBdKi9cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC53cmFwLWxvZ2luMTAwIHtcclxuICAgICAgcGFkZGluZzogMTc3cHggOTBweCAzM3B4IDg1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4xMDAtcGljIHtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5sb2dpbjEwMC1mb3JtIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAud3JhcC1sb2dpbjEwMCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwMHB4IDgwcHggMzNweCA4MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxvZ2luMTAwLXBpYyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC53cmFwLWxvZ2luMTAwIHtcclxuICAgICAgcGFkZGluZzogMTAwcHggMTVweCAzM3B4IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWFyZy1ib3R0b20tMjBweCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login-details/login-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/login/login-details/login-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"limiter container\">\n        <div class=\"container-login100\">\n          <div class=\"wrap-login100\">\n            <div class=\"login100-pic js-tilt\" data-tilt>\n              <img src=\"assets/img-01.png\" alt=\"IMG\">\n            </div>\n    \n            <form class=\"login100-form validate-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <span class=\"login100-form-title\">\n               School Admin Login\n              </span>\n    \n              <div class=\"wrap-input100 validate-input\" data-validate = \"Valid Username is required\">\n                  <input class=\"input100 form-control\" type=\"text\" formControlName=\"username\" name=\"username\" placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && formControls.username.errors }\">\n                  <span class=\"focus-input100\"></span>\n                  <span class=\"symbol-input100\">\n                    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                  </span>\n                <div *ngIf=\"submitted && formControls.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"formControls.username.errors.required\">Username is required</div>\n                </div>\n              </div>\n    \n              <div class=\"wrap-input100 validate-input \" style=\"margin-top: 20px;\" data-validate = \"Password is required\">\n                  <input class=\"input100 form-control\" type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && formControls.password.errors }\">\n                  <span class=\"focus-input100\"></span>\n                  <span class=\"symbol-input100\">\n                    <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                  </span>\n                <div *ngIf=\"submitted && formControls.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n                </div>\n              </div>\n              \n              <div class=\"container-login100-form-btn\">\n                <button class=\"login100-form-btn login_btn\">\n                  Login\n                </button>\n              </div>\n    \n              <div class=\"text-center p-t-136\">\n                <button type=\"button\" class=\"txt2\" (click)=\"reset()\">\n                  Reset\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./src/app/login/login-details/login-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/login/login-details/login-details.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDetailsComponent", function() { return LoginDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");





var LoginDetailsComponent = /** @class */ (function () {
    function LoginDetailsComponent(formBuilder, authenticationService, route, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    LoginDetailsComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginDetailsComponent.prototype, "formControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginDetailsComponent.prototype.reset = function () {
        if (this.loginForm.controls.username.value != '') {
            this.loginForm.controls.username.reset();
        }
        if (this.loginForm.controls.password.value != '') {
            this.loginForm.controls.password.reset();
        }
    };
    LoginDetailsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.formControls.username.value, this.formControls.password.value);
        this.router.navigate(['onboarding/create']);
    };
    LoginDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-details',
            template: __webpack_require__(/*! ./login-details.component.html */ "./src/app/login/login-details/login-details.component.html"),
            styles: [__webpack_require__(/*! ./login-details.component.css */ "./src/app/login/login-details/login-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginDetailsComponent);
    return LoginDetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_details_login_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-details/login-details.component */ "./src/app/login/login-details/login-details.component.ts");




var routes = [{
        path: '',
        component: _login_details_login_details_component__WEBPACK_IMPORTED_MODULE_3__["LoginDetailsComponent"]
    }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_details_login_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-details/login-details.component */ "./src/app/login/login-details/login-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_details_login_details_component__WEBPACK_IMPORTED_MODULE_4__["LoginDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map