const mongoose = require('mongoose')

const Schema = mongoose.Schema

const presupuestoSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)
const Presupuesto = mongoose.model('Presupuesto', presupuestoSchema)

module.exports = Presupuesto
