using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        Context db = new Context();
        [HttpGet]
        public IActionResult ProductList()
        {
            var products = db.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult ProductGet(int id)
        {
            var products = db.Products.Find(id);
            if (products == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(products);
            }

        }
    }
}
