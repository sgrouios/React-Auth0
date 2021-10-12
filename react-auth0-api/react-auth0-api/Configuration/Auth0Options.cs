using System.ComponentModel.DataAnnotations;

namespace react_auth0_api.Configuration
{
    public class Auth0Options : IJwtOptions
    {
        public static string ParentKey { get { return "Auth0"; } }
        
        [Required]
        public string Audience { get; set; }
        [Required]
        public string Authority { get; set; }
    }
}
