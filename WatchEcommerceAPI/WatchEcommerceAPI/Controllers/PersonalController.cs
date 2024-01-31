using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalController : ControllerBase
    {
        Context db = new Context();
        [HttpPost]
        public IActionResult PersonalAdd(PersonalData personalData)
        {
            db.Add(personalData);
            db.SaveChanges();
            return Ok();
        }
    }
}
