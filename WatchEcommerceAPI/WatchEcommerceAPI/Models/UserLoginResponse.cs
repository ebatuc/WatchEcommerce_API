using WatchEcommerceAPI.Models.DataAccess;

namespace WatchEcommerceAPI.Models
{
    public class UserLoginResponse
    {
        public bool AuthenticateResult { get; set; }
        public string AuthToken { get; set; }
        public DateTime AccessTokenExpireDate { get; set; }
        public Users LoginUser { get; set; }
    }
}
