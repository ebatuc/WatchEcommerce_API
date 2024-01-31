using WatchEcommerceAPI.Models.DataAccess;
using WatchEcommerceAPI.Models.Interfaces;


namespace WatchEcommerceAPI.Models.Services
{
    public class AuthService : IAuthService
    {
        Context db=new Context();
        
        readonly ITokenService tokenService;

        public AuthService(ITokenService tokenService)
        {
            this.tokenService = tokenService;
        }

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }

            var user=db.Users.Where(x=>x.Email==request.Username && x.Password==request.Password).FirstOrDefault();

            if (user!=null)
            {
                var generatedTokenInformation = await tokenService.GenerateToken(new GenerateTokenRequest { Username = request.Username });

                response.AuthenticateResult = true;
                response.AuthToken = generatedTokenInformation.Token;
                response.AccessTokenExpireDate = generatedTokenInformation.TokenExpireDate;
                response.LoginUser = user;
            }

            return response;
        }
    }
}
