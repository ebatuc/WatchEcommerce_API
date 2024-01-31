using System.ComponentModel.DataAnnotations.Schema;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class WishList
    {
        public int Id { get; set; }
        [ForeignKey("Products")]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public bool IsChecked { get; set; }
        public bool IsDelete { get; set; }
    }
}
