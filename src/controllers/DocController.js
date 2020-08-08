class DocController {
    constructor() {}

    documentation(req, res) {
        return res.render("index.ejs");
    }
}

export default new DocController();
