const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
     res.sendFile('./views/index.html', {root: __dirname })
    
})
 
module.exports = router;