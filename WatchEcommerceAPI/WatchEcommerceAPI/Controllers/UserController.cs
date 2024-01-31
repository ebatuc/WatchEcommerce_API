using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        Context db = new Context();
        [HttpPost]
        public IActionResult UserAdd(Users user)
        {
            if (user.RegisteredDate == null || user.RegisteredDate == default(DateTime))
            {
                user.RegisteredDate = DateTime.Now; 
            }
            db.Add(user);
            db.SaveChanges();
            return Ok();
        }
    }
}
