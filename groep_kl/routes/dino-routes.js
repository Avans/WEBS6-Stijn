var express = require('express');
var dinoRouter = express.Router();


dinoRouter.route('/dinos')

    /**
     * @swagger
     * /dinos:
     *   get:
     *     description: Returns dinos
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: dinos
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/dino'
     */
    .get((req, res, next) => {

        var dinos = [
            { naam: "Barney", type: "T-rex", kleur: "paars/groen"},
            { naam: "Platfoet", type: "Langnek", kleur: "Bietje bruin"},
            { naam: "Dino", type: "Langek maar dan kleiner", kleur: "Flinstone roze"}
        ]

        req.myData = dinos;
        req.template = "dinos";
        next();

    })
    /**
     * @swagger
     * /dinos:
     *   post:
     *     description: Add a new dino
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: dino
     *         schema:
     *           type: object
     *           items:
     *             $ref: '#/definitions/dino'
     */
    .post((req, res) => res.send('Adding dinos'))


dinoRouter.route('/dinos/:id')
    .get((req, res) => res.send('Getting 1 dino'))
    .put((req, res) => res.send('Updating 1 dino'))
    .delete((req, res) => res.send('Deleting 1 dino'))

//return dinoRouter;
module.exports = dinoRouter;

