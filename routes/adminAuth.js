const express = require("express");
const { loginAdmin, registerAdmin } = require("../controllers/loginAdmin");

const router = express.Router();

const adminAuth = require("../middlewares/admin_auth");

const {
  addCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
  getCompany,
  getCompanyName,
} = require("../controllers/Admin/company");

const {
  addCompanyData,
  getCompanyDataDivided,
  updateCompanyData,
  deleteCompanyData,
  getCompanyData,
  getCompanyDataByDataId,
  upadateDatabyDataID,
  upadatedivided,
} = require("../controllers/Admin/comoanyDataDivided");
const { addClass } = require("../controllers/Admin/class");

router.post("/loginAdmin", loginAdmin);
router.post("/registerAdmin", adminAuth, registerAdmin);
router.get("/getCompanies", adminAuth, getCompanies);
router.post("/addCompany", adminAuth, addCompany);
router.post("/updateCompany/:id", adminAuth, updateCompany);
router.get("/getCompany/:id", adminAuth, getCompany);
router.get("/deleteCompany/:id", adminAuth, deleteCompany);
router.post("/addCompanyData", adminAuth, addCompanyData);
router.get("/getCompanyDataDivided", adminAuth, getCompanyDataDivided);
router.post("/updateCompanyData/:id", adminAuth, updateCompanyData);
router.get("/deleteCompanyData/:id", adminAuth, deleteCompanyData);
router.get("/getCompanyData/:id", adminAuth, getCompanyData);
router.get("/getCompanyDataByDataId/:id", adminAuth, getCompanyDataByDataId);

router.post("/updateCompanyDataID/:id", adminAuth, upadatedivided);

router.post("/addClass", adminAuth, addClass);

router.get("/getCompanyNames", adminAuth, getCompanyName);

module.exports = router;
