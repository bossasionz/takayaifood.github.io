(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/option/add-item/add-item.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/option/add-item/add-item.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<form>\r\n    <p>\r\n        <div class=\"form-group col-6 pt-2\">\r\n            <p>\r\n                <div class=\"col-md-12 pt-2\" id=\"center\">\r\n                    <div class=\"md-form input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text md-addon\"\r\n                                id=\"inputGroupMaterial-sizing-default\">ชื่อลูกค้า </span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.name\" name=\"name\"\r\n                            aria-label=\"Sizing example input\" aria-describedby=\"inputGroupMaterial-sizing-default\">\r\n\r\n                    </div>\r\n                    <div class=\"md-form input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text md-addon\"\r\n                                id=\"inputGroupMaterial-sizing-default\">โทรศัพท์</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.tel\" name=\"tel\"\r\n                            aria-label=\"Sizing example input\" aria-describedby=\"inputGroupMaterial-sizing-default\">\r\n                    </div>\r\n                    <div class=\"md-form input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text md-addon\"\r\n                                id=\"inputGroupMaterial-sizing-default\">ที่อยู่ (หอ)</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.address\" name=\"address\"\r\n                            aria-label=\"Sizing example input\" aria-describedby=\"inputGroupMaterial-sizing-default\">\r\n                    </div>\r\n                    <div class=\"userAction col-md-12 pt-2\" id=\"btnGroup\">\r\n                        <input type=\"submit\" (click)=\"onInsert()\" class=\"btn1\" value=\"เพิ่ม\">\r\n                        &nbsp;&nbsp;\r\n                        <input type=\"reset\" class=\"btn2\" value=\"ล้าง\">\r\n                        &nbsp;&nbsp;\r\n                        <input type=\"submit\" (click)=\"filter()\" class=\"btn3\" value=\"ค้นหา\">\r\n                    </div>\r\n                </div>\r\n        </div>\r\n\r\n</form>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/option/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/option/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/option/nav-bar/nav-bar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/option/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/order']\" routerLinkActive=\"active\">\r\n            <img src=\"../../../assets/pic/brand.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">ข้าวแกงตากะยาย\r\n        </a>\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n            <ul class=\"navbar-nav\">\r\n                <a class=\"nav-item nav-link\" [routerLink]=\"['/total']\">ยอดขาย</a>\r\n            </ul>\r\n        </div>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">ออกจากระบบ</button>\r\n        </form>\r\n    </nav> -->\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    \r\n    <!-- nav navigation -->\r\n\r\n    \r\n   \r\n    <!-- Side navigation -->\r\n    <!-- <body>\r\n    <div class=\"sidenav\">\r\n        <li class=\"nav-header\"><img src=\"../../../assets/pic/brand.jpg\" width=\"130\" height=\"130\" class=\"align-center\" alt=\"\"></li>\r\n        <a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/order']\">หน้าหลัก</a>\r\n        <a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/total']\">ดูยอดขาย</a>\r\n        <a href=\"#\">ออกจากระบบ</a>\r\n    </div>\r\n    </body> -->\r\n    \r\n    <!-- <body> -->\r\n        <header>\r\n            <nav class=\"brannav\">\r\n                <img src=\"../../../assets/pic/brand.jpg\" width=\"130\" height=\"130\" class=\"align-center\" alt=\"\">\r\n                <h1 class=\"brand\"><a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/order']\">ตา<span>กะ</span>ยายข้าวราดแกง</a></h1>\r\n                <ul>\r\n                    <li><a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/order']\">หน้าหลัก</a></li>\r\n                    <li><a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/check-list']\">เช็ครายการสั่ง</a></li>\r\n                    <li><a href=\"#\" class=\"nav-item nav-link\" [routerLink]=\"['/total']\">ดูยอดขาย</a></li>\r\n                    <li><a href=\"#\" class=\"nav-item nav-link\">ออกจากระบบ</a></li>\r\n                </ul>\r\n            </nav>\r\n        </header>\r\n    <!-- </body> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/auth.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/auth.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\t<div class=\"modal-dialog text-center\">\r\n\t\t<div class=\"col-sm-8 main-section\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"col-12 logo-img\">\r\n\t\t\t\t\t<img src=\"../../../assets/pic/khawgang.jpg\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<form formArrayName=\"loginForm\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"อีเมลผู้ใช้งาน\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<input type=\"Password\" class=\"form-control\" placeholder=\"รหัสผ่าน\">\r\n\t\t\t\t\t\t<label class=\"error\">{{errorMessage}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button (click)=\"tryLogin()\" type=\"submit\" class=\"btn p-3 mb-3 bg-ghost text-white\"><i\r\n\t\t\t\t\t\t\tclass=\"fas fa-sign-in-alt\"></i>เข้าสู่ระบบ</button>\r\n\t\t\t\t\t<i class=\"fas fa-user\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<!----End of Modal Content -->\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t\t<div id=\"stars\"></div>\r\n        <div id=\"stars2\"></div>\r\n        <div id=\"stars3\"></div>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/check-list/check-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/check-list/check-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-md-offset-3\" id=\"form\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"Header text-center text-white\">รายการสั่ง</h1>\r\n                <p>\r\n                    <div class=\"table-responsive\">\r\n\r\n                        <table class=\"table table-striped table-bordered table-hover\">\r\n                            <thead class=\"thead\">\r\n                                <tr>\r\n                                    <th>ชื่อ</th>\r\n                                    <th class=\"text-center\">จำนวน (กล่อง)</th>\r\n                                    <th class=\"text-right\">รวม</th>\r\n                                    <th class=\"text-center\">ดำเนินการ</th>\r\n                                    <th class=\"text-center\">ส่งออเดอร์</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                    <ng-container [attr.aria-expanded]=\"!isCollapsed[i]\" [attr.aria-controls]=\"'collapseExample'\">\r\n                                <!-- <tr *ngFor=\"let i = index\">\r\n                                        <th scope=\"row\">{{ i+1 }}</th> -->\r\n                                <tr (click)=\"isCollapsed[i] = !isCollapsed[i]\">\r\n                                    <td>{{items.name}}</td>\r\n                                    <td class=\"text-center\">{{sumNum}}</td>\r\n                                    <td class=\"text-right\">{{total}}</td>\r\n                                    <td class=\"text-center\">กำลังดำเนินการ</td>\r\n                                    <td class=\"text-center\">\r\n                                        <button (click)=\"confirmToSend()\" type=\"button\"\r\n                                            class=\"btn btn-ghost btn-md\">จัดส่ง</button>\r\n                                    </td>\r\n                                </tr>\r\n                                <ng-container *ngFor=\"let order of order; let i = index\">\r\n                                        <tr  id=\"collapseExample{{i}}\" [ngbCollapse]=\"isCollapsed[i]\">\r\n                                          <th scope=\"row\">{{i + 1}}</th>\r\n                                          <td>{{order.foodName}}</td>\r\n                                          <td>{{order.foodNum}}</td>\r\n                                          <td>\r\n                                            <ng-container *ngIf=\"order.optEgg\">\r\n                                              ใส่ไข่\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"!order.optEgg\">\r\n                                              \r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"order.optExtra\">\r\n                                              พิเศษ\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"!order.optExtra\">\r\n                                            </ng-container>\r\n                                          </td>\r\n                                          <td>{{order.note}}</td>\r\n                                        </tr>\r\n                                        </ng-container>\r\n                                </ng-container>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div id=\"stars\"></div>\r\n<div id=\"stars2\"></div>\r\n<div id=\"stars3\"></div>\r\n\r\n\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/food-list/food-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/food-list/food-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<!--FoodList-->\r\n\r\n<div class=\"container\">\r\n\t<!-- <div class=\"row\"> -->\r\n\t<nav class=\"navbar justify-content-center\">\r\n\t\t<div class=\"topnav\">\r\n\t\t\t<ngb-tabset>\r\n\t\t\t\t<ngb-tab class=\"tab-title\" title=\"เมนูใหม่\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuNews of menuNew; let i = index\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td>{{ menuNews.foodName }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{ menuNews.foodPrice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuNews.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuNews.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuNews.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuNews.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitNewMenu(menuNews)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuNews.foodNum !>= 1\">\r\n\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end new-->\r\n\r\n\r\n\t\t\t\t<ngb-tab title=\"เมนูแกง-ต้ม\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuCurrys of menuCurry; let i = index\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td>{{ menuCurrys.foodName }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{ menuCurrys.foodPrice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuCurrys.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuCurrys.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuCurrys.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuCurrys.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitCurryMenu(menuCurrys)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuCurrys.foodNum !>= 1\">\r\n\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end แกง-ต้ม-->\r\n\r\n\r\n\t\t\t\t<ngb-tab title=\"เมนูผัด-ทอด\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuFrieds of menuFried; let i = index\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td>{{ menuFrieds.foodName }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{ menuFrieds.foodPrice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuFrieds.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuFrieds.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuFrieds.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuFrieds.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitFriedMenu(menuFrieds)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuFrieds.foodNum !>= 1\">\r\n\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end ผัดทอด-->\r\n\r\n\t\t\t\t<ngb-tab title=\"เมนูยำ\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuSoups of menuSoup; let i = index\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td>{{ menuSoups.foodName }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{ menuSoups.foodPrice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuSoups.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuSoups.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuSoups.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuSoups.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitSoupMenu(menuSoups)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuSoups.foodNum !>= 1\">\r\n\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end ยำ-->\r\n\r\n\t\t\t\t<ngb-tab title=\"เมนูพิเศษ\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuExtras of menuExtra; let i = index\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td>{{ menuExtras.foodName }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{ menuExtras.foodPrice }}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuExtras.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuExtras.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuExtras.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuExtras.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitExtra(menuExtras)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuExtras.foodNum !>= 1\">\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end พิเศษ-->\r\n\r\n\t\t\t\t<ngb-tab class=\"tabtitle\" title=\"อื่นๆ\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t<thead class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">เมนูที่</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ราคา</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">จัดออเดอร์</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let menuOthers of menuOther; let i = index;\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t\t\t\t\t\t<td><input [(ngModel)]=\"menuOthers.foodName\" class=\"pt-3-half\"\r\n\t\t\t\t\t\t\t\t\t\t\tcontenteditable=\"true\"></td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input [(ngModel)]=\"menuOthers.foodPrice\" class=\"pt-3-half\"\r\n\t\t\t\t\t\t\t\t\t\t\tcontenteditable=\"true\"></td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\"><input class=\"text-right\" [(ngModel)]=\"menuOthers.foodNum\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"0\" required type=\"number\" value=\"\" min=\"0\" max=\"100\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 50px;\" /></td>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuOthers.foodNum >= 1\">\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuOthers.optExtra\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"menuOthers.optEgg\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider round\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"submitOtherMenu(menuOthers)\" type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-ghost btn-md\">เลือก</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"menuOthers.foodNum >= 1\">\r\n\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"sumListOrder\">\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<!--end อื่นๆ-->\r\n\t\t\t</ngb-tabset>\r\n\t\t</div> <!-- end topnav> -->\r\n\t</nav>\r\n\r\n\t<div class=\"orderuserID\">\r\n\t\t<header>\r\n\t\t\t<h2>ข้อมูลลูกค้า</h2>\r\n\t\t</header>\r\n\t\t<ul>\r\n\t\t\t<li><label for=\"name\">ชื่อลูกค้า: {{items?.name}}</label></li>\r\n\t\t\t<li><label for=\"tel\">โทรศัพท์: {{items?.tel}}</label></li>\r\n\t\t\t<li><label for=\"address\">ที่อยู่: {{items?.address}}</label></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<table class=\"table2 table table-hover\">\r\n\t\t<thead class=\"thead-dark\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th scope=\"col\">ลำดับที่</th>\r\n\t\t\t\t<th scope=\"col\">ชื่อเมนู</th>\r\n\t\t\t\t<th class=\"text-right\" scope=\"col\">ราคา</th>\r\n\t\t\t\t<th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n\t\t\t\t<th scope=\"col\">พิเศษ</th>\r\n\t\t\t\t<th scope=\"col\">ไข่ดาว</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th scope=\"col\">แก้ไข</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let menu of orderSelectedList; let i = index\">\r\n\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\r\n\t\t\t\t<td>{{ menu.foodName }}</td>\r\n\t\t\t\t<td class=\"text-right\">{{ menu.foodPrice }}</td>\r\n\t\t\t\t<td class=\"text-right\">{{ menu.foodNum }}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<label for=\"optExtra{{i}}\" id=\"optExtra{{i}}\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"menu.optExtra\">\r\n\t\t\t\t\t\t\tพิเศษ\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!menu.optExtra\">\r\n\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<label for=\"optEgg{{i}}\" id=\"optEgg{{i}}\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"menu.optEgg\">\r\n\t\t\t\t\t\t\tใส่ไข่\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-container *ngIf=\"!menu.optEgg\">\r\n\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"text-right\"></td>\r\n\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t<button (click)=\"deleteSelectMenu(i)\" type=\"button\" class=\"btn btn-ghost btn-md\">ลบ</button>\r\n\t\t\t\t</td>\r\n\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t\t<tfoot class=\"tfoot\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td colspan=\"2\" class=\"text-center\">\r\n\t\t\t\t\t<button (click)=\"sum()\" type=\"button\" class=\"btn2 btn-ghost btn-md\">คำนวณ</button>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>{{ total }}</td>\r\n\t\t\t\t<!-- <td>{{ total }}</td>\r\n\t\t\t\t\t\t<td colspan=\"1\" style=\"color: white;\"></td>\r\n\t\t\t\t\t\t<td><input type=\"submit\" class=\"btn2 btn-ghost btn-lg\" value=\"สั่งซื้อ\"></td> -->\r\n\t\t\t</tr>\r\n\t\t\t<!-- <td class=\"text-center\">\r\n\t\t\t\t\t\t<button (click)=\"sum()\" type=\"button\" class=\"btn2 btn-ghost btn-md\">คำนวณ</button>\r\n\t\t\t\t\t</td> -->\r\n\t\t\t<!-- <td>{{total}}</td> -->\r\n\t\t\t<td colspan=\"7\" style=\"color: white;\"></td>\r\n\t\t\t<td><input (click)=\"confirmOrder()\" type=\"submit\" class=\"btn2 btn-ghost btn-lg\" value=\"สั่งซื้อ\"></td>\r\n\t\t</tfoot>\r\n\t</table>\r\n\t<div class=\"info col-md-12\">\r\n\t\t<header>\r\n\t\t\t<nav>\r\n\t\t\t\t<h3>หมายเหตุ</h3>\r\n\t\t\t</nav>\r\n\t\t</header>\r\n\t\t<aside>\r\n\t\t\t<textarea [(ngModel)]=\"items.note\" class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"ระบุรายการเพิ่มเติม\"\r\n\t\t\t\trows=\"3\"></textarea>\r\n\t\t</aside>\r\n\t</div>\r\n\r\n</div> <!-- end container> -->\r\n\r\n\r\n\r\n<div id=\"stars\"></div>\r\n<div id=\"stars2\"></div>\r\n<div id=\"stars3\"></div>\r\n\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order/order.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<!-- Order container-->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-md-auto text-center\" id=\"form\">\r\n            <b class=\"Management\">ระบบจัดการลูกค้า</b>\r\n            <app-add-item></app-add-item>\r\n        </div>\r\n    </div>\r\n    <table class=\"table table-hover\">\r\n            \r\n        <thead class=\"thead\">\r\n            <tr>\r\n                <th scope=\"col\">ลำดับที่</th>\r\n                <th scope=\"col\">ชื่อลูกค้า</th>\r\n                <th scope=\"col\">เบอร์โทรศัพท์</th>\r\n                <th scope=\"col\">ที่อยู่ (หอ)</th>\r\n                <th scope=\"col\" class=\"text-center\">จัดออเดอร์ส่ง / ลบข้อมูล</th>\r\n                <th scope=\"col\">สถานะการเป็นลูกค้า</th>\r\n                \r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of items; let i = index;\"  class=\"collection\">\r\n                    <!-- <th scope=\"row\">1</th> -->\r\n                    <td class=\"collection-item\">{{ i+1 }}</td>\r\n                    <td class=\"collection-item\">{{ item.name }}</td>\r\n                    <td class=\"collection-item\">{{ item.tel }}</td>\r\n                    <td class=\"collection-item\">{{ item.address }}</td>\r\n                    <td class=\"text-center\">\r\n                        <button [routerLink]=\"['/food-list', item.id]\" type=\"button\" class=\"btn1 btn-ghost btn-sm\">จัดออเดอร์</button>\r\n                        &nbsp;&nbsp;\r\n                        <button (click)=\"deleteItem($event, item)\" type=\"button\" class=\"btn2 btn-ghost btn-sm\">ลบรายชื่อ</button>\r\n                    </td>\r\n                    <td>\r\n                        ไม่เป็น\r\n                        <label class=\"switch\">\r\n                            <input [(ngModel)]=\"item.status\" type=\"checkbox\">\r\n                            <span class=\"slider round\"></span>\r\n                         </label>\r\n                         ยังเป็น\r\n                    </td>\r\n                </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n\r\n\r\n        <div id=\"stars\"></div>\r\n        <div id=\"stars2\"></div>\r\n        <div id=\"stars3\"></div>\r\n       \r\n   \r\n\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/total/total.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/total/total.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<app-nav-bar></app-nav-bar>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-md-offset-3\" id=\"form\">\r\n            <div class=\"card-body\">\r\n                <h1 class=\"Header text-center text-white\">ยอดขาย</h1>\r\n                <p>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped table-bordered table-hover\">\r\n                            <thead class=\"thead\">\r\n                                <tr>\r\n                                    <th>ID ออเดอร์</th>\r\n                                    <th>ยอดขาย</th>\r\n                                    <th>วันที่/เดือน/ปี</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngFor=\"let menu of menus; let i = index\" (click)=\"openModal(modalShowMenuList, menu)\">\r\n                                <tr>\r\n                                    <th scope=\"row\">{{menu.orderId + i}}</th>\r\n                                    <td>{{menu.sumTotal}}</td>\r\n                                    <td>{{menu.timeStamp.seconds * 1000 | date: 'dd/MM/yyyy'}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"tfoot\">\r\n                                <tr>\r\n                                    <td colspan=\"2\" class=\"text-right\">ยอดรวม</td>\r\n                                    <td>{{ allTotal }}</td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <!--end table total-->\r\n\r\n        <!-- <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n                <div class=\"col-md-12 col-md-offset-3\" id=\"form\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-striped table-bordered table-hover\">\r\n                                    <thead class=\"thead\">\r\n                                        <tr>\r\n                                            <th>ลำดับที่</th>\r\n                                            <th>ชื่อเมนู</th>\r\n                                            <th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n                                            <th class=\"text-center\">พิเศษ</th>\r\n                                            <th class=\"text-center\">ไข่ดาว</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <th scope=\"row\"></th>\r\n                                            <td></td>\r\n                                            <td class=\"text-right\"></td>\r\n                                            <td></td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                     </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                 </div> -->\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- modal ของออเดอร์ -->\r\n<ng-template #modalShowMenuList let-modal>\r\n    <div>\r\n        <div class=\"col-md-12 col-md-offset-3\" id=\"form\">\r\n            <div class=\"card-body\">\r\n                    <div class=\"orderuserID\">\r\n                            <header>\r\n                                 <h2>ข้อมูลลูกค้า</h2>\r\n                            </header>\r\n                                <ul>\r\n                                        <li><label for=\"name\">ชื่อลูกค้า: {{menuByOrderList.name}}</label></li>\r\n                                        <li><label for=\"tel\">โทรศัพท์: {{menuByOrderList.tel}}</label></li>\r\n                                        <li><label for=\"address\">ที่อยู่: {{menuByOrderList.address}}</label></li>\r\n                                </ul>\r\n                        </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-hover\">\r\n                        <thead class=\"thead\">\r\n                            <tr>\r\n                                <th>ลำดับที่</th>\r\n                                <th>ชื่อเมนู</th>\r\n                                <th class=\"text-right\" scope=\"col\">จำนวน</th>\r\n                                <th class=\"text-center\">พิเศษ</th>\r\n                                <th class=\"text-center\">ไข่ดาว</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let menu of menuByOrderList.foodName; let i = index\">\r\n                                <tr>\r\n                                    <th scope=\"row\">{{ i+1 }}</th>\r\n                                    <td>{{ menu.foodName }}</td>\r\n                                    <td class=\"text-right\">{{ menu.foodNum }}</td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"menu.optExtra\">\r\n                                            พิเศษ\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"!menu.optExtra\">\r\n                                            ธรรมดา\r\n                                        </ng-container>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ng-container *ngIf=\"menu.optEgg\">\r\n                                            ใส่\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"!menu.optEgg\">\r\n                                            ไม่ใส่\r\n                                        </ng-container>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<div id=\"stars\"></div>\r\n<div id=\"stars2\"></div>\r\n<div id=\"stars3\"></div>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_total_total_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/total/total.component */ "./src/app/pages/total/total.component.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/food-list/food-list.component */ "./src/app/pages/food-list/food-list.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _option_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option/login/login.component */ "./src/app/option/login/login.component.ts");
/* harmony import */ var _pages_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/check-list/check-list.component */ "./src/app/pages/check-list/check-list.component.ts");









