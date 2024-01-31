using Microsoft.EntityFrameworkCore;

namespace WatchEcommerceAPI.Models.DataAccess
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"data source=BATUHANC;initial catalog=EcWatchDb;user id=sa;password=123456789;TrustServerCertificate=True;");
        }
        public DbSet<Brands> Brands { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<PersonalData> PersonalData { get; set; }
        public DbSet<Blog> Blog { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderedProducts> OrderedProducts { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<WishList> WishList { get; set; }
    }
}
