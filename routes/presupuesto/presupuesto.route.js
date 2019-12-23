const router = require('express').Router()
const Presupuesto = require('../../models/Presupuesto.model')

router.get('/', (req, res) => {
	Presupuesto.find()
		.then(presupuestos => res.status(200).json(presupuestos))
		.catch(err => res.status(400).json(`Error:${err}`))
})

router.post('/add', (req, res) => {
	const { title } = req.body
	const newPrespuesto = new Presupuesto({
		title
	})

	newPrespuesto
		.save()
		.then(data => res.status(200).json(data))
		.catch(err => res.status(400).json(`Error:${err}`))
})

router.route('/:id').get((req, res) => {
	Presupuesto.findById(req.params.id)
		.then(presupuestos => res.status(200).json(presupuestos))
		.catch(err => res.status(400).json(`Error:${err}`))
})

router.route('/:id').delete((req, res) => {
	Presupuesto.findByIdAndDelete(req.params.id)
		.then(() => res.status(200).json('Presupuesto eliminado.'))
		.catch(err => res.status(400).json(`Error:${err}`))
})

router.route('/update/:id').post((req, res) => {
	const { title } = req.body
	Presupuesto.findById(req.params.id)
		.then(presupuesto => {
			presupuesto.title = title

			presupuesto
				.save()
				.then(data => res.status(200).json(data))
				.catch(err => res.status(400).json(`Error:${err}`))
		})
		.catch(err => res.status(400).json(`Error:${err}`))
})

module.exports = router
