using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        Context db = new Context();
        [HttpGet]
        public IActionResult BrandList()
        {
            var brands = db.Brands.ToList();
            return Ok(brands);
        }
    }
}
