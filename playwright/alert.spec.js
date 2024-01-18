// @ts-check
import { visualTest } from "../tools.js";

const name = "components-alert";

visualTest(name + "--info", { title: "alert--info" });
visualTest(name + "--warning", { title: "alert--warning" });
visualTest(name + "--danger", { title: "alert--danger" });
