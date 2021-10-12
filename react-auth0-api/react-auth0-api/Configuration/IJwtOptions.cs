namespace react_auth0_api.Configuration
{
    public interface IJwtOptions
    {
        string Audience { get; set; }
        string Authority { get; set; }
    }
}