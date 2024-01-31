namespace WatchEcommerceAPI.Models.DataAccess
{
    public class Blog
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public string? LongDescription { get; set; }
        public string? Slug { get; set; }
        public string? Image { get; set; }
        public string? PostBy { get; set; }
        public DateTime PostDate { get; set; }
    }
}
