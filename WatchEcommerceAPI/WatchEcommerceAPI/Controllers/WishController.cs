using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishController : ControllerBase
    {
        Context db = new Context();

        [HttpPost]
        public IActionResult WishPost(WishList wishList)
        {
            wishList.IsDelete = wishList.IsDelete == true ? false : wishList.IsDelete;

            // Eğer IsChecked değeri true ise, false olarak ayarla; aksi takdirde zaten false olan değeri koru
            wishList.IsChecked = wishList.IsChecked == true ? false : wishList.IsChecked;

            db.Add(wishList);
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IActionResult WishGet()
        {
            var wish = db.WishList.ToList().Where(x => x.IsDelete == false);
            return Ok(wish);
        }

        [HttpDelete]
        public IActionResult WishDelete(int wishId)
        {
            var wish = db.WishList.FirstOrDefault(x => x.Id == wishId && x.IsDelete == false);
            if (wish != null)
            {
                wish.IsDelete = true;
                db.SaveChanges();

                return Ok("Wish deleted successfully");
            }

            return NotFound("Wish not found");
        }

        [HttpPut]
        public IActionResult WishPut(int wishId)
        {
            var wish = db.WishList.FirstOrDefault(x => x.Id == wishId && x.IsDelete == false);
            if (wish != null)
            {
                wish.IsChecked = !wish.IsChecked;
                db.SaveChanges();
                return Ok($"Wish {wish.ProductName} IsChecked status updated to {wish.IsChecked}");
            }

            return NotFound("Wish not found");
        }
    }
}
