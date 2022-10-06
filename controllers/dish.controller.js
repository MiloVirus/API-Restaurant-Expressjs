        const dishesGet = (req, res)=>
        {
            res.json({'msg': 'get'})
        }

        const dishesPost = (req, res)=>
        {
            res.json({'msg': 'post'})
        }

        const dishesPut = (req, res)=>
        {
            res.json({'msg': 'put'})
        }

         const dishesDelete = (req, res)=>
        {
            res.json({'msg': 'delete'})
        }

    module.exports = {dishesGet, dishesPost, dishesDelete, dishesPut}