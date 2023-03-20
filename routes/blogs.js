const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    createOneBlog,
    getOneBlogById,
    deleteOneById,
    updateOneById,
    deleteMany
} = require('../controllers/blogsController.js')


router.get('/', getAllBlogs);

router.get('/get-one/:id', getOneBlogById);

router.post('/create-one', createOneBlog);

router.get('/delete-by-id/:id', deleteOneById);

router.get('/delete-many', deleteMany);

router.put('/update-by-id/:id', updateOneById);


module.exports = router;