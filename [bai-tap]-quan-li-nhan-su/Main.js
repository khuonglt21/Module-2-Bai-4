"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var StaffManager_1 = require("./StaffManager");
var staff1 = new Staff_1.Staff("Phạm", "An", new Date("2000,10,25"), "Hải Dương", "Giám đốc");
var staff2 = new Staff_1.Staff("Lê", "Thịnh", new Date("2000,9,20"), "Hà Nam", "Chủ tịch HĐQT");
var staff3 = new Staff_1.Staff("Lê", "Thành", new Date("2000,8,22"), "Hải Dương", "Tổng Giám đốc");
var staffManager = new StaffManager_1.StaffManager();
staffManager.addStaff(staff1, staff2, staff3);
staffManager.editStaffInfo(0, { firstName: "Khương", lastName: "Lê", address: "Hà Nội" });
staffManager.showList();