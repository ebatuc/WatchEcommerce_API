using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderedProductsController : ControllerBase
    {
        Context db = new Context();
        [HttpPost]
        public IActionResult OrderedProductAdd(OrderedProducts orderedProducts)
        {
            db.Add(orderedProducts);
            db.SaveChanges();
            return Ok();
        }
    }
}
