import db from '../database'

class UplinkController {
    async index(req, res) {
        const { id } = req.params;
        const { rows } = await db.query("select * from device_up where device_name=$1 and received_at <= CURRENT_TIMESTAMP and received_at>= CURRENT_TIMESTAMP - interval '23 hours' ORDER BY received_at ", [id])
        res.json(rows)
    }
}

export default new UplinkController()