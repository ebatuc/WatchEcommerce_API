using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        Context db = new Context();
        [HttpGet]
        [Authorize]
        public IActionResult BlogList()
        {
            var blogs = db.Blog.ToList();
            return Ok(blogs);
        }

        [HttpGet("{id}")]
        public IActionResult BlogGet(int id)
        {
            var blogs = db.Blog.Find(id);
            if (blogs == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(blogs);
            }

        }
    }
}
