using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class Orders
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)] // Otomatik artan olmayacak
        [ForeignKey("OrderedProducts")]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }

        [ForeignKey("PersonalData")]
        public int PersonalInfoId { get; set; }
        public double TotalPrice { get; set; }
        //[NotMapped] // Bu özellik veritabanına eklenmeyecek, sadece foreign key ilişkisi kurmak için kullanılacak
        //public PersonalData? PersonalData { get; set; }

        //[NotMapped] // Bu özellik veritabanına eklenmeyecek, sadece foreign key ilişkisi kurmak için kullanılacak
        //public List<OrderedProducts>? OrderedProducts { get; set; }

    }
}
