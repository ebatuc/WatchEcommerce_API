using System.ComponentModel.DataAnnotations.Schema;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class OrderedProducts
    {
        public int Id { get; set; }
        [ForeignKey("Orders")]
        public int OrderId { get; set; }
        [ForeignKey("Products")]
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