var routes = [
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    { path: 'auth', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"] },
    { path: 'login', component: _option_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], canActivate: [_pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]] },
    { path: 'order', component: _pages_order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"] },
    { path: 'food-list/:id', component: _pages_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_5__["FoodListComponent"] },
    { path: 'total', component: _pages_total_total_component__WEBPACK_IMPORTED_MODULE_3__["TotalComponent"] },
    { path: 'check-list', component: _pages_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_8__["CheckListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _pages_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/food-list/food-list.component */ "./src/app/pages/food-list/food-list.component.ts");
/* harmony import */ var _pages_total_total_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/total/total.component */ "./src/app/pages/total/total.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _option_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./option/nav-bar/nav-bar.component */ "./src/app/option/nav-bar/nav-bar.component.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _option_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./option/add-item/add-item.component */ "./src/app/option/add-item/add-item.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _option_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./option/login/login.component */ "./src/app/option/login/login.component.ts");
/* harmony import */ var _pages_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/check-list/check-list.component */ "./src/app/pages/check-list/check-list.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                _pages_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_10__["FoodListComponent"],
                _pages_total_total_component__WEBPACK_IMPORTED_MODULE_11__["TotalComponent"],
                _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
                _option_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _option_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_15__["AddItemComponent"],
                _option_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _pages_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_19__["CheckListComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'Food-Management'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"]
            ],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_14__["ItemService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/option/add-item/add-item.component.css":
/*!********************************************************!*\
  !*** ./src/app/option/add-item/add-item.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.Management{\r\n    font-size: 40px;\r\n    font-family: Agency FB;\r\n    font-weight: 700;\r\n    color:  #FEFDFD;\r\n    \r\n    \r\n}\r\n\r\n.textName{\r\n    height: 50px;\r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n    color: rgb(180, 178, 178);\r\n    \r\n}\r\n\r\n.thead{\r\n    background-color: rgb(2, 0, 1);\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.form-group{\r\n    padding-bottom: 5%;\r\n    margin: auto;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 60px;\r\n    background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);\r\n    \r\n}\r\n\r\n.userAction{\r\n    text-align:center;\r\n   \r\n}\r\n\r\n.btn1{\r\n    width: 130px;\r\n    height: 50px;\r\n    background-color: transparent;\r\n    border: 4px solid white;\r\n    border-radius: 25px;\r\n    -webkit-transition: 1s ease;\r\n    transition: 1s ease;\r\n    text-align: center;\r\n    color: white;\r\n    \r\n}\r\n\r\n.btn2{\r\n    width: 130px;\r\n    height: 50px;\r\n    background-color: transparent;\r\n    border: 4px solid white;\r\n    border-radius: 25px;\r\n    -webkit-transition: 1s ease;\r\n    transition: 1s ease;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.btn3{\r\n    width: 130px;\r\n    height: 50px;\r\n    background-color: transparent;\r\n    border: 4px solid white;\r\n    border-radius: 25px;\r\n    -webkit-transition: 1s ease;\r\n    transition: 1s ease;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.btn1:hover{\r\n    letter-spacing: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%); \r\n}\r\n\r\n.btn2:hover{\r\n    letter-spacing: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%); \r\n}\r\n\r\n.btn3:hover{\r\n    letter-spacing: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%); \r\n}\r\n\r\n.input-group:hover{\r\n    box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3, 0 0 80px #2196f3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTs7O0FBR25COztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLGdCQUFnQjtJQUNoQixpRkFBaUY7O0FBRXJGOztBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpRkFBaUY7QUFDckY7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpRkFBaUY7QUFDckY7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpRkFBaUY7QUFDckY7O0FBR0E7SUFDSSwrREFBK0Q7QUFDbkUiLCJmaWxlIjoic3JjL2FwcC9vcHRpb24vYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uTWFuYWdlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuY3kgRkI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICAjRkVGREZEO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4udGV4dE5hbWV7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiKDE4MCwgMTc4LCAxNzgpO1xyXG4gICAgXHJcbn1cclxuXHJcbi50aGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAwLCAxKTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICNBNDQ1QjIgMCUsICNENDE4NzIgNTIlLCAjRkYwMDY2IDEwMCUpO1xyXG4gICAgXHJcbn1cclxuLnVzZXJBY3Rpb257XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgXHJcbn1cclxuLmJ0bjF7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4uYnRuMntcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuM3tcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjE6aG92ZXJ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjRkYwNTdDIDAlLCAjOEQwQjkzIDUwJSwgIzMyMTU3NSAxMDAlKTsgXHJcbn1cclxuLmJ0bjI6aG92ZXJ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjRkYwNTdDIDAlLCAjOEQwQjkzIDUwJSwgIzMyMTU3NSAxMDAlKTsgXHJcbn1cclxuLmJ0bjM6aG92ZXJ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjRkYwNTdDIDAlLCAjOEQwQjkzIDUwJSwgIzMyMTU3NSAxMDAlKTsgXHJcbn1cclxuXHJcblxyXG4uaW5wdXQtZ3JvdXA6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjE5NmYzLDAgMCA0MHB4ICMyMTk2ZjMsIDAgMCA4MHB4ICMyMTk2ZjM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/option/add-item/add-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/option/add-item/add-item.component.ts ***!
  \*******************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(itemService, detail) {
        var _this = this;
        this.itemService = itemService;
        this.item = {
            name: '',
            address: '',
            tel: ''
        };
        this.startAt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.endAt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.nameFilter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.telFilter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.addressFilter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.nameFilter, this.telFilter, this.addressFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 3), name = _b[0], tel = _b[1], address = _b[2];
            return detail.collection('items', function (ref) {
                var query = ref;
                if (name) {
                    query = query.where('item.name', '==', _this.item.name);
                }
                ;
                if (tel) {
                    query = query.where('item.tel', '==', _this.item.tel);
                }
                ;
                if (address) {
                    query = query.where('item.address', '==', _this.item.address);
                }
                ;
                return query;
            }).valueChanges();
        }));
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.onInsert = function () {
        if (this.item.name != '' && this.item.tel != '' && this.item.address != '') {
            this.itemService.addItem(this.item);
        }
    };
    AddItemComponent.prototype.filter = function () {
        this.nameFilter.next(this.item.name ? this.item.name : null);
        this.telFilter.next(this.item.tel ? this.item.tel : null);
        this.addressFilter.next(this.item.address ? this.item.address : null);
    };
    AddItemComponent.ctorParameters = function () { return [
        { type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/option/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/option/add-item/add-item.component.css")]
        })
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/option/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/option/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/option/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/option/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/option/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/option/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/option/nav-bar/nav-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/option/nav-bar/nav-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/option/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/option/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/option/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/option/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/auth/auth.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-section{\r\n\tmargin: 0 auto;\r\n\tmargin-top: 130px;\r\n\tpadding: 0;\r\n}\r\n.modal-content {\r\n\tbackground-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);\r\n\topacity: .95;\r\n\tpadding: 0 18px;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t\r\n}\r\n.logo-img{\r\n\tmargin-top: -50px;\r\n\tmargin-bottom: 35px;\r\n}\r\n.logo-img img{\r\n\theight: 150px;\r\n\twidth: 150px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 0px 2px #0c0c0c;\r\n}\r\n.form-group{\r\n\tmargin-bottom: 25px;\r\n}\r\n.form-group input {\r\n\theight: 42px;\r\n\tborder-radius: 5px;\r\n\tborder: 0;\r\n\tfont-size: 18px;\r\n}\r\n.form-control:hover{\r\n\tbox-shadow: 0 0 10px #2196f3,0 0 40px #2196f3, 0 0 80px #2196f3;\r\n}\r\n.btn{\r\n\tcolor:black;\r\n    text-transform: uppercase;\r\n    letter-spacing: 6px;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    background: none;\r\n    border: 1px solid white;\r\n}\r\n.btn:hover{\r\n    color: white;\r\n    background: #2196f3;\r\n    box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3, 0 0 80px #2196f3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsaUZBQWlGO0NBQ2pGLFlBQVk7Q0FDWixlQUFlO0NBQ2YsNEVBQTRFOztBQUU3RTtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtEQUErRDtBQUNoRTtBQUVBO0NBQ0MsV0FBVztJQUNSLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsK0RBQStEO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWN0aW9ue1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDEzMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjQTQ0NUIyIDAlLCAjRDQxODcyIDUyJSwgI0ZGMDA2NiAxMDAlKTtcclxuXHRvcGFjaXR5OiAuOTU7XHJcblx0cGFkZGluZzogMCAxOHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblx0XHJcbn1cclxuLmxvZ28taW1ne1xyXG5cdG1hcmdpbi10b3A6IC01MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmxvZ28taW1nIGltZ3tcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdHdpZHRoOiAxNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAycHggIzBjMGMwYztcclxufVxyXG4uZm9ybS1ncm91cHtcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0IHtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbDpob3ZlcntcclxuXHRib3gtc2hhZG93OiAwIDAgMTBweCAjMjE5NmYzLDAgMCA0MHB4ICMyMTk2ZjMsIDAgMCA4MHB4ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5idG57XHJcblx0Y29sb3I6YmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzIxOTZmMywwIDAgNDBweCAjMjE5NmYzLCAwIDAgODBweCAjMjE5NmYzO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(ItemService, router) {
        this.ItemService = ItemService;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.ItemService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/order']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/pages/auth/auth.component.css")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/check-list/check-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/check-list/check-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container{\r\n    background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);   \r\n    min-height: 700px;\r\n    padding: 5px 40px 40px 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 50px;    \r\n}\r\n\r\n.Management{\r\n    font-size: 40px;\r\n    font-family: Agency FB;\r\n    font-weight: 700;\r\n    color:  #FEFDFD;\r\n    border-bottom-style: ridge;\r\n}\r\n\r\n.textName{\r\n    height: 50px;\r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n    color: #FEFDFD;\r\n}\r\n\r\n.table{\r\n    background-color:  #FEFDFD;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n.thead{\r\n    background-color: rgb(254, 255, 255);\r\n}\r\n\r\n/* .btn1,.btn2{\r\n    top: 50%;\r\n    left: 50%;\r\n    background: none;\r\n    color: black;\r\n    width: 120px;\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    transition: .6s;\r\n    overflow: hidden;\r\n} */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 20px;\r\n    vertical-align: middle;\r\n    margin-top: 8px;\r\n  }\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgb(235, 8, 8);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  \r\n  }\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 14px;\r\n    left: 2px;\r\n    bottom: 2px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\ninput:checked + .slider {\r\n    background-color: rgb(7, 233, 7);\r\n  }\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.btn{\r\n    font-weight: 700;\r\n    background-color: transparent;\r\n    border: 1px solid rgba(8, 8, 8, 0.24);\r\n    border-radius: 25px;\r\n    color: #000;\r\n    }\r\n\r\n.btn:hover{\r\n    background-color: #FF0066; \r\n    color: white;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2stbGlzdC9jaGVjay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUZBQWlGO0lBQ2pGLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNEVBQTRFO0lBQzVFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNEVBQTRFO0lBQzVFLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjs7QUFFQSxlQUFlLFlBQVksQ0FBQzs7QUFFNUI7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGVBQWU7O0VBRWpCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWDs7QUFFSjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEVBQTBFO0FBQzlFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2stbGlzdC9jaGVjay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjQTQ0NUIyIDAlLCAjRDQxODcyIDUyJSwgI0ZGMDA2NiAxMDAlKTsgICBcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHggNDBweCA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG59XHJcblxyXG4uTWFuYWdlbWVudHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuY3kgRkI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICAjRkVGREZEO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogcmlkZ2U7XHJcbn1cclxuLnRleHROYW1le1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNGRUZERkQ7XHJcbn1cclxuLnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNGRUZERkQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuLnRoZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4vKiAuYnRuMSwuYnRuMntcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IC42cztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0gKi9cclxuXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxyXG4gIFxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgOCwgOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMjMzLCA3KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuLmJ0bntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOCwgOCwgOCwgMC4yNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwNjY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/check-list/check-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/check-list/check-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckListComponent", function() { return CheckListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");




var CheckListComponent = /** @class */ (function () {
    function CheckListComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
        this.totals = {
            orderId: 62001,
            id: '',
            name: '',
            address: '',
            tel: '',
            foodName: '',
            sumTotal: 0,
            timeStamp: null,
        };
        this.isCollapsed = [];
    }
    CheckListComponent.prototype.ngOnInit = function () {
        this.items = JSON.parse(localStorage.getItem('id'));
        this.order = JSON.parse(localStorage.getItem('order'));
        this.total = JSON.parse(localStorage.getItem('total'));
        this.sumNum = JSON.parse(localStorage.getItem('num'));
        console.log(this.items);
        console.log(this.order);
    };
    CheckListComponent.prototype.confirmToSend = function () {
        this.totals.name = this.items.name;
        this.totals.tel = this.items.tel;
        this.totals.address = this.items.address;
        this.totals.foodName = JSON.stringify(this.order);
        this.totals.sumTotal = this.total;
        this.totals.timeStamp = this.itemService.timeStamp();
        this.itemService.addOrder(this.totals);
        console.log(this.totals);
        this.router.navigate(['total']);
    };
    CheckListComponent.prototype.showOrder = function () {
    };
    CheckListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
    ]; };
    CheckListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-list',
            template: __webpack_require__(/*! raw-loader!./check-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/check-list/check-list.component.html"),
            styles: [__webpack_require__(/*! ./check-list.component.css */ "./src/app/pages/check-list/check-list.component.css")]
        })
    ], CheckListComponent);
    return CheckListComponent;
}());



