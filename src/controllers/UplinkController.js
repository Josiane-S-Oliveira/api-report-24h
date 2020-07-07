import db from '../database'
import { format } from 'date-fns'

class UplinkController {
    async index(req, res) {
        const { id } = req.params;
        let { rows } = await db.query("select * from device_up where device_name=$1 and received_at <= CURRENT_TIMESTAMP and received_at>= CURRENT_TIMESTAMP - interval '23 hours' ORDER BY received_at ", [id])
        
        rows = rows.map(row => {
            const dataArray = []

            for(let i = 0; i < 4; i++) {
                dataArray.push(row.data[i].toString(16))
            }

            row.received_at = format(row.received_at, 'dd/MM/Y HH:mm:ss')
            row.data = parseInt(dataArray.join(''), 16)

            return row;
        })

        res.json(rows)
    }
}

export default new UplinkController()