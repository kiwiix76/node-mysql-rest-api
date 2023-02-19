import { pool } from '../db.js';

// ############ GET ############

export const getPlantes = async (req, res) => {
    try {
        const [rows] = await pool.query( 'SELECT * FROM plante');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ GET ID ############

export const getPlante = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM plante WHERE id_plante = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Plante non trouvée' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ CREATE ############

export const createPlantes = async (req, res) => {
    const {name, botanical_name} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO plante(name, botanical_name) VALUES (? , ?)',
        [ name, botanical_name] );
         res.send({  
             id: rows.insertId,
             name,
             botanical_name,
         });
    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

// ############ DELETE ############

export const deletePlantes = async (req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM plante WHERE id = ?', [req.params.id]);

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

export const updatePlantes = async (req, res) => {
    const {id} = req.params
    const {name, botanical_name} = req.body;
    try {
        const [result] = await pool.query('UPDATE plante SET name = IFNULL(?, name), botanical_name = IFNULL(?, botanical_name) WHERE id = ?', [name, botanical_name, id]);
        console.log(result);
    
        if (result.affectedRows === 0 ) 
            return res.status(404).json({ message: 'Plante non trouvée' });

        const [rows] = await pool.query('SELECT * FROM plante WHERE id = ?', [id]);
        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message : 'Something goes wrong' });
    }
}