/***/ }),

/***/ "./src/app/pages/food-list/food-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/food-list/food-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container{\r\n    background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);   \r\n    min-height: 700px;\r\n    padding: 5px 40px 40px 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 50px;  \r\n}\r\n\r\n.col-8{\r\n    left: 15%;\r\n}\r\n\r\n.colOrder{\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-top: -20;\r\n    padding-bottom: 50px;\r\n    background: transparent;\r\n    border: 1px solid white;\r\n}\r\n\r\n.form-control{\r\n    width: 50%;\r\n}\r\n\r\n.titleList{\r\n    top: 50%;\r\n    left: 50%;\r\n    background-color: #fff;\r\n    color:#000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n    font-size: 2em;\r\n    mix-blend-mode: screen;\r\n    box-shadow: 0 0 16px #000,0 0 32px #000;\r\n    opacity: 0.9;\r\n    letter-spacing: 8px;  \r\n}\r\n\r\n.topnav {\r\n    background-color:transparent;\r\n    overflow: hidden;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.topnav table{\r\n    font-size: 18px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n  }\r\n\r\n/* Change the color of links on hover */\r\n\r\n.topnav a:hover {\r\n    background-color: rgba(221, 221, 221, 0.342);\r\n    color: black;\r\n  }\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.topnav a.active {\r\n    background-color: rgba(240, 14, 108, 0.795);\r\n    color: rgb(14, 12, 12);\r\n  }\r\n\r\n.table{\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 70px;\r\n    background-color: #FEFDFD;\r\n    overflow-x: auto;\r\n  }\r\n\r\n.table2{\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 50%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    background-color: #FEFDFD;\r\n    margin-top: 30px;\r\n  }\r\n\r\n.tfoot{\r\n font-size: 20px;\r\n background: rgb(61, 61, 61);\r\n border-top: 1px solid rgb(146, 146, 146);\r\n color: white;\r\n}\r\n\r\n.btn{\r\n    font-weight: 700;\r\n    background-color: transparent;\r\n    border: 1px solid rgba(8, 8, 8, 0.24);\r\n    border-radius: 25px;\r\n    color: #000;\r\n    }\r\n\r\n.btn:hover{\r\n    background-color: #FF0066; \r\n    color: white;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.btn2{\r\n    padding: 0;\r\n    margin: auto;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    letter-spacing: 5px;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    background: none;\r\n    border: 1px solid white;\r\n}\r\n\r\n.btn2:hover{\r\n    color: white;\r\n    background: #2196f3;\r\n    box-shadow: 0 0 10px #2196f3,0 0 40px #2196f3, 0 0 80px #2196f3;\r\n}\r\n\r\n.switch{\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 20px;\r\n    vertical-align: middle;\r\n    margin-top: 8px;\r\n}\r\n\r\n.switch input {display:none;}\r\n\r\n.slider{\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #A1A6AB;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  \r\n}\r\n\r\n.slider:before{\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 14px;\r\n    left: 2px;\r\n    bottom: 2px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n    background-color: #FF0066;\r\n}\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n.info{\r\n    width: 50%;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 30px;\r\n    background: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%); \r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #000;\r\n}\r\n\r\n.info aside{\r\n    padding-left: 10px;\r\n    width: 180%;\r\n    margin: 0;\r\n    background: transparent;\r\n}\r\n\r\n.info header nav h3{\r\n    background: rgb(61, 61, 61);\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.sumListOrder footer h2{\r\n    letter-spacing: 3px;\r\n    border-top: 3px solid white;\r\n    font-size: 2.5rem;\r\n    padding-top: 20px;\r\n}\r\n\r\n.orderuserID{\r\n    width: 50%;\r\n    padding-top: 0px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 30px;\r\n    background: #FEFDFD;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #000;\r\n    margin-top: 30px;\r\n}\r\n\r\n.orderuserID h2{ \r\n    letter-spacing: 2px;\r\n    font-size: 2.0rem;\r\n    background:  rgb(61, 61, 61);\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.orderuserID ul li{\r\n    list-style: none;\r\n}\r\n\r\n.orderuserID ul{\r\n    display: '';\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vZC1saXN0L2Zvb2QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlGQUFpRjtJQUNqRixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLDRFQUE0RTtJQUM1RSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUUsOENBQThDOztBQUM5QztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0UsNENBQTRDO0lBQzVDLFlBQVk7RUFDZDs7QUFFQSwyQ0FBMkM7O0FBQzNDO0lBQ0UsMkNBQTJDO0lBQzNDLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLFdBQVc7SUFDWCw0RUFBNEU7SUFDNUUsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCw0RUFBNEU7SUFDNUUseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7QUFDRjtDQUNDLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0Isd0NBQXdDO0NBQ3hDLFlBQVk7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1g7O0FBRUo7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBFQUEwRTtBQUM5RTs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQSxlQUFlLFlBQVksQ0FBQzs7QUFFNUI7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjs7QUFFRSxvQkFBb0I7O0FBQ3RCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDJFQUEyRTtJQUMzRSw0RUFBNEU7SUFDNUUsV0FBVztBQUNmOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDRFQUE0RTtJQUM1RSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb29kLWxpc3QvZm9vZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjQTQ0NUIyIDAlLCAjRDQxODcyIDUyJSwgI0ZGMDA2NiAxMDAlKTsgICBcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHggNDBweCA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICBcclxufVxyXG4uY29sLTh7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbn1cclxuLmNvbE9yZGVye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAtMjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi50aXRsZUxpc3R7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE2cHggIzAwMCwwIDAgMzJweCAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDsgIFxyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnRvcG5hdiB0YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuICAvKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zNDIpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE0LCAxMDgsIDAuNzk1KTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEyLCAxMik7XHJcbiAgfVxyXG5cclxuLnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUZERkQ7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbi50YWJsZTJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUZERkQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuLnRmb290e1xyXG4gZm9udC1zaXplOiAyMHB4O1xyXG4gYmFja2dyb3VuZDogcmdiKDYxLCA2MSwgNjEpO1xyXG4gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOCwgOCwgOCwgMC4yNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwNjY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn1cclxuLmJ0bjJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uYnRuMjpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjE5NmYzLDAgMCA0MHB4ICMyMTk2ZjMsIDAgMCA4MHB4ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5zd2l0Y2h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuICBcclxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuICBcclxuLnNsaWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMUE2QUI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICBcclxufVxyXG4gIFxyXG4uc2xpZGVyOmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGxlZnQ6IDJweDtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4gIFxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDY2O1xyXG59XHJcbiAgXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuICBcclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG4gIFxyXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuICBcclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICNBNDQ1QjIgMCUsICNENDE4NzIgNTIlLCAjRkYwMDY2IDEwMCUpOyBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uaW5mbyBhc2lkZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAxODAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbmZvIGhlYWRlciBuYXYgaDN7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjEsIDYxLCA2MSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VtTGlzdE9yZGVyIGZvb3RlciBoMntcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5vcmRlcnVzZXJJRHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRUZERkQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5vcmRlcnVzZXJJRCBoMnsgXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAyLjByZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDYxLCA2MSwgNjEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vcmRlcnVzZXJJRCB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5vcmRlcnVzZXJJRCB1bHtcclxuICAgIGRpc3BsYXk6ICcnO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/food-list/food-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/food-list/food-list.component.ts ***!
  \********************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_JSON_Curry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/JSON/Curry */ "./src/assets/JSON/Curry.ts");
