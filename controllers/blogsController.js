const Blog = require('../models/Blogs.js')


async function getAllBlogs(req, res) {
    try {
      const allBlogs = await Blog.find({});
      res.json({blogs: allBlogs });

    }catch(e){
      console.log(e);
    }
}

async function getOneBlogById(req, res) {
    if (!req.params.id) {
      res.json({
        success: false,
        message: "The blog id must be provided in the url parameters",
      });
      return;
    }
    
    try {
        const foundBlog = await Blog.find({ id: req.params.id });
        res.json({
          success: true,
          foundBlog,
        });
        
    } catch (e) {
        console.log(e.message);
    }
}

async function createBlog(req, res) {
    try {
      const newBlog = await Blog.create( req.body )
  
      res.json({
          success: true,
          savedBlog: newBlog
      });
  
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
}

async function updateOneById(req, res) {
    if (!req.params.id) {
      res.json({
        success: false,
        message: "The blog id must be provided in the url parameters",
      });
      return;
    }
    
    try {
        await Blog.updateOne({ id: req.params.id }, req.body);
        
        return res.json({
          success: true,
          message: `Updated one blog with id: ${req.params.id}`
        });
        
    } catch (e) {
        console.log(e.message);
        res.json({
            success: false,
            message: e.message
        })
    }
}

async function deleteOneById(req, res) {
    if (!req.params.id) {
      res.json({
        success: false,
        message: "The blog id must be provided in the url parameters",
      });
      return;
    }
    
    try {
        await Blog.deleteOne({ id: req.params.id });
        res.json({
          success: true,
          message: `Deleted one blog with id: ${req.params.id}`,
        });
        
    } catch (e) {
        console.log(e.message);
    }
}

async function deleteMany(req, res) {
    if (!req.query) {
      res.json({
        success: false,
        message: "Query parameters must be provided",
      });
      return;
    }
    
    try {
        await Blog.deleteMany(req.query);
        res.json({
          success: true,
          message: `Deleted multiple blogs matching: ${req.query}`,
        });
        
    } catch (e) {
        console.log(e.message);
        res.send(e.message);
    }
}



module.exports = {
    getAllBlogs,
    createBlog,
    getOneBlogById,
    deleteOneById,
    updateOneById,
    deleteMany
}