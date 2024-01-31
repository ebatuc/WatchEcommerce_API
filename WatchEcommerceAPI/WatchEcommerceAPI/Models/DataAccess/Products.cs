using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class Products
    {
        [Key]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public string? Slug { get; set; }
        [ForeignKey("Brands")]
        public int BrandId { get; set; }

        public Brands? Brand { get; set; }

        //public List<OrderedProducts>? OrderedProduct { get; set; }
    }

}
