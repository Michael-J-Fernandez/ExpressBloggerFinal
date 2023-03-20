const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    createBlog,
    getOneBlogById,
    deleteOneById,
    updateOneById,
    deleteMany
} = require('../controllers/blogsController.js')


router.get('/', getAllBlogs);

router.post('/', createBlog);

router.get('/:id', getOneBlogById);

router.put('/:id', updateOneById);

router.delete('/delete-many', deleteMany);

router.delete('/:id', deleteOneById);


module.exports = router;