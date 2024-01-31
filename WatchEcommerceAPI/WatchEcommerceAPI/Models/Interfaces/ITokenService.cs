namespace WatchEcommerceAPI.Models.Interfaces
{

    public interface ITokenService
    {
        public Task<GenerateTokenResponse> GenerateToken(GenerateTokenRequest request);
    }
}