/* harmony import */ var src_assets_JSON_Fried__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/JSON/Fried */ "./src/assets/JSON/Fried.ts");
/* harmony import */ var src_assets_JSON_Soup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/JSON/Soup */ "./src/assets/JSON/Soup.ts");
/* harmony import */ var src_assets_JSON_Extra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/JSON/Extra */ "./src/assets/JSON/Extra.ts");
/* harmony import */ var src_assets_JSON_New__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/JSON/New */ "./src/assets/JSON/New.ts");
/* harmony import */ var src_assets_JSON_Other__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/JSON/Other */ "./src/assets/JSON/Other.ts");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var FoodListComponent = /** @class */ (function () {
    function FoodListComponent(ItemService, route, router) {
        var _this = this;
        this.ItemService = ItemService;
        this.route = route;
        this.router = router;
        this.menuCurry = src_assets_JSON_Curry__WEBPACK_IMPORTED_MODULE_2__["curryData"];
        this.menuFried = src_assets_JSON_Fried__WEBPACK_IMPORTED_MODULE_3__["friedData"];
        this.menuSoup = src_assets_JSON_Soup__WEBPACK_IMPORTED_MODULE_4__["soupData"];
        this.menuExtra = src_assets_JSON_Extra__WEBPACK_IMPORTED_MODULE_5__["extraData"];
        this.menuNew = src_assets_JSON_New__WEBPACK_IMPORTED_MODULE_6__["newData"];
        this.menuOther = src_assets_JSON_Other__WEBPACK_IMPORTED_MODULE_7__["otherData"];
        this.orderSelectedList = [];
        this.cloneData = [];
        this.route.params.subscribe(function (params) {
            _this.ItemService.getDetailById(params['id']).subscribe(function (i) {
                _this.items = i;
                console.log(_this.items);
            });
        });
    }
    FoodListComponent.prototype.ngOnInit = function () {
    };
    FoodListComponent.prototype.submitCurryMenu = function (menuCurrys) {
        var cloneData = JSON.parse(JSON.stringify(menuCurrys));
        this.orderSelectedList.push(cloneData);
        this.sum(menuCurrys);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.submitNewMenu = function (menuNews) {
        var cloneData = JSON.parse(JSON.stringify(menuNews));
        this.orderSelectedList.push(cloneData);
        this.sum(menuNews);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.submitFriedMenu = function (menuFrieds) {
        var cloneData = JSON.parse(JSON.stringify(menuFrieds));
        this.orderSelectedList.push(cloneData);
        this.sum(menuFrieds);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.submitSoupMenu = function (menuSoups) {
        var cloneData = JSON.parse(JSON.stringify(menuSoups));
        this.orderSelectedList.push(cloneData);
        this.sum(menuSoups);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.submitExtra = function (menuExtras) {
        var cloneData = JSON.parse(JSON.stringify(menuExtras));
        this.orderSelectedList.push(cloneData);
        this.sum(menuExtras);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.submitOtherMenu = function (menuOthers) {
        var cloneData = JSON.parse(JSON.stringify(menuOthers));
        this.orderSelectedList.push(cloneData);
        this.sum(menuOthers);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.deleteSelectMenu = function (i) {
        this.orderSelectedList.splice(i, 1);
        this.sum(this.orderSelectedList);
        console.log(this.orderSelectedList);
    };
    FoodListComponent.prototype.sum = function (menu) {
        var sumTotalPrice = 0;
        var sumNum = 0;
        var cloneData = JSON.parse(JSON.stringify(this.orderSelectedList));
        cloneData.forEach(function (order) {
            order.foodPrice *= order.foodNum;
            sumTotalPrice += order.foodPrice;
            if (order.optExtra == true) {
                var extraPrice = order.foodNum * 5;
                sumTotalPrice = sumTotalPrice + extraPrice;
            }
            if (order.optEgg == true) {
                var eggPrice = order.foodNum * 10;
                sumTotalPrice = sumTotalPrice + eggPrice;
            }
            sumNum += order.foodNum;
            console.log(order);
        });
        this.total = sumTotalPrice;
        this.sumNum = sumNum;
        console.log(this.total);
    };
    FoodListComponent.prototype.confirmOrder = function () {
        localStorage.setItem('id', JSON.stringify(this.items));
        localStorage.setItem('order', JSON.stringify(this.orderSelectedList));
        localStorage.setItem('total', JSON.stringify(this.total));
        localStorage.setItem('num', JSON.stringify(this.sumNum));
        this.router.navigate(['check-list']);
    };
    FoodListComponent.ctorParameters = function () { return [
        { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    FoodListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food-list',
            template: __webpack_require__(/*! raw-loader!./food-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/food-list/food-list.component.html"),
            styles: [__webpack_require__(/*! ./food-list.component.css */ "./src/app/pages/food-list/food-list.component.css")]
        })
    ], FoodListComponent);
    return FoodListComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/order/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    width: 100px;\r\n    padding: 0;\r\n    margin: 0;\r\n    \r\n}\r\n\r\n\r\n.container{\r\n    background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);   \r\n    min-height: 700px;\r\n    padding: 5px 40px 40px 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.Management{\r\n    top: 50%;\r\n    left: 50%;\r\n    background-color: #fff;\r\n    color:#000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n    font-size: 2em;\r\n    mix-blend-mode: screen;\r\n    box-shadow: 0 0 16px #000,0 0 32px #000;\r\n    opacity: 0.9;\r\n    letter-spacing: 8px;  \r\n}\r\n\r\n\r\n.row{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.textName{\r\n    height: 50px;\r\n}\r\n\r\n\r\nlabel{\r\n    font-size: 18px;\r\n    color: #FEFDFD;\r\n    \r\n}\r\n\r\n\r\n.thead{\r\n    \r\n    background-color: #FF0066; \r\n    font-style: bold;\r\n    color: #FEFDFD;\r\n}\r\n\r\n\r\ntable {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 70px;\r\n    background-color: #FEFDFD;\r\n    overflow-x: auto;\r\n    \r\n  }\r\n\r\n\r\n.btn1 {\r\nfont-weight: 600;\r\nbackground-color: transparent;\r\nborder: 4px solid white;\r\nborder-radius: 25px;\r\n}\r\n\r\n\r\n.btn1:hover {\r\nbackground-color: #4CAF50; /* Green */\r\ncolor: white;\r\nbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  }\r\n\r\n\r\n.btn2 {\r\nfont-weight: 600;\r\nbackground-color: transparent;\r\nborder: 4px solid white;\r\nborder-radius: 25px;\r\n }\r\n\r\n\r\n.btn2:hover {\r\nbackground-color: rgb(190, 22, 22); /* Green */\r\ncolor: white;\r\nbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 20px;\r\n    vertical-align: middle;\r\n    margin-top: 8px;\r\n  }\r\n\r\n\r\n.switch input {display:none;}\r\n\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgb(171, 161, 162);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  \r\n  }\r\n\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 14px;\r\n    left: 2px;\r\n    bottom: 2px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n\r\ninput:checked + .slider {\r\n    background-color: #FF0066;\r\n  }\r\n\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUzs7QUFFYjs7O0FBR0E7SUFDSSxpRkFBaUY7SUFDakYsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0RUFBNEU7SUFDNUUsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7OztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEVBQTRFO0lBQzVFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCOztFQUVsQjs7O0FBRUY7QUFDQSxnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7OztBQUVBO0FBQ0EseUJBQXlCLEVBQUUsVUFBVTtBQUNyQyxZQUFZO0FBQ1osMEVBQTBFO0VBQ3hFOzs7QUFFRjtBQUNBLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtDQUNsQjs7O0FBRUQ7QUFDQSxrQ0FBa0MsRUFBRSxVQUFVO0FBQzlDLFlBQVk7QUFDWiwwRUFBMEU7QUFDMUU7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOzs7QUFFQSxlQUFlLFlBQVksQ0FBQzs7O0FBRTVCO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixlQUFlOztFQUVqQjs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7QUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7O0FBRUE7SUFDRSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0VBQzdCOzs7QUFFQSxvQkFBb0I7OztBQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIyNWRlZywgI0E0NDVCMiAwJSwgI0Q0MTg3MiA1MiUsICNGRjAwNjYgMTAwJSk7ICAgXHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICAgIHBhZGRpbmc6IDVweCA0MHB4IDQwcHggNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5NYW5hZ2VtZW50e1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNnB4ICMwMDAsMCAwIDMycHggIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7ICBcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGV4dE5hbWV7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZFRkRGRDtcclxuICAgIFxyXG59XHJcblxyXG4udGhlYWR7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwNjY7IFxyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIGNvbG9yOiAjRkVGREZEO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGREZEO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIFxyXG4gIH1cclxuXHJcbi5idG4xIHtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uYnRuMTpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IC8qIEdyZWVuICovXHJcbmNvbG9yOiB3aGl0ZTtcclxuYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgfVxyXG4gXHJcbi5idG4yIHtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gfSBcclxuXHJcbi5idG4yOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMjIsIDIyKTsgLyogR3JlZW4gKi9cclxuY29sb3I6IHdoaXRlO1xyXG5ib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAxNjEsIDE2Mik7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDY2O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");



var OrderComponent = /** @class */ (function () {
    function OrderComponent(itemService) {
        this.itemService = itemService;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    OrderComponent.prototype.deleteItem = function (event, item) {
        this.itemService.deleteItem(item);
    };
    OrderComponent.prototype.goToProductDetails = function (id) {
        this.router.navigate(['/food-list', id]);
    };
    OrderComponent.ctorParameters = function () { return [
        { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }
    ]; };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/pages/order/order.component.css")]
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/total/total.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/total/total.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container{\r\n    background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);   \r\n    min-height: 700px;\r\n    padding: 5px 40px 40px 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 50px;\r\n\r\n}\r\n\r\n.Management{\r\n    font-size: 40px;\r\n    font-family: Agency FB;\r\n    font-weight: 700;\r\n    color:  #FEFDFD;\r\n    border-bottom-style: ridge;\r\n}\r\n\r\n.textName{\r\n    height: 50px;\r\n}\r\n\r\nlabel{\r\n    font-size: 18px;\r\n    color: #FEFDFD;\r\n}\r\n\r\n.table{\r\n    background-color:  #FEFDFD;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n.thead{\r\n    background-color: rgb(254, 255, 255);\r\n}\r\n\r\n.orderuserID h2{ \r\n    letter-spacing: 2px;\r\n    font-size: 2.0rem;\r\n    background:  rgb(61, 61, 61);\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG90YWwvdG90YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpRkFBaUY7SUFDakYsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0RUFBNEU7SUFDNUUsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNEVBQTRFO0lBQzVFLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG90YWwvdG90YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMjVkZWcsICNBNDQ1QjIgMCUsICNENDE4NzIgNTIlLCAjRkYwMDY2IDEwMCUpOyAgIFxyXG4gICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweCA0MHB4IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbn1cclxuLk1hbmFnZW1lbnR7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmN5IEZCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAgI0ZFRkRGRDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHJpZGdlO1xyXG59XHJcbi50ZXh0TmFtZXtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjRkVGREZEO1xyXG59XHJcbi50YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRkVGREZEO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG59XHJcbi50aGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDI1NSwgMjU1KTtcclxufVxyXG4ub3JkZXJ1c2VySUQgaDJ7IFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xyXG4gICAgYmFja2dyb3VuZDogIHJnYig2MSwgNjEsIDYxKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/total/total.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/total/total.component.ts ***!
  \************************************************/
/*! exports provided: TotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalComponent", function() { return TotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var TotalComponent = /** @class */ (function () {
    function TotalComponent(itemService, modalService) {
        this.itemService = itemService;
        this.modalService = modalService;
        this.orderSelectedList = [];
    }
    TotalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getTotalOrder().subscribe(function (menus) {
            _this.menus = menus;
            _this.menus.forEach(function (item) {
                item.foodName = JSON.parse(item.foodName);
            });
            var allTotal = 0;
            menus.forEach(function (order) {
                allTotal += order['sumTotal'];
            });
            _this.allTotal = allTotal;
        });
    };
    TotalComponent.prototype.openModal = function (modalShowMenuList, foodName) {
        this.menuByOrderList = [];
        this.modalService.open(modalShowMenuList, { size: 'lg' });
        this.menuByOrderList = foodName;
        console.log(this.menuByOrderList);
    };
    TotalComponent.ctorParameters = function () { return [
        { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    TotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total',
            template: __webpack_require__(/*! raw-loader!./total.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/total/total.component.html"),
            styles: [__webpack_require__(/*! ./total.component.css */ "./src/app/pages/total/total.component.css")]
        })
    ], TotalComponent);
    return TotalComponent;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);







var ItemService = /** @class */ (function () {
    function ItemService(detail, menuOrder, firebaseAuth) {
        this.detail = detail;
        this.menuOrder = menuOrder;
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
        this.itemCollection = this.detail.collection('items');
        this.totalCollection = this.menuOrder.collection('totalOrder');
        // this.items = this.detail.collection('items').valueChanges();
        this.menus = this.menuOrder.collection('totalOrder').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        this.items = this.detail.collection('items').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    ItemService.prototype.addItem = function (item) {
        this.itemCollection.add(item);
    };
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.detail.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.getDetailById = function (id) {
        return this.detail.collection('items').doc(id).valueChanges();
    };
    ItemService.prototype.addOrder = function (totalOrder) {
        this.totalCollection.add(totalOrder);
    };
    ItemService.prototype.getTotalOrder = function () {
        return this.menus;
    };
    ItemService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    ItemService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ItemService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser) {
                _this.firebaseAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    ItemService.prototype.timeStamp = function () {
        return firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp();
    };
    ItemService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
    ]; };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/assets/JSON/Curry.ts":
/*!**********************************!*\
  !*** ./src/assets/JSON/Curry.ts ***!
  \**********************************/
/*! exports provided: curryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curryData", function() { return curryData; });
var curryData = [
    {
        foodName: 'เขียวหวานไก่',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'พะแนงไก่',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'แกงคั่วกระดูกหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ต้มจืดเต้าหู้หมูสับ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'แกงฟักทอง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'แกงหมูเทโพ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    }
];


/***/ }),

/***/ "./src/assets/JSON/Extra.ts":
/*!**********************************!*\
  !*** ./src/assets/JSON/Extra.ts ***!
  \**********************************/
/*! exports provided: extraData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraData", function() { return extraData; });
var extraData = [
    {
        foodName: '3 ชั้นทอดน้ำปลา',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'คอหมูย่าง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'หมูทอดน้ำปลา',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ไก่อบโค้ก',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ไก่ย่างน้ำผึ้ง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    }
];


/***/ }),

/***/ "./src/assets/JSON/Fried.ts":
/*!**********************************!*\
  !*** ./src/assets/JSON/Fried.ts ***!
  \**********************************/
/*! exports provided: friedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friedData", function() { return friedData; });
var friedData = [
    {
        foodName: 'กระเพราไก่',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'กระเพราหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ไก่กระเทียม',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ไก่เทอริ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ผัดฟักทอง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'หมึกกระเทียม',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ปลาดุกผัดพริกแกง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'คั่วกลิ้งหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    }
];


/***/ }),

/***/ "./src/assets/JSON/New.ts":
/*!********************************!*\
  !*** ./src/assets/JSON/New.ts ***!
  \********************************/
/*! exports provided: newData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newData", function() { return newData; });
var newData = [
    {
        foodName: 'ข้าวขาหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ข้าวหมูแดง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ข้าวหมูกรอบ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    }
];


/***/ }),

