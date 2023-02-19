import { pool } from '../db.js';

// ############ GET ############

export const getCueillettes = async (req, res) => {
    try {
        const [rows] = await pool.query( 'SELECT * FROM cueillette');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ GET ID ############

export const getCueillette = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cueillette WHERE id_cueillette = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Plante non trouvée' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ CREATE ############

export const createCueillettes = async (req, res) => {
    const {name, botanical_name} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO cueillette(id_cueillette, trouver_plante, reconnaitre) VALUES (? , ?, ?)',
        [ name, botanical_name] );
         res.send({  
             id_cueillette: rows.insertId,
             id_cueillette, 
             trouver_plante, 
             reconnaitre,
         });
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ DELETE ############

export const deleteCueillettes = async (req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM cueillette WHERE id = ?', [req.params.id]);

        if (rows.affectedRows <= 0 ) 
            return res.status(404).json({ message: 'Plante non trouvée' });
    
        res.sendStatuts(204);
    } catch (error) {
        return res.status(500).json({
            message : 'Something goes wrong'
        })
    }
}

// ############ UPDATE avec patch ############

export const updateCueillettes = async (req, res) => {
    const {id} = req.params
    const {name, botanical_name} = req.body;
    try {
        const [result] = await pool.query
        ('UPDATE cueillette SET trouver_plante = IFNULL(?, trouver_plante), reconnaitre = IFNULL(?, reconnaitre), WHERE id_cueillette = ?', 
        [trouver_plante, reconnaitre, id_cueillette]);
        console.log(result);
    
        if (result.affectedRows === 0 ) 
            return res.status(404).json({ message: 'Plante non trouvée' });

        const [rows] = await pool.query('SELECT * FROM cueillette WHERE id = ?', [id]);
        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

