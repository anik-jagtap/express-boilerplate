class HomeController {
    static async home(req, res) {
        return res.send({
            success: true
        })
    }
}

export default HomeController;
