import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { pinController } from "./controllers/pin-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { settingsController } from "./controllers/settings-controller.js";
import { adminController } from "./controllers/admin-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addpin", config: dashboardController.addPin },
  { method: "GET", path: "/dashboard/deletepin/{id}", config: dashboardController.deletePin },
  { method: "POST", path: "/dashboard/filtercategory", config: dashboardController.filterCategory },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/pin/{id}", config: pinController.index },
  { method: "POST", path: "/pin/{id}/addtags", config: pinController.updatePin },
  { method: "POST", path: "/pin/{id}/addcategory", config: pinController.addCategory },
  { method: "POST", path: "/pin/{id}/uploadimage", config: pinController.updateImage },

  { method: "GET", path: "/admin", config: adminController.index },


  { method: "GET", path: "/settings", config: settingsController.index },
  { method: "POST", path: "/settings/updatename", config: settingsController.updateName },
  { method: "POST", path: "/settings/updateemail", config: settingsController.updateEmail },
  { method: "POST", path: "/settings/updatepassword", config: settingsController.updatePassword },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }

];