using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class PersonalData
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)] // Otomatik artan olmayacak
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? District { get; set; }
        public string? Zip { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
    }
}
