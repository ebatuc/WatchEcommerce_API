using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        Context db = new Context();

        [HttpPost]
        public IActionResult OrderPost(Orders order)
        {

            if (order.OrderDate == null || order.OrderDate == default(DateTime))
            {
                order.OrderDate = DateTime.UtcNow; 
            }
            db.Add(order);
            db.SaveChanges();
            return Ok();
        }

    }
}