/***/ "./src/assets/JSON/Other.ts":
/*!**********************************!*\
  !*** ./src/assets/JSON/Other.ts ***!
  \**********************************/
/*! exports provided: otherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherData", function() { return otherData; });
var otherData = [
    {
        foodName: '',
        foodPrice: 0,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
];


/***/ }),

/***/ "./src/assets/JSON/Soup.ts":
/*!*********************************!*\
  !*** ./src/assets/JSON/Soup.ts ***!
  \*********************************/
/*! exports provided: soupData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soupData", function() { return soupData; });
var soupData = [
    {
        foodName: 'ยำหมูยอ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ยำปลากระป๋อง',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ยำไข่ดาว',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ลาบหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'น้ำตกหมู',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ยำไก่แซ่บ',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    },
    {
        foodName: 'ยำไข่ต้มยางมะตูม',
        foodPrice: 50,
        foodNum: 0,
        optExtra: false,
        optEgg: false
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAa2XSo0QJ40XiEdXglyQEv7bLse5r_74c",
        authDomain: "food-management-b037c.firebaseapp.com",
        databaseURL: "https://food-management-b037c.firebaseio.com",
        projectId: "food-management-b037c",
        storageBucket: "",
        messagingSenderId: "82283315215",
        appId: "1:82283315215:web:75b504da2481134c"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TXT\Desktop\food-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map