import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    // to update a module
    app.put("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;

        modulesDao.updateModule(moduleId, moduleUpdates);
        res.sendStatus(204);
    });

    // to delete a module
    app.delete("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        modulesDao.deleteModule(moduleId);
        res.sendStatus(204);
    });


}