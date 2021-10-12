using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace react_auth0_api.Configuration
{
    public static class JwtConfig
    {
        public static IServiceCollection ConfigureJwt(this IServiceCollection services, IConfiguration config)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => 
            {
                options.Authority = config.GetSection(Auth0Options.ParentKey)
                    .Get<Auth0Options>()
                    .Authority;
                options.Audience = config.GetSection(Auth0Options.ParentKey)
                    .Get<Auth0Options>()
                    .Audience;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    NameClaimType = ClaimTypes.NameIdentifier
                };
            });
            return services;
        }
    }
}
